---
slug: importing-data-to-tolgee-using-axios
title: 'Importing data to Tolgee using custom JS and Axios'
authors: [ jcizmar ]
image: '/img/blog/importing-data-to-tolgee-using-axios.png'
description: 'Learn how to import data to Tolgee using Axios'
tags: [ import, javascript, axios ]
---

Sometimes you might want to import the localization i18n data to Tolgee using the API and your custom script. In this
tutorial, I am going to show you how to do that using Axios.


![Importing data to Tolgee using Axios](/img/blog/importing-data-to-tolgee-using-axios.png)

<!--truncate-->

:::info
Before you start hacking the script, you should also consider
using [Tolgee CLI](/tolgee-cli/push-pull-strings).

There are other ways to and new keys and translations in Tolgee. For less complex workflows, you can use
basic endpoints described in [API section of docs](/api).

This tutorial is for real geeks. 🤓
:::

## How the import actually works?
When you upload a file to the Tolgee platform, it creates an Import entity, and for each language found in uploaded files, it creates an "import language" containing the imported data. When this entity is created, you can still add more files to it, remove the "import languages" prepared to import, and configure other import settings. When you're done with this, you can finally apply the import, which actually imports the data to your project.

Importing data to Tolgee is separated into 4 steps.

1. Adding the i18n files to import
2. Assigning the existing languages to the files
3. Resolving conflicts
4. Applying the import

## Prerequisites

To follow this tutorial, you would need a Project created in the Tolgee platform and an API key to authorize your requests.
You can read more about how to obtain your project API
key [here](/platform/account_settings/api_keys_and_pat_tokens#project-api-keys).

In the code snippets, I am working with Axios v1.4.0.

## Step 1 - Adding files to import

The first step is pretty straightforward. You just have to send a POST request with the files to the Tolgee API.

```javascript
import axios from "axios";
import FormData from 'form-data';

const API_KEY = "<YOUR API KEY>"

// You might probably want to read the data from file or something like that
// For this tutorial I am just using a string
const content = `{"hey": "hey"}`

const formData = new FormData();
formData.append("files", content, "en.json");

const response = await axios.post("https://app.tolgee.io/v2/projects/import", formData, {
  headers: {
    "X-API-Key": API_KEY,
  }
})
console.log(response.data.result._embedded)

// The logged output looks like this:
// {
//   languages: [
//     {
//       id: 1015429001,
//       name: 'en',
//       existingLanguageId: 1002049001,
//       existingLanguageTag: 'en',
//       existingLanguageAbbreviation: 'en',
//       existingLanguageName: 'English',
//       importFileName: 'en.json',
//       importFileId: 1015428001,
//       importFileIssueCount: 0,
//       namespace: null,
//       totalCount: 263,
//       conflictCount: 0,
//       resolvedCount: 0
//     },
//   ]  
// }
```

Tolgee processes every uploaded file to multiple "import languages," which is the representation of the data to be
imported in the next steps.

:::info
There are 2 different language entities we are working with here. Let's clarify these terms.

- **Import language** is the "virtual" language created for import purposes containing the data you imported from the
  uploaded file
- **Existing language** is the language you already have in your project. It is the language you are importing to.
:::

From the output, we know that we have successfully added the file to the Tolgee. We also know that Tolgee has assigned
this file to the `English` language with id `1015429001`.

## Step 2 - Assigning the existing languages to the files

Tolgee tries to assign the languages automatically by the file name. However, sometimes the filename does not match the
language tag, and you have to assign the languages manually. Let's see how to change the language assignment.

First, you have to find your language ids. You can do this by hitting the languages endpoint.

```javascript
const response = await axios.get("https://app.tolgee.io/v2/projects/languages", {
  headers: {
    "X-API-Key": API_KEY
  }
});

console.log(response.data._embedded.languages)

// The logged output looks like this:
// [
//   {
//     id: 1002049001, <-- This is the language id
//     name: "English",
//     tag: "en",
//     originalName: "English",
//     flagEmoji: "🇬🇧",
//     base: true
//   },
//   {
//     id: 1005650001,  <-- This is the language id
//     name: 'Spanish',
//     tag: 'es',
//     originalName: 'español',
//     flagEmoji: '🇪🇸',
//     base: false
//     },
// ];
```

Now, when we know the id of the desired language, we can assign it to the import language. For example, when we would like to
assign the "import language" with id `1015429001` to the existing language with id `1005650001` (Spanish). To do so, hit
["Pair existing language"](/api#tag/Import/operation/selectExistingLanguage_1) endpoint.

```javascript
  const response = await axios.put("https://app.tolgee.io/v2/projects/import/result/languages/1015429001/select-existing/1005650001", null, {
  headers: {
    "X-API-Key": API_KEY,
  }
})
```

When the server responds with 200, the language is assigned.

You can also check this by accessing the [import result endpoint](/api#tag/Import/operation/getImportResult_1). `
GET https://app.tolgee.io/v2/projects/import/result`

## Step 3 - Resolving conflicts

Sometimes when you add files to the Tolgee platform, there might be some conflicts.

To find out which imported translations conflict with existing ones,
use [this endpoint](https://tolgee.io/api#tag/Import/operation/getImportTranslations_1).
`GET https://app.tolgee.io/v2/projects/import/result/languages/{languageId}/translations`

The `languageId` parameter refers to "import language," not the "existing language"!

To resolve these conflicts, you can use these endpoints:

- Resolve conflict (override)
- Resolve conflict (keep existing)
- Resolve all translation conflicts (override)
- Resolve all translation conflicts (keep existing)

It's all documented [here](https://tolgee.io/api#tag/Import/operation/resolveTranslationSetOverride_1). So I won't cover
this in detail.

## Step 4 - Applying the import

To finally apply the import, use the [`Apply` endpoint](/api#tag/Import/operation/applyImport_1).

```javascript
await axios.put("https://app.tolgee.io/v2/projects/import/apply", null, {
  headers: {
    "X-API-Key": API_KEY,
  }
})
```

When there are still some unresolved conflicts, you can force Tolgee to keep existing data or to override them using `forceMode` query params with possible values `OVERRIDE` or `KEEP`.

When the response is OK, your data is imported. Yeeey!

## (Bonus) Working with namespaces

When you work with namespaces in your project, you might also want to select a namespace for the imported languages as
well.
This is possible using the [`Select namespace`](https://tolgee.io/api#tag/Import/operation/selectNamespace_1) endpoint.

## More options

There is much more you can do with the import endpoints. All the endpoints are documented in the
[import section of the API docs](/api#tag/Import).

There are endpoints like
- Deleting the whole import
- Deleting the import language
- Getting file issues
- Getting import namespaces
- Resetting existing language assignment


## TL;DR
- You can use Axios to import data to Tolgee.
- Add files to import using a POST request.
  - Assign existing languages manually if needed.
  - Resolve conflicts between imported and existing translations.
  - Apply the import using the "Apply" endpoint.
  - Additional features:
  - Work with namespaces using the "Select namespace" endpoint.
  - Explore more options in the import section of the API documentation.
