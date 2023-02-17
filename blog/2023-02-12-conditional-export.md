---
slug: conditional-export
title: 'NPM Packge: How to Conditionally Include Developer Tools?'
authors: [sgranat]
image: '/img/blog/free-localization/painless_localization.png'
description: "Learn how to reduce the size of your production bundle by conditionally including developer tools based on the environment in which it's being used."
tags: [localization, i18n, translation]
---

Reducing the size of your production bundle can be a significant challenge, particularly when it comes to including unnecessary code. Libraries like React, React Query or Redux include useful developer tools, but they exclude them on production where it would be just an unecessary bulk. It is not a new problem, but it is hard to do when you don't have a deep konwledge of different build systems. In this article, we'll explore a solution to this problem that involves including developer tools conditionally, based on the environment in which the package is being used.

<!--truncate-->

## The background

I'm a maintainer of Tolgee SDK and in version 5 we've decided to make some changes.

The vital part of Tolgee is the `DevTools` plugin which is used for in-context translating. Because it includes user interface popup and is written in react so it's about `240 Kb gzipped`. It's by far the largest part of our package.

Luckily in the majority of cases, this part should only be included in development mode and not on production. But how to ensure that?

> In the previous versions we've been leaving this up to the user to solve, but then the initial setup was quite complicated and easy to do wrong. So in version 5 we decided that we want to make it more user friendly.

## The crux

The traditional way of doing this is to build two versions of the package (`dev` with the dev tools included and `prod` without them) and use it in `index.js` (referenced from package.json) with conditional `require` based on `process.env.NODE_ENV`.

In our case this looks something like this:

```ts
// package.json
{
  ...
  "main": "index.js"
  ...
}
```

```json
// index.js
module.exports =
  process.env.NODE_ENV === 'production'
    ? require('./dist/bundle.prod')
    : require('./dist/bundle.dev');
```

This looks straightforward, right? It's not as easy as you might think.

### How does it work under the hood?

The important thing to keep in mind here is that without any optimizations the bundler would include both files because the condition result is unknown at the build time.

The trick is that it's a non-written standard that the conventional build setups replace `process.env.NODE_ENV` with `production` when they are building the app for production and so after then the optimizer has a code that looks like this:

```ts
module.exports =
  'production' === 'production'
    ? require('./dist/bundle.prod')
    : require('./dist/bundle.dev');
```

It's now pretty clear for the optimizer that the `dev` branch can be eliminated, as it will never be executed.

### Do we need to use require?

It is tempting to change the code to es module style, but as the `import` statements can't be used conditionally. We would need to do something like this:

```ts
export * from './dist/bundle.prod';
import * as devBundle from './dist/bundle.dev';

if (process.env.NODE_ENV === 'production') {
  export const DevTools = devBundle.DevTools;
} else {
  export const DevTools = <dummy function>
}
```

The problem is that `devBundle` is imported unconditionally and it's only the export part that is conditional.
The module still can have some side effects and in that case, the optimizer can't remove it automatically because that could change the behavior.

There are ways how to tell the compiler to consider it side-effect free, but that's quite heavily dependent on the capability of the optimizer that is used on the user side. It's not reliable.

### What if we can't use `require`?

Modern tools like `VITE` completely shifted to es modules and will give you an error if you use `require` in the code.

What can we do to conditionally switch between the `prod` and `dev` bundles? Luckily there is a way.

#### Magic with package.json

There is a standard field in package.json to define [conditional exports](https://nodejs.org/api/packages.html#conditional-exports). It is used by node js to distinguish between es module and cjs bundles like this:

```json
{
  "exports": {
    "import": "./dist/bundle.esm.js",
    "require": "./dist/bundle.cjs.js"
  }
}
```

Modern build tools utilize this feature by using semi-standard fields "production" and "development", so we can do:

```json
{
  "exports": {
    "production": "./dist/bundle.prod.js",
    "development": "./dist/bundle.dev.js"
  }
}
```

It is also possible to nest conditions to combine them, so we can support both esm and csj and also add fallbacks to `index.js` (which contains the old way of using `require`):

```json
{
  "main": "./index.js", //
  "exports": {
    "production": {
      "import": "./dist/bundle.prod.esm.js",
      "require": "./dist/bundle.prod.cjs.js"
    },
    "development": {
      "import": "./dist/bundle.dev.esm.js",
      "require": "./dist/bundle.dev.cjs.js"
    },
    "default": "./index.js"
  }
}
```

Our package.json is even more complicated and many things need to be set up correctly, but for the exclusion of `DevTools` this principle worked well for us (so far).

## Conclusion

The errors in this field can be quite painful, as I've learned myself. The JS modules world is wild and evolving all the time. It's full of hacks and unofficial standards and it's very hard to navigate.

But as this is only the dark side of the fact that npm packages can be distributed to such a wide audience, it's worth the time spent on the challenge. Good luck to you :)
