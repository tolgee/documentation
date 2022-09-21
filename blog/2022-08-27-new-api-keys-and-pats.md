---
slug: new-api-keys-and-pats

title: "New Project API key format and Personal Access Tokens 🔑"

authors: [jcizmar]

image: "/img/blog/new-api-keys-and-pats.jpg"

description: Changing format of API keys in Tolgee. Adding Personal Access Tokens (PATs) which can access all the resources the user has access to.

tags: [authentication, authorization, api-keys, security]
---

The old way how we were working with the API keys had several problems in security and usability manners. So we had to
do some huge changes. However, you can stay calm. The legacy API keys are still supported, and you can use them until
you delete them.

<!--truncate-->

## What has changed?

- The API keys have a different format now. They are prefixed with `tgpak_` prefix.
- You can still use the legacy API keys without `tgpak_` prefix anyway.
- The API keys are not revealed in the platform, and you can only see them once when you generate them.
- We added Personal Access Tokens (PATs). With PATs you can access all the platform you are permitted to as a user.
  You can generate PATs in the user settings.
- Both API keys and PATs have expiration dates now, and you can store a description to note, why you've created such
  a secret.

To learn more about,
visit [Project API keys and Pats documentation section](/docs/platform/api-keys-and-pat-tokens).

# Why we did do it?

## Project API keys can authorize operations only in one project

The first issue with API keys was that a single API key can work only with resources in one project. Recently we started
to work on CLI, which will enable users to import, export, and analyze localization data in their projects and code. The
problem was, that we had no way how to authenticate in the REST API to manage multiple projects with a single token. So we
would have to store the user's credentials somewhere in their computer to authenticate the user for every request. This
wasn't optimal, so we decided to add Personal Access Tokens, which can access all the resources the user has access to.

## API key accessible endpoints have different URLs

The endpoints we are using for accessing with API keys are currently different from the endpoints we are using internally
for the platform frontend. So in the backend, we have to define 2 different routes for a single endpoint. One with
project ID e.g. `/v2/projects/{projectId}` and one without `/v2/projects`. This can be also kind of confusing for the
users and would be painful when we enable PAT authorization also in our integration libraries. We would have to use
different endpoints for different tokens.

From now, we are prepared to use the same endpoint for all authentication methods. In the new Project API keys the project
ID is encoded in the key, so it can be obtained without requesting the API.

The new API key is a string in the format described as `<Project ID>_<Legacy API Key>` encoded with base32 encoding and
with `tgpak_` prefix.

## All API keys were revealed in the UI

Yep. This was pretty ugly. You were able to see all your API keys revealed by accessing the API keys section in the
Tolgee platform. Now the keys are visible only when you generate them and never more. Now we don't even store the
key values in the DB, but only the hashes of the keys. So we are unable to reveal the keys anymore. This is a great step
for security. 🎉🎉🎉

## TL;DR;

- We updated API keys and added the Personal Access Token feature in v 2.38.0
- The API keys have new format `tgpak_ha3tkxzton2wm4twmrsgkmtgmnsgw4bqgvttemttnrwwoyld`
- The API keys are not revealed anymore in the API keys section
- The Personal Access Tokens allow you to access REST API endpoints across multiple projects and more
- The Personal Access Tokens have this format `tgpat_rh7887fjl1d3q834k5srpql4nj53dmv45d29estbce9arndgmda`
- Both API keys and Personal Access Token can have an expiration date, which you can configure
