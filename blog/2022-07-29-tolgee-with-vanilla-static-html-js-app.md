---
slug: how-to-integrate-tolgee-with-vanilla-static-html-js-application

title: 'How to integrate Tolgee with vanilla static HTML/JS application?'

authors: [pmarattha]

image: '/img/blog/vanilla-html-js/19.webp'

description: 'Learn how to integrate open-source localization Tolgee with vanilla static app quickly and seamlessly. Follow the steps in this tutorial.'

tags: [open-source, localization, tutorial]
---

Localization is the process of translating the content from one language to another. Localizing your application or website helps you to reach out to the new audience and increase its user base by making your product available in different languages. You can localize the entire application or just some parts of it.

<!--truncate-->

Making a multilingual website may appear to be a bit challenging, but Tolgee makes it really easy—in fact, you can make one in under a few seconds! And best of all, it doesn't depend on any particular libraries and framework. Tolgee is a complete package that provides users with everything they need to localize their websites and mobile applications. It can be used to translate entire websites or just individual pages, or users can even choose between several different languages. So you can use it with Vanilla HTML/JavaScript, Angular, React, VueJS, Svelte, PHP, Dart, or any other framework that you want. In this article, we'll see how to implement it in a vanilla HTML and JavaScript project.

## Steps for Setting up a Project in Tolgee:

1. Create a Tolgee account.

![tolgee account](/img/blog/vanilla-html-js/1.webp)

2. To access the Tolgee Studio, click the Go to App link in the top right corner of the screen.

![go to app](/img/blog/vanilla-html-js/2.webp)

3. Create a Tolgee account if you don't already have one, or sign in using GitHub.

![sign up](/img/blog/vanilla-html-js/3.webp)

4. Then, proceed to click the `add` button, which should take you to another page where you can give the project a name, add a language to it, and so on.

![add project](/img/blog/vanilla-html-js/4.webp)

5. Give your project a name, select the language you wish to translate it into, and then proceed to click on the `save` button.

![select language](/img/blog/vanilla-html-js/5.webp)

6. You can see your project has been successfully created.

![project sucessfully created](/img/blog/vanilla-html-js/6.webp)

7. Now let's create an API key, so to do that navigate to your account icon in the upper right corner, select the API keys, and then create one.

![create api key](/img/blog/vanilla-html-js/7.webp)

8. Click the `+` add icon located at the bottom of the page.

![add button](/img/blog/vanilla-html-js/8.webp)

9. Now, a popup might appear, where you have the option of selecting numerous scopes, select them all, and press the save button.

![select scope](/img/blog/vanilla-html-js/9.webp)

10. Once you have specified the scopes and saved it, your API key dashboard will look something like this

**Note: These API keys will be deleted later, but remember that you should not share these with anyone.**

![api key dashboard](/img/blog/vanilla-html-js/10.webp)

11. Return to your dashboard and select your project, then enter the texts you wish to display in those languages.

![select your project](/img/blog/vanilla-html-js/11.webp)
![tolgee dashboard](/img/blog/vanilla-html-js/12.webp)

12. On the left hand side, you will see a language icon; click on that icon to be redirected to the translation page; then, proceed to make one by clicking on the add icon in the upper right corner.

![language icon](/img/blog/vanilla-html-js/13.webp)

13. Make sure that every language option on your screen is checked before adding the texts you want to be shown in those languages.

![language option checked](/img/blog/vanilla-html-js/14.webp)

14. You can utilize Tolgee's Machine Translation, which uses AWS Machine Translation, or if the language is not translated in your language, you can use Google Translate or translate it yourself.

![create new key](/img/blog/vanilla-html-js/15.webp)

15. Keep in mind that the name of your key should be named as a variable.

![localisation key name](/img/blog/vanilla-html-js/16.webp)

16. Let's recreate the original translation, but this time we will make it into a more descriptive sentence.

![descriptive sentense](/img/blog/vanilla-html-js/17.webp)

17. After you have translated all the text in your project, your translation page should look something like this:

![translation page](/img/blog/vanilla-html-js/18.webp)

18. Click on `Integrate` at the left side of your screen, and select your framework from the list. For example: Web (in our case).

![integrate page](/img/blog/vanilla-html-js/19.webp)

19. Choose the framework you want to include it into.

![choose framework](/img/blog/vanilla-html-js/20.webp)

20. When you are done with that, select the API key from the dropdown. In our case we generated a new one earlier but if for some reason you need to generate another copy then this is where you will do it. Tolgee will then generate a boilerplate for the code that you can use inside your application without any hassle.

