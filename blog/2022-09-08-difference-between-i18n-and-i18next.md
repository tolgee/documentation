---
slug: difference-between-i18n-and-i18next

title: "What is the difference between i18n and i18next?"

authors: [jcizmar]

image: "/img/blog/i18n-i18next-difference.jpg"

description: "This article explains what is the difference between i18n (abbr. internationalization) and i18next (JavaScript framework enabling internationalization)."

tags: [localization, internationalization, basics]
---

For many, this question has a pretty clear answer, but people, who are new to software development or who started to use
i18next as the first choice, can be mistaken. So let's make it clear!

<!--truncate-->

## What is i18n?

The better question would be "What does i18n stands for". i18n is the abbreviation of the word internationalization, where the "
18" stands for the number of letters between the first i and the last n.

## What is internationalization?

It's the process of designing the software application so that it can be adapted to various languages and regions.
What does it mean? It means that when you are using some i18n/localization library or if you have your application
prepared to be translated to different languages, you are doing [internationalization](/blog/localization-basics-S01E01). Yay! 🎉

## What is i18next?

`i18next` is an internationalization framework written in and for JavaScript. It's a library you integrate into your
application code. `i18next` helps you to render different strings for users speaking different languages.

## So what is the difference?

`i18n` is an abbreviation that is used across all the programming languages and software development
world. `i18next` is a JS framework/set of libraries.

## i18next is not a standard

Although [i18next](/blog/super-fast-react-localization-i18n-with-i18next-and-tolgee) is currently used by many developers, it's not a standard. It has a nice catchy name and
if you google i18n, you can get the i18next website as a first result, but there are plenty of other libraries for
JavaScript you can use. Here are some of them:

- [FormatJS](https://formatjs.io/)
  - [react-intl (a react i18n library from FormatJS family)](https://formatjs.io/docs/react-intl/)
- [Tolgee JS (Our integrations)](/integrations/all)
- [Typesafe-i18n](https://github.com/ivanhofer/typesafe-i18n)

i18next is not the only solution out there. Different solutions suit different needs.

## TL;DR

- i18n is the abbreviation for internationalization
- i18next is a JavaScript framework enabling internationalization
