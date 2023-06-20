---
slug: naming-translation-keys
title: 'The Key to Translation: The Ultimate Guide to Naming Translation Keys'
authors: [mchrastek]
image: '/img/blog/naming-translation-keys/naming_translation_keys.png'
description: 'Unlock the secrets of translation with our ultimate guide to naming translation keys. Learn the key to effective translation and improve your workflow.'
tags: [guide, translation, localization, i18n, keys]
---

In software development and localization, translation keys are placeholders for text strings requiring translation. This guide will explore the importance of appropriately naming translation keys and provide tips and best practices to improve your workflow.

![Naming translation keys](/img/blog/naming-translation-keys/naming_translation_keys.png)

<!--truncate-->

## What are Translation Keys?

**Translation keys** are unique identifiers used in software development to reference specific text strings that require translation. These keys serve as **placeholders for the actual text content**, allowing developers to separate the source code from the text to be translated.

For example, a translation key for **"Hello, world!"** (the title of a welcome message on the homepage) might have the `homepage.welcome_message.title` key. Using translation keys, developers and localization managers can manage the translation process more easily and ensure all text content is translated correctly.

## Why is Proper Naming Important?

Properly naming translation keys is **beneficial for several reasons**. Here are some of the benefits of naming them correctly:

### Context

Appropriately named translation keys provide context for translators, making it easier for them to **understand the meaning and context of the text** to be translated. In addition, clear and concise keys can help ensure that translations are accurate and consistent, minimizing potential misunderstandings and errors that could result from vague or poorly named keys.

### Clarity

Translation keys are labels that help you identify specific phrases or sentences in your code that need to be translated into different languages. When you give your keys clear and descriptive names, it becomes **more apparent** for developers, translators and other stakeholders **what the keys represent**.

### Efficiency

Efficiency is a crucial benefit of adequate naming of translation keys. When translation keys are named in a **clear and consistent way**, it **makes the translation process more efficient**. This is because translators can quickly identify which translation key corresponds to which text element in the user interface. Furthermore, this reduces the need for manual cross-referencing and error checking, which can be time-consuming and error-prone.

## How to Start Naming Translation Keys?

When naming translation keys, starting with a clear and consistent system will make it easy to organize and locate your keys as your project grows. Here are some tips to help you get started:

- **Naming convention**: The first step to naming translation keys is to decide on a naming convention that will work for your project. A naming convention is a set of rules that define how translation keys should be named. A **good naming convention should be easy to understand and follow consistently**.

  - **Casing**: Casing is how letters are capitalized in a word. Using a consistent casing convention makes it easier to identify and troubleshoot issues related to translations. You can, for example, use `camelCase`, `snake_case` or `PascalCase`.

- **Key categories**: Once you have your naming convention in place, it's crucial to identify the different categories of keys that you will need. Think about how you want to organize your keys and create a list of categories that make sense for your project. For example, you can **split the keys based on where they appear in the application** – if you have a web application, you may want to have separate categories for keys that appear on the homepage, in the login/sign-up flow, and the user profile.

- **Nesting**: Nesting is the process of organizing translation keys into a hierarchy. This **helps you organize your keys into logical groups** and makes finding the keys easier. For example, you can split the keys based on the previously mentioned categories.

- **Keep it simple**: While creating a consistent and organized system for naming translation keys is necessary, it's equally important to keep things simple. **Avoid using overly complex naming conventions** or structures that are difficult to understand, as this can lead to confusion and errors down the line.

## Best Practices for Naming Translation Keys

### Use Descriptive Names

One of the essential best practices for naming translation keys is to use descriptive names. Choosing names that accurately reflect the content of the string they represent is vital. This will make it **easier for translators to understand the context and meaning of the string** and provide an accurate translation.

It's vital to **avoid using generic or vague names** that could be applied to multiple strings.

**Example**:

| Text         | ❌ Bad      | ✅ Good                            |
| ------------ | ----------- | ---------------------------------- |
| Save Changes | `key1`      | `common.modal.save_changes.header` |
| Learn More   | `link-text` | `blog.cta.learn_more`              |

### Use Unambiguous Names

When naming translation keys, it's crucial to use unambiguous names. Unambiguous names are **easy to understand and do not leave room for interpretation**. Unambiguous names make it easier for developers, translators and other stakeholders to understand what the keys represent and how they should be translated.

**Example**:

| Text | ❌ Bad       | ✅ Good             |
| ---- | ------------ | ------------------- |
| Name | `form.name1` | `form.name_person`  |
| Name | `form.name2` | `form.name_company` |

The above example does not make it clear what the `form.name1` and `form.name2` keys represent and what the difference between them is. For example, it could be a person's or company's name, and **these concepts are translated differently in different languages**.

Using a more descriptive name like `form.name_person` and `form.name_company` makes it easier to understand what the key represents.

