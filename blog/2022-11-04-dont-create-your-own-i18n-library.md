---
slug: dont-create-your-own-i18n-library

title: "Creating your custom i18n solution? Don't."

authors: [jcizmar]

image: "/img/blog/dont-custom-i18n.png"

description: "Don't create you custom i18n solution. There is a lot of localization tooling. It's reinventing the
wheel."

tags: [i18n, localization, programming, typescript]
---

Sometime before, when we did a market analysis, we asked many companies how they solved localization in their project.
We asked them what's their i18n tooling. Surprisingly a lot of companies
maintain their custom solution. I've also set up [f5bot](https://f5bot.com/)) to e-mail me when the i18n keyword
appears in posts or comments on Reddit. Again, a lot of people share their custom i18n libraries or solutions. In this
article, I want to explain why I recommend against creating your custom solution and show what challenges
you will face when you decide to do so.

![Don't create your custom i18n solution](/img/blog/dont-custom-i18n.png)

<!--truncate-->

When developers think about localizing their projects, some think of i18n only as replacing a string
with another translated into a selected language. But it's not that trivial. So let me show you what issues you will
probably face when implementing your custom solution.

## Basic i18n method

As a creator of a custom i18n solution, first of all, you would probably create some method that returns a
translated string according to provided key. The header of such a function would probably be similar
to the one below. I am going to use typescript for code examples. However, it would look similar to any other
programming language.

```typescript
function translate(key: string, language: string): string
```

We can define the translations inside the function body to keep it simple. Then we will find the value in the
data of provided language. If the value is not there, let's return the key.

```typescript
function translate(key: string, language: string): string {
  const data = {
    en: {
      hello_world: 'Hello world!'
    },
    de: {
      hello_world: 'Hallo Welt!'
    }
  }

  return data[language]?.[key] || key
}
```

OK, cool, that was simple. Now the complicated stuff comes.

## Parameter interpolation

Sometimes we need to provide a parameter for our translation to be rendered. To do so, we have to define some syntax
to tell which part of the translated sting is a placeholder. Let's make everything wrapped in curly brackets as a
parameter. So our data now look like this.

```typescript
  const data = {
  en: {
    hello_world: 'Hello world!',
    hello: 'Hello {name}!'
  },
  de: {
    hello_world: 'Hallo Welt!',
    hello: 'Hallo {name}!'
  }
}
```

Now we have to replace the params in our method. I'll leave the implementation to your imagination since I don't want
to reinvent the wheel here. It's still nothing complicated. Or... Hmm.. Is it?

## Escaping

What if some segment in my translated string looks precisely like a placeholder? You may say that this never
happens. But what if? Then you have to introduce some way how to escape such sequences. Again. It's still doable, you
may
say. So let's go for another challenge.

## HTML tags and XSS

What if you would like to add HTML tags to your translations? For example, you would like to make a single word
bold.
No problem, you may say. I am just appending the resulting string to DOM, so HTML is supported. But what if an
attacker sets his name to `<b onmouseover="alert('Wufff!')">click me!</b>`. Ha! Now you have also to sanitize the HTML.

## Plurals

Sometimes you would also like to render strings containing a plural form. For example, consider a
string `Peter has {count} dogs.`
This works perfectly when the param `count` is 0, 2, 3, ..., but when the count is 1, the sentence is incorrect.

```
Peter has 0 dogs.
Peter has 1 dog. <-- Incorrect!
Peter has 2 dogs.
Peter has 3 dogs.
```

So we would like to return the correct result `Peter has 1 dog.` Yes. In English, we can solve this by if/else
statements.

```typescript
if (count === 1) {
  return 'Peter has 1 dog.'
} else {
  return `Peter has ${count} dog.`
}
```

Haha! I don't need any i18n library, you may say. I am the king of my code, you may say!

But sadly, English is not the only language in the world. There are other languages—for example, Czech - my native
language.
There are more plural forms in Czech, so the code would be like this.

```typescript
if (count === 1) {
  return 'Peter má jednoho psa.'
} else if (count >= 2 && count <= 4) {
  return 'Peter má ${count} psi.'
} else {
  return 'Peter má ${count} psů.'
}
```

There are even more complicated plural forms in other languages. You can check all of them
in [unicode docs](https://unicode-org.github.io/cldr-staging/charts/37/supplemental/language_plural_rules.html).

OK. You probably don't feel like implementing all the plural forms for different languages in your code. But
let's say you want to. So you have your project translated into English, Spanish, and Czech. You
added similar if statements in each occurrence, and everything works fine. Now you decided to localize your app to
Arabic. Gotcha! Since all your plurals are defined in the code, you'll have a very tough time finding all the plurals in
your code and adding Arabic forms.

Luckily, there's an easier way how to handle plurals. [ICU Message Format 🙌](https://tolgee.io/docs/icu_message_format)!
With ICU message format, you can define translations like this:

```
{dogs, plural, one {Peter has one dog.} other {Peter has # dogs.}}
```

You say that you would like to return different strings for different numerical values of parameters. It has
predefined plural categories `zero`, `one`, `few`, `many`, or `other`, which cover all the languages in the world. So
you can return correct plurals.

I love this way of defining the translations. Since it's always a single string. You can even add as many
plural parameters as you wish. It also can format numbers or dates and handles escaping.

ICU message format is Unicode standard and has ports for the most popular languages:

- Java - [ICU4J](https://unicode-org.github.io/icu/userguide/icu4j/)
- C - [ICU4C](https://unicode-org.github.io/icu/userguide/icu4c/)
- JS/TS - [FormatJS](https://formatjs.io/docs/core-concepts/icu-syntax/)
- PHP - [MessageFormater](https://www.php.net/manual/en/class.messageformatter.php)
- Python [PyIcu](https://github.com/ovalhub/pyicu)

So if you want to create your custom i18n solution, consider using ICU Message Formatter for your language.
The FormatJS port also handles the HTML tags, so you will be safe using that.

## Loading the i18n data

Defining all the data in the `translate` method isn't optimal since the method would rapidly grow in size. Especially in
JS world, when we are requesting the strings from the browser. We prefer to send only some of the translations in
all the languages to the client, which probably would never need all the languages. So we must find an effective way
to provide the language data only when required.

Also, storing the data in JS format is not pretty flexible when letting external translators translate our
app. They work with JSON, XLIFF, or other formats. So storing localization data as external resources makes much more
sense. Of course, we can load such files manually in our custom solution, but the existing i18n libraries can help us
with that.

Don't store localization data in DB! We want our apps fast. Storing i18n data in the database makes us fetch thousands
of
lines from DB every time somebody loads our page. Keeping it a static resource makes much more sense, even if the data
is
cached. Some companies store the data in DB and have internal solutions to manage the strings inside DB. I
don't recommend this. Creating your custom translation management system is again: reinventing the wheel. There are a
lot of solutions on the market you can use to
manage your localization data.

## Recommended way

If this article convinced you not to reinvent the wheel and use the existing i18n library, then you're asking what the
recommended tools are. The answer is: It depends.

### Tolgee (JS, React, Vue, Angular, Svelte, ...)

For web-based projects, I recommend using Tolgee (surprisingly 😆). It handles everything I mentioned above
but also provides a few excellent killer features. It's a combination of TMS (localization platform) and i18n library.
Out of the box, it has an in-context editing feature, which enables you to modify the strings directly in your web app,
even in production. This can save you a lot of time and stress. It also provides a unique way how you can get perfect
results. And it's open-source!

To get started, you can choose your favorite technology [here](https://tolgee.io/integrations/all) and follow the
guide.

To be fair, I also have to mention other i18n solutions in the JS world.

### FormatJS (JS, React, Vue)

FormatJs is a set of i18n tools used in JS projects. They maintain
the [ICU Message Formater port for JS](https://formatjs.io/docs/intl-messageformat). Which we also use in Tolgee to
format the messages. They have integrations into [React](https://formatjs.io/docs/react-intl)
and [Vue](https://formatjs.io/docs/vue-intl).

### i18next (JS, React)

i18next is a trendy i18n solution, especially in React world. It also supports most of the popular JS frameworks
but is not very popular for other solutions than React. It has a lot of features, and it's very flexible. However,
when you decide to use this solution, I recommend using it with
their [ICU Message Formatter plugin](https://github.com/i18next/i18next-icu). They have some native plural solution, but
ICU is a standard solution supported by many i18n tools. Tolgee also
has [integration to i18next](https://tolgee.io/docs/web/using_with_i18next/installation), so you can enjoy all the
features of Tolgee while using i18next at the same time.

### Angular i18n (Angular native solution)

Angular has its own native solution for localization. It's used by many since it's native, but it's also kind of
controversial since it tends to be a bit complicated.

### Transloco (Angular)

A solution that is much more simple than the native solution. It supports translation scoping, so you can store it in
separate files. It works fine with lazy modules and more. However, it doesn't support the ICU Message format.
🙁

### Other programming languages & frameworks

Some popular i18n solutions for most languages and frameworks are used in web or UI development. If I had to choose one,
I would check how the solution solves parameter interpolation, handles plurals, and whether it
supports ICU Message Format. It's also essential to check whether it can load data from formats like JSON or XLIFF,
supported by popular TMS solutions. It makes it simple to get the localization done by professional translators.

## TL;DR

- Don't create your custom i18n solution. It's more complicated than it seems
- You would have to handle parameter interpolation, escaping, plural support, data loading, and more
- Don't store your i18n data in the database
- Use ICU Message Format
- There are many popular i18n solutions
- Tolgee can save you a lot of time
- When choosing your i18n solution, check how it interpolates parameters, what formats it supports and 

