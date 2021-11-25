---
title: Same logic in 4 major FE frameworks, how do they compare?
author: Štěpán Granát
author_title: Tolgee Team
author_url: https://github.com/stepan662
author_image_url: https://avatars.githubusercontent.com/u/8831144?v=4
tags: [react.js, angular, vue.js, svelte, SDK, i18n]
---

In [Tolgee.io](https://tolgee.io) we needed to implement integrations for all major frontend frameworks. Because it's
basically the same functionality in all of them and since it's not completely basic stuff, I think it can provide a
quite interesting insight into advanced features of these frameworks.

## Overall design

Tolgee is a localization platform. Our integration libraries have two purposes:

- Display and format translations in the application + manage language changes
- In dev mode allow "in-context" localization - which means, that he can edit translations directly in the app

So in dev mode our library needs to communicate with our server, but in production mode it will only deal with generated
JSON files, containing translations.

![Tolgee schema](/img/blog/tolgee-dev-schema.png)

## General integration library architecture

Integration libraries provide tailored API for given framework and only need to react on translation/language changes,
coming from core library. They also need to detect, when user clicks on given translation, so core library knows which
translation is edited (in DEV mode).

### Translating regular texts

Every integration needs to provide a way to translate regular texts on the page in form of special component, so user
can simply use the component and we need to make sure, that correct translation is displayed (based on selected
language). We are using [ICU](https://formatjs.io/docs/core-concepts/icu-syntax/) message format, which allows passing
variables, so user can also pass named parameters, which are referenced in translation self and translation strings can
look like `You have {itemsCount} items in your cart`. In ideal scenario we'd like something like this:

```jsx
<T keyName="cart_content_key" parameters={{itemsCount: 5}}/>
```

> I have to confess, that my main working tool is React and so I use React as kind of reference implementation, so also these examples are in JSX

### Translating imperatively

Translations can occur not only directly as children in DOM elements, but also in parameters like `title`
or `aria-label`. For these cases we can't use component, but we need some user callable function, which will translate
the text for him imperatively. E.g.:

```jsx
<div title={t('translation_key')}>...</div>
```

This function needs to be generally focused as user also might want to use it outside of dom e.g.:

```js
document.title = t('title_key')
```

### Source of data

We need a way to provide `tolgee/core` instance and ideally we don't want limit it for just one (user might want to use
multiple different sources of translations in the same project). Ideal would be to provide the instance globally or to a
subtree of components in the application (In React it's exactly what Context API does).

## Implementation for React

In React we use context API to provide tolgee instance to all children:

```jsx
export const TolgeeProviderContext = React.createContext(null);

export const TolgeeProvider = ({config, children}) => {
  const [tolgee] = useState(new Tolgee(config));

  useEffect(() => {
    tolgee.run();
    return () => {
      tolgee.stop();
    };
  }, []);

  return (
    <TolgeeProviderContext.Provider value={{tolgee}}>
      {children}
    </TolgeeProviderContext.Provider>
  );
};
```

Now let's look how we can use tolgee context in `T` component:

```jsx
export const T = ({ keyName, parameters }) =>
{
  const {tolgee} = useContext(TolgeeProviderContext);

  // get initial value
  const [translated, setTranslated] = useState(
    tolgee.instant(keyName, parameters)
  );

  useEffect(() => {
    // subscribe to translation changes
    const subscription =
      tolgee.onTranslationChange.subscribe((data) => {
        if (data.key === keyName) {
          setTranslate(tolgee.instant(keyName, parameters));
        }
      });

    return () => {
      subscription.unsubscribe();
    };
  }, [keyName, parameters]);

  return translated;
};
```

Tolgee instance holds internal cache with all current translations. So when we call `tolgee.instant()`, we'll get
current translation of the key with applied parameters, also we can subscribe to translation changes, which happen e.g.
when language is changed or when user manually changes the translation through in-context localization tool.

### Imperative translating in React

To create simple to use `t` function in react, we need to somehow "hook" it to component livecycle as we need not just
to translate keys, but also subscribe the component to translation changes. Simpliest solution (as I might given you a
hint) is to create hook, which returns this `t` function. Then we have separate `t` function for each component and we
can connect it to the component lifecycle. Let's look how that can look like.

```js
export const useTranslate: () => ReturnFnType = () => {
  const {tolgee} = useTolgeeContext();

  // dummy state to force component to re-render
  const [_, setDummyValue] = useState(0);
  const reRender = () => {
    setDummyValue((v) => v + 1);
  };

  // array of used keys
  const usedKeysRef = useRef(new Set());

  useEffect(() => {
    const subscription = tolgee.onTranslationChange.subscribe((data) => {
      // check if we are using this key
      if (usedKeysRef.current.has(data.key)) {
        reRender()
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (keyName, parameters) => {
    // remember that this key was used
    usedKeysRef.current.add(keyName)

    return tolgee.instant(keyName, parameters)
  };
};
```

This hook can be then used in following way:

```jsx
export const MyComponent = () => {
  const t = useTranslate()

  return <div title={t('title_key')}>...</div>
}
```

We basically give user a function and then observe what keys is he using it for. When translation changes, we check if
it was used before in this component and eventually we force component to re-render.

> React doesn't have a direct way how to force component to re-render, so we do it through dummy state update.

#### Notes

Implementation for all frameworks and is quite a bit simplified in order to fit into one article. The core library is in
reality a bit more complex and also we've completely skipped in-context localization event handlers (that allows user to
click on translation), as it is quite complex subject.

## Implementation for Vue.js

Vue.js has also concept of providing a context to it's children. We can do this by `provide` method on any component.

```js
export const TolgeeProvider = {
  name: 'TolgeeProvider',
  props: {
    config: {type: Object, required: true},
  },
  created() {
    const tolgee = new Tolgee({...this.$props.config});
    this.tolgeeContext.tolgee = tolgee;
    tolgee.run()
  },
  data() {
    return {
      tolgeeContext: {
        tolgee: null,
        // more reactive properties here
      },
    };
  },
  provide() {
    return {
      tolgeeContext: this.tolgeeContext,
    };
  },
  beforeUnmount() {
    this.tolgeeContext.tolgee.stop();
  },
  render() {
    this.$slots.default()
  },
};
```

Vue is using methods to manage lifecycle of the component, it seems pretty similar to React class components. Where Vue
is quite different is that it's using reactive objects - everyting you put inside `data` property, will get turned into
reactive objects (which are watching for changes), so that way vue triggers re-renedering. In example above, we are
putting a whole `tolgeeContext` into data property, because in reality we need more things to be passed down and it
needs to be reactive.

Now let's look how `T` component can work.

```js
export const T = defineComponent({
  name: 'T',
  inject: ['tolgeeContext'],
  props: {
    keyName: {type: String, required: true},
    parameters: Object,
  },
  data() {
    const tolgeeContext = this.tolgeeContext;
    return {
      translation:
        tolgeeContext.tolgee.instant(
          this.$props.keyName,
          this.$props.parameters
        )
    };
  },
  methods: {
    translate(data) {
      if (data.key === this.$props.keyName) {
        this.$data.translation =
          tolgeeContext.tolgee.instant(
            this.$props.keyName,
            this.$props.parameters
          )
      }
    }
  },
  created() {
    const tolgeeContext = this.tolgeeContext;
    this.$options.subscription =
      tolgeeContext.tolgee.onTranslationChange.subscribe(this.translate);
  },
  beforeUnmount() {
    this.$options.subscription.unsubscribe();
  },
  render() {
    return this.$data.translation
  },
});
```

It's quite similar to React implementation. We use `tolgeeContext` through `inject` property and subscribe to
translation changes in lifecycle methods.

### Imperative translating in Vue

As we don't have anything like hooks in Vue, we'll have to use it's `Mixin` api. Mixin is a way how to share logic
between components while using it's lifecycle methods.

```js
export const TolgeeMixin = defineComponent({
  inject: ['tolgeeContext'],
  beforeCreate() {
    this.$options.usedKeys = new Set()
  },
  created() {
    const tolgeeContext = this.tolgeeContext;
    this.$options.subscription =
      tolgeeContext.tolgee.onTranslationChange.subscribe((data) => {
        if (this.$options.usedKeys.has(data.key)) {
          this.$forceUpdate();
        }
      });
  },
  methods: {
    $t(keyName, params) {
      this.$options.usedKeys.add(keyName)
      const tolgeeContext = this.tolgeeContext;
      return tolgeeContext.tolgee.instant(keyName, params);
    },
  },
  beforeUnmount() {
    this.$options.subscription.unsubscribe();
  },
});
```

Mixin can then be used following way:

```html
<template>
  <div :title="$t('title_key')">...</div>
</template>

<script>
export const Component = {
  mixins: [TolgeeMixin],
};
</script>
```

So here we inject `tolgeeContext`, subscribe into translation changes and add `$t` method, which can then be used by the
user. We also collect maintain a list of keys, which were used and we update the component when they change. Notice that
Vue has explicit method `$forceUpdate`, which causes re-render of the component. Nice ☺️.

## Implementation in Svelte

In svelte we implemented the provider quite similarly as in Vue and React.

```svelte
<!-- TolgeeProvider.svelte -->
<script>
  import { onDestroy, onMount, setContext } from "svelte";

  export let config: TolgeeConfig;
  const tolgee = new Tolgee(config);

  setContext("tolgeeContext", { tolgee });

  onMount(() => tolgee.run());
  onDestroy(() => tolgee.stop());
</script>

<slot />
```

The `T` component that uses the context looks like this:

```svelte
<script>
  import { onDestroy, getContext } from "svelte";

  export let keyName;
  export let parameters;
  const tolgeeContext = getContext('tolgeeContext');

  let translated
  const translate = () => {
    translated = tolgeeContext.tolgee.instant(
      keyName,
      parameters,
    );
  }

  translate();
  const subscription =
    tolgeeContext.tolgee.onTranslationChange.subscribe((data) => {
      if (data.key === keyName) {
        translate()
      }
    });

  onDestroy(() => {
    subscription.unsubscribe();
  });
</script>

{translated}
```

The `TolgeeProvider` and `T` component are very similar to React implementation.

The differences are:

- Svelte has lifecycle methods, React has hooks
- There is different API for context, but it's quiet similar

In my opinion the Svelte lifecycle methods are little easier to read, but if you're familiar with React hooks, in the
other hand, you can write a bit less code.

### Imperative translating in Svelte

The biggest difference from React integration is in the `getTranslate` method, which in Svelte returns a Store
containing the method to actually translate the key.

```js
import {onDestroy, getContext} from 'svelte';
import {derived, writable} from 'svelte/store';

export const getTranslate = () => {
  const context = getContext('tolgeeContext');
  const tolgee = context.tolgee;

  // set of used keys
  const usedKeys = new Set();

  // dummy store which is updated to forces providing of new translate method
  const updateStore = writable(0);
  const update = () => updateStore.update((number) => number + 1);

  const translate = (keyName, params) => {
    usedKeys.add(keyName);
    return tolgee.instant(keyName, params);
  };

  const subscription =
    tolgee.onTranslationChange.subscribe((data) => {
      if (usedKeys.has(data.key)) {
        update();
      }
    });

  onDestroy(() => {
    subscription.unsubscribe();
  });

  // return new translate method when something is changed
  return derived(
    // when updateStore changes, translate function gets changed as well
    updateStore,
    () => (keyName, params) => {
      return translate(keyName, params);
    }
  );
};
```

Example usage of `getTranslate` function:

```svelte
<script>
  const t = getTranslate();
</script>

<div title={$t('title_key')}>...</div>
```

In react the `useTranslate` is hook, which is basically modifying state to force rerender when translation changes and
the returned `t` function called by the new render then returns new value.

Similar thing happens in Svelte, but there the `t` is actually a store containing the translating function. That's why
there is the `$` before the function call. It means that the value should be re-rendered whenever the store is updated.

## Angular

The most different approach is used in Angular integration. Instead of provider, there is a module. Which setups the
Tolgee Core library. And provides the service, pipe and component to allow translating in the module components.

### The NgxTolgeeModule

```typescript
@NgModule({
  declarations: [TranslatePipe, STranslatePipe, TComponent],
  exports: [TranslatePipe, STranslatePipe, TComponent],
  providers: [],
})
export class NgxTolgeeModule {
  // @dynamic
  static forRoot(options: TolgeeConfig): ModuleWithProviders<NgxTolgeeModule> {
    options = {filesUrlPrefix: '/assets/i18n/', ...options};
    return {
      ngModule: NgxTolgeeModule,
      providers: [
        TranslateService,
        TranslationsProvider,
        {
          provide: APP_INITIALIZER,
          useFactory: (provider: TranslationsProvider) => {
            return async () => await provider.load(options);
          },
          deps: [TranslationsProvider, TranslateService],
          multi: true,
        },
        {provide: TolgeeConfig, useValue: options},
      ],
    };
  }
}
```

Cool thing about this is the factory, which enables us to wait for translations to be loaded before it renders the
application to the DOM. In other frameworks, this is handled by loadingFallback props or slots, which are rendered when
translations are loading.

### The translation service and Observables

In Angular world RxJs and its Observable interface are very popular. The Observable is similar thing as an event
emitter. It enables us to emmit new values until we are done and enables us to unsubscribe when we need so. This is
exactly what we need for our purpose.

```typescript
import {EventEmitter, Injectable, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs';
import {Tolgee, TranslationData} from '@tolgee/core';
import {TolgeeConfig} from './tolgeeConfig';

@Injectable()
export class TranslateService implements OnDestroy {
  constructor(private config: TolgeeConfig) {
  }

  // Logic creating the Instance of Tolgee and lot of other stuff is ommited
  // ...

  private _tolgee: Tolgee;

  public get tolgee(): Tolgee {
    return this._tolgee;
  }

  public translate(
    key: string,
    params = {},
  ): Observable<string> {
    return new Observable((subscriber) => {
      const translate = async () => {
        const translated = await this.tolgee.translate(
          key,
          params,
        );

        subscriber.next(translated);
      };

      translate();

      const onTranslationChangeSubscription =
        this.tolgee.onTranslationChange.subscribe((data) => {
          if (data.key === key) {
            translate();
          }
        });

      return () => {
        onTranslationChangeSubscription.unsubscribe();
      };
    });
  }
}
```

The service's `translate` method creates new Observable and emits new value every time translation is changed, which is
emitted by Tolgee instance from @tolgee/core library. It also returns function, which enables us to unsubscribe.

### The `translate` pipe

Pipe is a feature, which is missing in all the other integrations. It's basically function, which is able to change
value used in template to some other value.

```typescript
import {OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from './translate.service';
import {Subscription} from 'rxjs';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  value = '';
  key: string;
  params: Record<string, any>;
  private subscription: Subscription;

  constructor(protected translateService: TranslateService) {
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  transform(
    key: any,
    params?: Record<string, any>
  ): string {
    if (!key) {
      return key;
    }

    if (
      this.key === key &&
      JSON.stringify(this.params) === JSON.stringify(params)
    ) {
      return this.value;
    }

    this.key = key;
    this.params = params;

    this.unsubscribe();
    this.subscription = this.translate(key, params);

    return this.value;
  }

  private unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private translate(key, params) {
    this.translateService.translate(key, params).subscribe((r) => {
      this.value = r;
    });
  }
}
```

Angular is basically running the transform method every time the user moves mouse or hits some keys, since it is impure
pipe, which may return different result for the same input. That happens, when language is changed: same key and params,
different result.

## The component with `t` attribute selector

Also `TCoponent` subscribes to `translate` Observable and changes the result according to the new value. Unlike the
`translate` pipe, it modifies the element's text content.

```typescript
import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {TranslateService} from './translate.service';
import {TOLGEE_WRAPPED_ONLY_DATA_ATTRIBUTE} from '@tolgee/core';

@Component({
  selector: '[t]',
  template: ``,
})
export class TComponent implements OnInit, OnDestroy {
  @Input() params?: Record<string, any>;
  @Input() key: string;
  subscription: Subscription;

  constructor(
    private ref: ElementRef,
    private translateService: TranslateService
  ) {
  }

  ngOnInit(): void {
    const element = this.ref.nativeElement as HTMLElement;
    element.setAttribute(TOLGEE_WRAPPED_ONLY_DATA_ATTRIBUTE, this.key);

    // set safe at first
    element.textContent = this.translateService.instantSafe(
      this.key,
      this.params,
    );

    // then do the async translation
    this.subscription = this.translateService
      .translate(this.key, this.params, this.default)
      .subscribe((translated) => {
        return (element.textContent = translated);
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
```

In comparison to other frameworks it seems that Angular library needs a bit more code and the integration is more
complicated.
