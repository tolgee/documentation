---
slug: tolgee-support-only-postgres-since-v2
title: Why Tolgee supports only PostgreSQL since v2
description: Tolgee localization tool is dropping H2 database and supports only PostgreSQL since version 2. Postgres add new features like better search.
authors: [jcizmar]
tags: [tolgee, database, postgres, h2, server]
image: '/img/blog/postgres.png'
---

When I started to develop Tolgee for my master thesis about 2 years ago, one of my goals was to provide a localization
tool also for developers who would like to use it locally on their machine.

Things were different those days. Tolgee was named Polygloat and the tool was intended to be simplest as possible. So I
wanted to keep the tool small, and I didn't want to make users to run separate database server for it.
But I also wanted to run the app in cloud, where Postgres is considered "more production ready" choice.

<!--truncate-->

To achieve this, supporting also H2 database was the ideal choice, since it can be embedded in Java App and there is no need
to run separate server for it or manage anyhow. It just starts automatically with the App and that's it.
For our cloud instance we used Postgres. We use Hibernate and Liquibase, so there was no need to write single
native SQL in the whole code.

It was working fine until the system was getting more complex, and we started to look for better text search and text
manipulation features. Finally, we came up with a decision to drop H2 support and embed PostgreSQL to `tolgee/tolgee`
docker image to keep the comfort of running a single Docker container and don't worry about configuration.

## Cool Postgres features we need

Currently, there are 2 basic needs we are not able to satisfy supporting H2 database.

### Better search

In translation view, users can search for translations using simple search input. The best we can do in H2 is making the
string lower case and using `like` operator to find matches.

```sql
select * from translation where lower(text) like lower('%searchtext%')
```

But users speaking different languages are often used to type search strings without accents and expect to get
results with accents. For example in the Czech language, users often type just "cislo" and they expect to also get results
containing "číslo". There is no simple solution in H2 db for this, but there are multiple solutions in Postgres like
using `unaccent` function or using [Full Text Search](https://www.postgresql.org/docs/9.5/textsearch.html) features,
which also can handle typos.

### Text similarity

Another important feature we need, is finding similarity of two texts, which we need to implement translation memory (
reusing strings already translated before). In H2 database there is no built-in function returning an information about
how two string are similar. However, in Postgres there is a
[`pg_trgm`](https://www.postgresql.org/docs/9.6/pgtrgm.html) module with `similarity` method, which is exactly what we
need.

## How it's going to work now?

Since version 2 of the Tolgee Platform, Postgres is embedded in the
[`tolgee/tolgee` Docker image](/platform/self_hosting/running_with_docker). Tolgee starts Postgre
server automatically on its startup. So you can still run Tolgee with no configuration just by running the
single Docker container.

There is also `DOCKER` mode of [`tolgee-autostart`](/platform/self_hosting/configuration#postgres-autostart),
which tries to start Postgres Docker container on the host machine.
This mode is introduced primarily for development, but it can be helpful also for users who would like to run Tolgee
outside of Docker container with Java, and they don't want to configure Postgres themselves.

## TL;DR

- Tolgee is dropping H2 database, since it doesn't have features we need for further development.
- We are going to implement Translation memory and improve search in translation view
- You can still run Tolgee with Docker using a single command
- Postgres is now embedded in `tolgee/tolgee` Docker image

[![Developer banner](/img/blog/blog-banners/banner-developer.webp)](https://app.tolgee.io/sign_up)
