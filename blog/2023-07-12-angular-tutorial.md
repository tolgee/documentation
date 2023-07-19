---
slug: how-to-localize-angular-app

title: 'Learn How to Easily Translate Your Angular App with Tolgee'

authors: [knzapdi]

image: '/img/blog/angular-tutorial/angular_tolgee.jpg'

description: 'In this tutorial, you will learn how to painlessly translate an Angular application in many languages using Tolgee, a powerful open-source Localization engine.
'

tags: [Angular, localization, i18n, tutorial]
---

In this tutorial, you will learn how to painlessly translate an Angular application in many languages using Tolgee, a powerful open-source Localization engine

![Angular Tolgee](/img/blog/angular-tutorial/angular_tolgee.jpg)

<!--truncate-->

## Why Tolgee?

[Tolgee](https://tolgee.io) is a robust translation management tool that can help you save time and budget by streamlining your translation process. Here are some of the main advantages of utilizing Tolgee:

### It’s Open Source

Tolgee is an [open-source](/blog/6-ways-how-to-contribute-to-open-source-and-to-tolgee) tool. It is hosted on [GitHub](https://github.com/tolgee) and has a strong community behind it with maintainers. It also has a [Slack forum](https://join.slack.com/t/tolgeecommunity/shared_invite/zt-195isb5u8-_RcSRgVJfvgsPpOBIok~IQ) and a [GitHub Discussion](https://github.com/tolgee/tolgee-platform/discussions) canal where users can ask questions and get answers regarding bugs, the newest features and releases.

### Self-hosted

Host your own server to have full control over your work. You can run it with Docker or Java. A cloud version is equally available with many bundles.

### Automated Translation

Tolgee can help you automate your translation process. It has a platform that integrates with machine translation services, such as Google Translate and AWS, to automatically translate your content. This ensures that your translations are accurate and consistent.

### Simplified Translation Management

Manage all your translations in one place with Tolgee. The platform allows you to easily import and export translation files and track your translation progress in a smooth way.

### Rapid Integration and In-context-Translation

Are you working with [Reactjs](/blog/2023-05-04-localize-your-reactjs-app-the-simplest-way-youve-ever-seen.md), Gatsby, Nextjs, Svelte, Vanilla Js or Figma? Tolgee has it all. Painlessly translate your [Vuejs application](/blog/how-to-localize-vue-app) in a matter of minutes. Tolgee is more than just another localization tool that offers integrations that simply sync your local data with the backend. Tolgee is completely integrated into your app through SDKs.

Tolgee SDK implements i18n library features and assists you with formatting, interpolation, and language recognition. It also acts as a bridge to the Tolgee Platform, through [in-context translation](https://tolgee.io/js-sdk/) allowing you to generate one-click screenshots and change translations straight in your app.

## What is Angular?

![Angular](/img/blog/angular-tutorial/angular.png)

[Angular](https://angular.io/) is a well-known framework for creating dynamic web apps. It is a Google-maintained open-source front-end web application development framework. It is built on the TypeScript programming language and helps developers swiftly design modern, dynamic web applications.

Angular has a number of features that make it simple to create complex web applications. Two-way data binding, dependency injection, and component-based architecture are among the features. It also contains built-in routing, form, and animation capabilities.

Angular is a strong and adaptable framework for constructing online apps, and its popularity among developers is growing. Some applications built with Angular include:

- Gmail
- Forbes
- Upwork
- JetBlue
- Paypal
- Wikiwand

## How to Localize an Angular App with Tolgee

In this section you will learn how to translate an angular application step-by-step using Tolgee. Set up your environment and let’s get started.

## Step 1: Create a Tolgee project

Create a brand new project in the [Tolgee Platform](https://app.tolgee.io/) or use a Docker or Java [Self-hosted version](https://tolgee.io/platform/self_hosting/getting_started). Once logged in to the platform, create a project by clicking on the add button at the top right corner of your dashboard

![Create new project](/img/blog/angular-tutorial/create_new_project.png)

In the new window that opens, fill in the demanded information. In this tutorial, we will translate into three languages: English, French and Spanish.

![Project Details](/img/blog/angular-tutorial/project_details.png)

Once completed, hit the Save button.

## Step 2: Generate Your API Key

Next we will generate an API Key that will enable us to connect our client app to the Tolgee server. To generate a key click on the Integrate icon (the last element in the left menu), then select Angular in the list of app integrations.

![Choose Angular](/img/blog/angular-tutorial/select_angular.png)

From here, click on the dropdown file and select Create new + to generate a new API Key.

<img src="/img/blog/angular-tutorial/create_api_key.png" width="400" alt="Create api key"/>

Provide a name for your key and choose for how long you wish to use it and Click on the Save Button. Feel free to define a particular scope depending on your project requirement. In this tutorial, we will use the default scope settings.

<img src="/img/blog/angular-tutorial/name_api.png" width="400" alt="Name API"/>

Once you hit the save button, it will generate an API key under the Integrate section. Make sure to save the key somewhere. You will be using it later.

## Step 3: Create an Angular Application

Use the command below to create a new Angular project. Make sure your environment is correctly set up to run [an angular project](https://angular.io/guide/setup-local).

```bash
ng new tolgee-ngx
```

You will be prompted to provide some specifications for your project.

```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? (Use arrow keys)
> CSS
  SCSS   [ <https://sass-lang.com/documentation/syntax#scss>                ]
  Sass   [ <https://sass-lang.com/documentation/syntax#the-indented-syntax> ]
  Less   [ <http://lesscss.org>                                             ]
```

```bash
cd tolgee-ngx
ng serve --open
```

This command launches your app, watches your files and rebuilds it whenever you make changes.
The `--open` flag automatically opens your browsers to the `[localhost:4200](http://localhost:4200/)`.

![Angular Application](/img/blog/angular-tutorial/angular_app.png)

This is the basic application we will be translating with Tolgee. We will add a select component that will enable us to switch from one language to another.

## Step 4: Install Tolgee

To translate your angular application we need to install the Tolgee package. Open another terminal window and run the command below in the project’s root directory.

```bash
npm i @tolgee/ngx
```

The command will install all the necessary dependencies.

## Step 5: Add Environment Variables

In the `src` directory create `environments/environment.local.ts` file and paste the following code:

```typescript
export const environment = {
  production: false,
  tolgeeApiUrl: 'Your server url here',
  tolgeeApiKey: 'Your api key here',
};
```

Replace `tolgeeApiUrl` with your server URL and `tolgeeApiKey` with the API key you generated earlier. Since this app is not for production, we set this variable to false.

## Step 6: Setup Tolgee NgModule

Open your `src/app/app.module.ts` and add the following code:

```typescript
...

import {
  DevTools,
  NgxTolgeeModule,
  Tolgee,
  TOLGEE_INSTANCE,
  FormatSimple,
} from '@tolgee/ngx';
import { environment } from 'src/environments/environment.local';

...

@NgModule({
  ...
  imports: [..., NgxTolgeeModule],

  providers: [
    {
      provide: TOLGEE_INSTANCE,
      useFactory: () => {
        return Tolgee().use(DevTools()).use(FormatSimple()).init({
          language: 'en',
          apiUrl: environment.tolgeeApiUrl,
          apiKey: environment.tolgeeApiKey,
        });
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Add the `NgxTolgeeModule` in the import section and provide a Tolgee instance in the providers. Our default application language is en you can change it to fr or es depending on your preferences. Lastly, we import the environment variable we added earlier which will help us to communicate with the server.

- The DevTools() is used for in-context translating in dev mode
- The FormatSimple() enables you to pass variables into translations
- The BackendFetch() fetches data from the custom backend

## Step 7: Translation

To translate our app, we need to add the `t` like the example below to every text we want to translate

```html
<h1 t key="translate_me" default="Translate me!"></h1>
```

Open the `src/app/app.component.html`, then add your key translations:

```html
...

<!-- Toolbar -->
...

<div class="content" role="main">
  <!-- Highlight Card -->

  <div class="card highlight-card card-small">
    ...

    <span>{{ title }}</span><span t key="app_running"></span>

    ...
  </div>

  <!-- Resources -->
  <h2 t key="resources"></h2>
  <p t key="useful_links"></p>

  <div class="card-container">
    <a
      class="card"
      target="_blank"
      rel="noopener"
      href="<https://angular.io/tutorial>"
    >
      ...
      <span t key="learn_angular"></span>
      ...
    </a>

    <a
      class="card"
      target="_blank"
      rel="noopener"
      href="<https://angular.io/cli>"
    >
      ...
      <span t key="cli_doc"></span>
      ...
    </a>

    <a
      class="card"
      target="_blank"
      rel="noopener"
      href="<https://material.angular.io>"
    >
      ...
      <span t key="angular_material"></span>
      ...
    </a>

    <a
      class="card"
      target="_blank"
      rel="noopener"
      href="<https://blog.angular.io/>"
    >
      ...
      <span t key="angular_blog"></span>
      ...
    </a>

    <a
      class="card"
      target="_blank"
      rel="noopener"
      href="<https://angular.io/devtools/>"
    >
      ...
      <span t key="angular_devtools"></span>
      ...
    </a>
  </div>

  <!-- Next Steps -->
  <h2 t key="next_step"></h2>
  <p t key="what_you_want"></p>

  <input type="hidden" #selection />

  <div class="card-container">
    <button
      class="card card-small"
      (click)="selection.value = 'component'"
      tabindex="0"
    >
      ...
      <span t key="new_component"></span>
    </button>

    <button
      class="card card-small"
      (click)="selection.value = 'material'"
      tabindex="0"
    >
      ....
      <span t key="angular_material"></span>
    </button>

    <button
      class="card card-small"
      (click)="selection.value = 'pwa'"
      tabindex="0"
    >
      ...
      <span t key="add_pwa_support"></span>
    </button>

    <button
      class="card card-small"
      (click)="selection.value = 'dependency'"
      tabindex="0"
    >
      ...
      <span t key="add_dependency"></span>
    </button>

    <button
      class="card card-small"
      (click)="selection.value = 'test'"
      tabindex="0"
    >
      ...
      <span t key="watch_tests"></span>
    </button>

    <button
      class="card card-small"
      (click)="selection.value = 'build'"
      tabindex="0"
    >
      ...
      <span t key="build_prod"></span>
    </button>
  </div>

  <!-- Terminal -->
  <div class="terminal" [ngSwitch]="selection.value">...</div>

  <!-- Links -->
  <div class="card-container">
    <a
      class="circle-link"
      title="Find a Local Meetup"
      href="<https://www.meetup.com/find/?keywords=angular>"
      target="_blank"
      rel="noopener"
    >
      ...
    </a>

    <a
      class="circle-link"
      title="Join the Conversation on Discord"
      href="<https://discord.gg/angular>"
      target="_blank"
      rel="noopener"
    >
      ...
    </a>
  </div>

  <!-- Footer -->
  <footer>
    <span t key="love_angular"> </span>
    <a
      href="<https://github.com/angular/angular>"
      target="_blank"
      rel="noopener"
    >
      <span t key="give_star"> </span>
      ...
    </a>
    <a
      href="<https://github.com/angular/angular>"
      target="_blank"
      rel="noopener"
    >
      ...
    </a>
  </footer>

  ...
</div>

...
```

## Step 8: Translation

Once we have added the T components, we can begin translating any part of our website by simply hovering the text and performing `alt+click` or `option+click`.

On `alt` text hover, the text to be translated will be highlighted like in the screenshot below

![alt click](/img/blog/angular-tutorial/alt_click.png)

If you click on the text while still holding the `alt` key, a dialog box will open for you to translate your text.

![Dialog translation](/img/blog/angular-tutorial/angular_quick-trans.png)

Translate your text and click on `create` to save the translation into the Tolgee Platform. Repeat this action for every text you want to translate.

This approach is faster than to edit the localization `json` file or add it to the platform manually. To fix such key, you just have to click the string and any team member can do that with Tolgee chrome plugin, not only developers. You can [generate screenshots](https://tolgee.io/js-sdk#automated-screenshots-generation) by clicking the camera. This way future translators will know the context and will translate the string correctly

Note that you can also manually add translations to your projects via the Tolgee Platform and export them.

![Add translation button](/img/blog/angular-tutorial/addtrans_1.png)

In the dialog that opens, add your translations and save

![Create new key](/img/blog/angular-tutorial/addtrans_2.png)

Make sure to select all the languages you want to add a translation for. In this case, we want translations for our three languages `en`, `fr`, and `es`. Add the key name of your translation in the `Key` field. In the screenshot above the key `welcome` corresponds to the word `Welcome` in English. Once you click on the `French` or `Spanish` field, it automatically suggests you a list of translations to choose from various services like AWS translate or Google Translate and you can easily customize it to fit your context.

![Tranlate text](/img/blog/angular-tutorial/addtrans_3.png)

Repeat the process for every piece of text you want to translate. At the end your translation screen should be close to this:

![Translation list](/img/blog/angular-tutorial/translation_list.png)

In case you have a lot of translations from large codebase, you can use the [CLI extract command](https://tolgee.io/tolgee-cli/extraction/syncing-strings). (It works only for React now, but we are working on Vue and Angular implementations)

To export your translations, click on the Export menu in your left menu

![Export Translation files](/img/blog/angular-tutorial/export_Trans.png)

Select all the languages you wish to export and click on `export`. This will save a compressed file on your machine.

Now, navigate to `src` folder in your angular project and create `i18n` folder. Add the content of the extracted file to this folder.

![Create I18n folder](/img/blog/angular-tutorial/angular_i18n.png)

`en.json:`

```json
{
  "welcome": "Welcome",
  "app_running": "app is running!",
  "resources": "Resources",
  "useful_links": "Here are some links to help you get started:",
  "leanr_angular": "Learn Angular",
  "cli_doc": "CLI Documentation",
  "angular_blog": "Angular Blog",
  "angular_devtools": "Angular DevTools",
  "next_step": "Next Steps",
  "what_you_want": "What do you want to do next with your app?",
  "new_component": "New Component",
  "angular_material": "Angular Material",
  "add_pwa_support": "Add PWA Support",
  "add_dependency": "Add Dependency",
  "watch_tests": "Run and Watch Tests",
  "build_prod": "Build for Production",
  "love_angular": "Love Angular?",
  "give_star": "Give our repo a star."
}
```

`fr.json:`

```json
{
  "welcome": "Bienvenue",
  "app_running": "l'application est en cours d'exécution !",
  "resources": "Ressources",
  "useful_links": "Voici quelques liens pour vous aider à démarrer :",
  "leanr_angular": "Apprendre Angular",
  "cli_doc": "Documentation CLI",
  "angular_blog": "Angular Blog",
  "angular_devtools": "Outils de développement pour Angular",
  "next_step": "Prochaines étapes",
  "what_you_want": "Que voulez-vous faire ensuite avec votre application ?",
  "new_component": "Nouveau composant",
  "angular_material": "Angular Material",
  "add_pwa_support": "Ajouter la prise en charge de PWA",
  "add_dependency": "Ajouter une dépendance",
  "watch_tests": "Exécuter et observer des tests",
  "build_prod": "Construire pour la production",
  "love_angular": "Vous aimez Angular ?",
  "give_star": "Donnez une étoile à notre dépôt."
}
```

`es.json:`

```json
{
  "welcome": "Bienvenido",
  "app_running": "¡la aplicación se está ejecutando!",
  "resources": "Recursos",
  "useful_links": "Aquí hay algunos enlaces para ayudarlo a comenzar:",
  "leanr_angular": "Aprende Angular",
  "cli_doc": "Documentación de CLI",
  "angular_blog": "Angular Blog",
  "angular_devtools": "Herramientas de desarrollo angulares",
  "next_step": "Próximos pasos",
  "what_you_want": "¿Qué quieres hacer a continuación con tu aplicación?",
  "new_component": "¿Nuevo componente?",
  "angular_material": "Material Angular",
  "add_pwa_support": "Agregar soporte PWA",
  "add_dependency": "Agregar dependencia",
  "watch_tests": "Ejecutar y observar pruebas",
  "build_prod": "Construir para producción",
  "love_angular": "¿Te encanta Angular?",
  "give_star": "Dale a nuestro repositorio una estrella."
}
```

This task can also be done automatically in CI/CD tool via REST API or [Tolgee CLI](https://tolgee.io/tolgee-cli).

Now that we can easily translate our text, we will like to switch from one language to another.

## Step 9: Create a Language Selector Component

To switch from one language to another, we need to create a selector component.

Navigate to the `app` directory and run the following command to create a new component

```bash
 ng generate component <component-name>
```

`<component-name>` corresponds to the name of your component. In this case, our component name is `language-selector`. This command will create a folder language-selector with four files:

- A component file, `language-selector.component.ts`
- A template file, `language-selector.component.html`
- A CSS file, `language-selector.component.css`
- A testing specification file, `language-selector.component.spec.ts`

Open the `components/language-selector.component.ts` and add the following code:

```typescript
...
import { TranslateService } from '@tolgee/ngx';

...

export class LangSelectorComponent implements OnInit {
  constructor(public translateService: TranslateService) {}

  ngOnInit(): void {}
}
```

The `LanguageSelector` component implements the OnInit which a lifecycle hook that is called after Angular has initialized all data-bound properties of a directive. The constructor taken in `TranslateService` will help us to get our translation values

Next, in the `components/language.component.html` file add the code below:

```html
<select
  [value]="translateService.languageAsync | async"
  (change)="translateService.changeLanguage($event.target.value)"
  class="selector"
>
  <option value="en">🇬🇧 English</option>
  <option value="fr">🇫🇷 français</option>
  <option value="es">🇪🇸 Español</option>
</select>
```

The select input has the three options corresponding to our three languages with a `changeLanguage` function which listen to an event and output the value of current language whenever an event is triggered.

To round up with the selector component, we add some style to the components in the `components/language-selector.component.css` file:

```css
.selector {
  display: block;
  text-align: center;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  background: #dd0031;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  cursor: pointer;
  color: white;
  margin-right: 10px;
  margin-bottom: 40px;
}
```

Finally import the component in your `app.components.html`:

```html
<app-language-selector></app-language-selector>
```

## Step 10: Testing the app

We are all set up, now it’s time to test the app. Run your application and navigate to `[localhost:4200](http://localhost:4200)` . Hopefully, your application localizes well like in the demo below.

<video controls width="100%">

  <source src="/img/blog/angular-tutorial/angulartolgeedemo.webm" type="video/webm"/>
</video>

You can find the full working code in this [Tolgee-ngx git repository](https://github.com/Gunkev/tolgee-ngx).

## Conclusion

In this tutorial, we were able to learn how to translate an angular application with Tolgee. We created a Tolgee project, then generated our API key, installed and imported Tolgee Module and finally effectively translated the application into French and Spanish. Should you have any questions regarding Tolgee, check its [Documentation](https://tolgee.io/platform), join the [Slack Community](https://join.slack.com/t/tolgeecommunity/shared_invite/zt-195isb5u8-_RcSRgVJfvgsPpOBIok~IQ) or [Open a discussion on GitHub](https://github.com/tolgee/tolgee-platform/discussions)