### Use Meaningful Names

Using meaningful names for translation keys helps make the codebase more readable and maintainable. In addition, meaningful names can easily **convey the purpose of the key and its value**, which makes it easier for developers to understand the context of where the key is being used, leading to a more efficient development process.

On the other hand, **using abbreviations** or poorly named keys **can make it challenging to understand** what a particular key represents, leading to confusion and potentially introducing errors into the codebase.

**Example**:

| Text       | ❌ Bad           | ✅ Good                              |
| ---------- | ---------------- | ------------------------------------ |
| First Name | `rg_frm_fnam_lb` | `registration_form.label.first_name` |
| Last Name  | `rg_frm_lnam_lb` | `registration_form.label.last_name`  |

### Use Consistent Naming Conventions

Adopting a consistent naming convention for all translation keys is **crucial for easy identification and maintenance**. Furthermore, a good naming convention should be easy to understand and follow consistently, making it easier to manage translations across languages and updates to the application.

**Example**:

| Text    | ❌ Bad               | ✅ Good                           |
| ------- | -------------------- | --------------------------------- |
| Log In  | `login_text`         | `homepage.header.button.log_in`   |
| Sign Up | `sign_up`            | `homepage.header.button.sign_up`  |
| Blog    | `header_button_blog` | `homepage.header.link_label.blog` |

### Use `common` Category for Common Strings

Use the `common` category to store common strings **used across multiple pages or sections of the application**.

**❌ Bad Example**

| Text                                   | ❌ Bad name                          |
| -------------------------------------- | ------------------------------------ |
| Two-factor authentication is disabled. | `common.account.mfa_status_disabled` |
| Post                                   | `common.post`                        |

The translation keys in the above examples are either too generic or specific to be in the `common` category.

The `common.account.mfa_status_disabled` key would be **used only in the context of the account page** and not anywhere else, so it's unnecessary to include the `common` category in the key name.

Similarly, `common.post` is **not descriptive enough** to convey the meaning of the English value it represents. It could be a noun or a verb, and **these concepts are translated differently in different languages**. For example, in Spanish, the word "post" is translated as "publicación" when used as a noun and "publicar" when used as a verb. So, it's better to use a more descriptive name like `common.card_title.post` or `common.button.post` depending on the context.

**✅ Good Example**

| Text     | ✅ Good name                   |
| -------- | ------------------------------ |
| Cancel   | `common.form.button.cancel`    |
| Credits  | `common.label.credits`         |
| Standard | `common.pricing_plan.standard` |

The translation keys above are used across multiple pages or sections of the application, so it makes sense for them to include the `common` prefix in the key name.

For instance, `common.form.button.cancel` is likely to be used in **various forms across different pages** of an application, making it a common term.

Similarly, `common.label.credits` could refer to the **amount of credits a user has in their account** and may appear in various sections of the application.

Finally, `common.pricing_plan.standard` could be a frequently used term, as **it denotes the pricing plan "Standard"** that may be mentioned across different pages.

### Use Nested Structure

Organizing translation keys into **nested structures is an effective way to group similar strings**. This helps maintain consistency in the naming convention, especially in larger projects with many translation keys.

A nested structure is a structure that separates keys into nested levels, **each level representing a different aspect of the application**. For example, the first level could be the page or section of the application, and the second level could be the type of string (e.g., button text, title, subtitle, etc.).

:::tip

🐁 Tolgee supports nested structures for translation keys. You can use the `.` character to separate the levels of the nested structure, for example, `footer.contact_info.phone_number`. When [exporting the translations](/platform/projects_and_organizations/export), Tolgee will automatically convert the keys into a nested structure, as shown below.

:::

**Example**:

```json
{
  "header": {
    "title_text": "Welcome to our Website!",
    "logo_alt_text": "Our company logo"
  },
  "error": {
    "field_required": "This field is required.",
    "incorrect_url_format": "Please enter a valid URL."
  },
  "footer": {
    "copyright_text": "© 2023 Our Company. All rights reserved.",
    "contact_info": {
      "phone_number": "555-123-4567",
      "email_address": "info@ourcompany.com"
    }
  }
}
```

## Conclusion

In conclusion, accurately naming translation keys is crucial for efficient management of the translation process across languages and updates to the application. Appropriately named translation keys **provide context, clarity and consistency**, which help **avoid potential misunderstandings and errors** that could result from vague or poorly named keys.

When naming translation keys, it's critical to use a **clear and consistent naming convention, meaningful and unambiguous names**, and to keep the naming simple. By following best practices for naming translation keys, developers and localization managers can ensure translations are accurate and consistent, **saving time and effort for both translators and developers**.

💡 Do you have **any questions** regarding the best practices for naming translation keys? Or do you have specific questions related to your project? Feel free to **[join our Slack community](https://tolg.ee/slack) to discuss them with us!**