![select api key](/img/blog/vanilla-html-js/21.webp)

## Create a simple application and localize it with Tolgee

In this step, you will create a vanilla HTML/JS application that can be integrated with Tolgee. You can choose whether to use a single-page application (SPA) or multi-page applications (MPA). To help you out, tolgee has prepared a sample application based on vanilla HTML and Javascript. You may download this project from Github with the following command and play around with it, but for this tutorial, we'll construct everything from scratch:

```
git clone https://github.com/tolgee/window-example
```

**Note:** If you want to use another Single Page Application framework, then you will need to follow the steps outlined in their [respective documentation](/docs/sdk/installation).

Let's start coding our project. To do this, go to one empty directory and then create an empty file and name it `index.html`. Inside that particular file, paste the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello world</title>
  </head>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
```

As you can see, the body contains the text "Hello world!" that we would like to translate. It only takes one dependency—the Tolgee library—to load in your web application so that it's compatible with any environment:

```js
<script src="https://unpkg.com/@tolgee/core/dist/tolgee.umd.js"></script>
```

In order to translate your content interactively, you will need to install a third-party software package: Tolgee's UI. This dependency is what enables the translation dialog box when you hold down ALT and click on the highlighted text.

```js
<script src="https://unpkg.com/@tolgee/ui/dist/tolgee-ui.umd.js"></script>
```

Now it's time to configure the Tolgee library. So create a new file called `scripts.js` and paste in the following code:

```js
// scripts.js
const { Tolgee, IcuFormatter } = window['@tolgee/core'];
const tg = Tolgee.use(IcuFormatter).init({
  apiUrl: 'https://app.tolgee.io',
  // ############################################################
  // ## you should never leak your API key                     ##
  // ## remove it in for production publicly accessible site   ##
  // ############################################################
  apiKey: 'ic6fhih1e144ivvrbdjnb7jtff',

  // in production mode this is where your
  // exported translations are loaded from
  filesUrlPrefix: '/i18n/',
  defaultLanguage: 'en',
  inputPrefix: '{{',
  inputSuffix: '}}',
  watch: true,
  ui: window['@tolgee/ui'].UI,
});
tg.run();
```

The code above shows how to initialize Tolgee with the provided configuration object. The configuration object allows you to set many parameters, but in this example, we stick with a few mentioned below:

| apiUrl      | The URL of the api where we are saving data.                                                                                                                       |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apiKey      | Which you can obtain in the [app](https://app.tolgee.io) or in your self-hosted app by following this [documentation page](/docs/platform/api-keys-and-pat-tokens) |
| inputPrefix | Character sequence that appears before each translation                                                                                                            |
| inputSuffix | Character sequence that appears after each translation                                                                                                             |
| watch       | parameter that tells Tolgee whether or not to watch for changes in the DOM and update translations.                                                                |
| UI          | Tolgee's UI constructor, which renders and interacts with the translation modal window                                                                             |

## Encasing text with `inputPrefix` and `inputSuffix`

Go back to your HTML document and change the text there to the localization placeholder as shown below, encasing it in `inputPrefix` and `inputSuffix`:

```html
<body>
  <h1>{{title_description}}</h1>
  <p>{{long_description}}</p>
</body>
```

Tolgee looks for translation keys wrapped in strings provided by configuration properties— `inputPrefix` and `inputSuffix` —on every change to a DOM subtree.

After opening this document in a browser, you should be able to hold down the ALT key while clicking on any word or phrase. Your translation will appear directly.

## Loading Overlay

While Tolgee loads localization files from REST API or directly from the local files, if there are untranslated texts within the source code—such as `{{title_description}}` and `{{long_description}}` —the user will see them as it is rather than their translated equivalents. In order to avoid this behavior, we can add an overlay that displays when the translations are loading, and remove it once they've finished. To accomplish this, add an overlaying div to your page like this:

```html
<div id="loading" style="height: 100vh; background-color: white;">
  Loading.....
</div>
```

This div will conceal all visible information, preventing the user from viewing any additional content. So, continue by pasting this code into the `script.js` file.

```js
tg.run().then(() => {
  document.getElementById('loading').style.display = 'none';
});
```

Here is an example of what your final `index.html` file should look like.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello world</title>
  </head>
  <body>
    <div id="loading" style="height: 100vh; background-color: white;">
      Loading.....
    </div>
    <h1>{{title_description}}</h1>
    <p>{{long_description}}</p>

    <script src="https://unpkg.com/@tolgee/core/dist/tolgee.umd.js"></script>
    <script src="https://unpkg.com/@tolgee/ui/dist/tolgee-ui.umd.js"></script>
  </body>
</html>
```

