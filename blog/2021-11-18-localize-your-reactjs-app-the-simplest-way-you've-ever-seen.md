---
slug: localize-your-reactjs-app-the-simplest-way-you've-ever-seen
title: Localize your React.js App the simplest way you've ever seen
author: Jan Cizmar
author_title: Tolgee Team
author_url: https://github.com/JanCizmar
author_image_url: https://avatars.githubusercontent.com/u/18496315?v=4
tags: [react.js, i18n, webdev, javascript, SDK, tutorial]
---

Translating an App to multiple languages (localization) is tricky part of many applications. Tolgee is simplifying the localization process and saves developer's time 👨‍💻👩🏻‍💻 by removing repetitive tasks 🔁 ❌. Saving time? That's what I want. Show me!

<!--truncate-->

## What is Tolgee
Tolgee is **open-source** tool combining localization platform and SDKs to provide simple way to translate the web applications for both developers and translators. 👨‍💻👩🏻‍💻🧖🏼👩🏻‍💻🧖🏼

## In context translating 📖
As a developer of localized application, you probably have to modify localization data every time you need to change a text. So you have to open the file, add or find the key to modify, save it and check whether everything was changed correctly in the app. With Tolgee you can just `ALT + click` the actual translated text in your app and 💥boom💥 translation dialog appears and you are able to translate it right away.

![Tolgee - in context translation dialog](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/43135o8bo4w65qw868kc.png)
 
## Automatic Screenshot Generation 📸
Another tricky part of localization is providing context 📖 to translators. Only exporting the keys and translations in source language is not always enough. Tolgee enables you to take and upload screenshot directly in the in-context translation dialog. So no more manual taking and uploading screenshots.🌄

## Localization platform included ✅
Tolgee is also localization platform, where you can manage all your localization strings 📚. So you can provide access to translators and they can translate the texts there. If you uploaded screenshots before, they know the context of the translations perfectly so they can produce perfect results.

## Isn't that hard to integrate? No it's not!
To get started, you can simply follow the integration guides provided in the platform. Which is the simplest way to get started. 

1. Login to [Tolgee Cloud](https://app.tolgee.io) or use your self hosted [Tolgee instance](https://tolgee.io/docs/server_and_web_app/self_hosting/running_with_docker).

2. Create a new project by clicking **`Add` button in the top right**. And filling the project name.

    ![Add button](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3993x5vuqmrfqbvz6lov.png)
 
    Optionally, you can add multiple languages to translate your app into.

3. Select `Integrate` from side menu, choose **React** and generate an API key with **all scopes checked**.

    ![Add button](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iwnhivvi8fr48u16iy4a.png)

4. Success! 🎉 Now you just have to follow the integration guide.

## Let's integrate it into CRA App 
1. Generate brand new CRA App and open it your favorite editor
   
        npx create-react-app tolgee-hello-world

2. Install Tolgee packages ⬇️

        npm install @tolgee/react @tolgee/ui --save


2. Add Tolgee properties to you development `.env` file `env.development.local` by **copying it** from the integration guide

        REACT_APP_TOLGEE_API_URL=https://app.tolgee.io
        REACT_APP_TOLGEE_API_KEY=<your API key>



3. Wrap your App component in `index.js` with `TolgeeProvider` component. Again, you can copy it from the integration guide.

4. Go to `App.js` and replace all the crap with simple "Hello world!" message.

       ```jsx
       import './App.css';

       function App() {
         return (
          <div className="App">
            <h1>Hello world!</h1>
          </div>
         );
       }
    
       export default App;
       ```


5. Wrap the "Hello world!" with `<T>` component and add keyName prop.

    ```jsx
    import './App.css';
    import { T } from '@tolgee/react'
    
    function App() {
      return (
        <div className="App">
          <h1><T keyName="hello_world">Hello world!</T></h1>
        </div>
      );
    }
    
    export default App;
    ```

6. Let's run the App in the browser and see the magic! 🪄 Hold your *ALT* key and move your mouse over the text. It should be highlighted. When you click it, dialog opens and you're able to edit the text ✏️ or generate screenshots. 📷

    ![In-context translation of hello_world key](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vz4o6exaqanlxcm6ruft.png)
    After you hit the update button, your `Hello World!` text will be immediately changed to the new value!

    ![The result](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wqd1z1v4ubq0oxfuhmz1.png)
 
## Congratulations! You're done! 🎉🎉🎉

You can find the resulting code in [this GitHub repo](https://github.com/JanCizmar/tolgee-react-hello-world), **but you have to add your `.env.development.local` file.**

Now you are able to translate your Applications with Tolgee. To learn more about Tolgee or to find out how to translate more complicated cases, [visit our docs](https://tolgee.io).

# TL;DR

Tolgee is open-source tool simplifying the process of web based application. It has this features:
 
  - It's open-source
  - You can translate in the context of your App
  - You can generate screenshots automatically
  - You should use it and save time!

 🙏🙏🙏 If you like what we do, please star our GitHub projects. 🙏🙏🙏
 - [Tolgee Server](https://github.com/tolgee/server) ⭐
 - [Tolgee JS](https://github.com/tolgee/tolgee-js) ⭐
 