And this is an example of what your final scripts.js file ought to resemble.

```js
const { Tolgee, IcuFormatter } = window['@tolgee/core'];
const tg = Tolgee.use(IcuFormatter).init({
  apiUrl: 'https://app.tolgee.io',

  // ############################################################
  // ## you should never leak your API key                     ##
  // ## remove it in for production publicly accessible site   ##
  // ############################################################
  apiKey: 'ic6fhih1e144ivvrbdjnb7jtff',

  // in production mode this is where your
  // exported translations are loaded from
  filesUrlPrefix: '/i18n/',
  defaultLanguage: 'en',
  inputPrefix: '{{',
  inputSuffix: '}}',
  watch: true,
  ui: window['@tolgee/ui'].UI,
});

tg.run().then(() => {
  document.getElementById('loading').style.display = 'none';
});
```

Tolgee will not work properly when the app is opened as a HTML file from the filesystem, make sure to use [Live Server VS code plugin](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

![live server](/img/blog/vanilla-html-js/22.webp)
![title description](/img/blog/vanilla-html-js/23.webp)

Finally, we want our user to be able to select a language from a dropdown list and for the web page to change its content in response. To make that happen first create an `<select>` tag with an `<option>` like shown below:

```html
<select id="languageSelect">
  <option value="en">English</option>
  <option value="es">Spanish</option>
  <option value="hi">Hindi</option>
  <option value="ne-NP">Nepali</option>
</select>
<h1>{{title_description}}</h1>
<p>{{long_description}}</p>
```

When you've added the above code, your final `index.html` file should look like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello world</title>
  </head>
  <body>
    <div id="loading" style="height: 100vh; background-color: white;">
      Loading.....
    </div>
    <select class="languageSelect">
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="hi">Hindi</option>
      <option value="ne-NP">Nepali</option>
    </select>
    <h1>{{title_description}}</h1>
    <p>{{long_description}}</p>

    <script src="https://unpkg.com/@tolgee/core/dist/tolgee.umd.js"></script>
    <script src="https://unpkg.com/@tolgee/ui/dist/tolgee-ui.umd.js"></script>
    <script src="scripts.js"></script>
  </body>
</html>
```

Lastly, we want to translate our contents into the user's chosen language. To do that, add the following code to `scripts.js`:

```js
let languageChange = document.querySelector('.languageSelect');
languageChange.addEventListener('change', (e) => {
  tg.lang = e.target.value;
});
```

Therefore, your final `scripts.js` file should resemble something like this.

```js
//scripts.js
const { Tolgee, IcuFormatter } = window['@tolgee/core'];
const tg = Tolgee.use(IcuFormatter).init({
  apiUrl: 'https://app.tolgee.io',

  // ############################################################
  // ## you should never leak your API key                     ##
  // ## remove it in for production publicly accessible site   ##
  // ############################################################
  apiKey: 'ic6fhih1e144ivvrbdjnb7jtff',

  // in production mode this is where your
  // exported translations are loaded from
  filesUrlPrefix: '/i18n/',
  defaultLanguage: 'en',
  inputPrefix: '{{',
  inputSuffix: '}}',
  watch: true,
  ui: window['@tolgee/ui'].UI,
});

tg.run().then(() => {
  document.getElementById('loading').style.display = 'none';
});

let languageChange = document.querySelector('.languageSelect');
languageChange.addEventListener('change', (e) => {
  tg.lang = e.target.value;
});
```

![language change](/img/blog/vanilla-html-js/24.webp)

Now that we have successfully made a multilingual website using JavaScript and Tolgee, go back to your application and press `ALT` + click on the word. See? You can't edit translations from there either!

![edit translations alt click](/img/blog/vanilla-html-js/25.webp)

## Conclusion

Tolgee is a powerful and easy-to-use localization tool that can help you ship your project faster. It has all the features you need to localize your application and be able to run on multiple platforms. Now you know how to integrate Tolgee into your static HTML/JS application. The integration is quite seamless and simple, and neither any complicated steps are required for this process. You just need to follow the steps mentioned above and practice a little bit before you can start using it in your project.

Original blog post was published at [Aviyel](https://aviyel.com/post/3574/how-to-integrate-tolgee-with-vanilla-static-html-js-application). Feel free to check out some other awesome open-source projects there.
