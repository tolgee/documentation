---
slug: optimizing-spring-boot-tests

title: Optimizing Spring Boot tests

authors: [jcizmar]

image: "/img/blog/optimizing-spring-boot-tests.png"

tags: [react, angular, svelte, vue, javascript, typescript, integration]
---

![Optimizing Spring Boot Tests](/img/blog/optimizing-spring-boot-tests.png)

In this article, I would like to describe how I optimized our Spring Boot tests to run a bit faster.

<!--truncate-->

## 1. Moved from TestNG to JUnit
I was using TestNG before, because we used it in NetSuite, where I worked before, but while using it with Spring Boot and
Kotlin I found a few annoying drawbacks.

First, I wasn't able to split the tests without writing custom XML suites, where I would have to specify the classes to
test. I don't like editing XMLs and I don't like mentioning each class or package to test.
Instead, I wanted to split the tests by its class annotation, but I couldn't find a way
how to do that with TestNG.

Second, I wanted to use [mockk](https://mockk.io/) and [springmockk](https://github.com/Ninja-Squad/springmockk), but
it's `MockkBeant` annotation wasn't working with TestNG.

Third, JUnit is used in most of the articles about testing with Spring Boot.

Moving from TestNG to JUnit doesn't make the tests faster, but it was needed to split the tests.

## 2. Splitting up tests which are recreating the Context and the others
When `@DirtiesContext` annotation is used or different properties are provided for `@SpringBootTest`, the whole application
context recreated and is similarly slow as starting of the real application. We are not using Embedded DB for integration tests
because we want to be sure, that the code works for our production DB, and also we are running DB migration on the application
startup. Because of that and all the component scanning, the app start-up takes about 15 seconds, so it's good to run tests
which are recreating the context separately, which makes the non-recreating tests run faster, since they are not
interrupted by application starting.

## 3. Using Bean Lazy Loading
Since Spring Boot 2.2, we can set `spring.main.lazy-initialization` property to `true` and spring is then creating Beans,
only when they're needed. This makes the context creation a bit faster as well.

## What would be even better
In the future, it would be better to make the application startup even faster. So I am thinking about creating a Postgres
container already containing the DB structure and truncating the tables instead of dropping and rerunning the migrations.

Also, it would be great, if we had more unit tests, so the whole codebase wasn't tested using integration tests, which requires the application context to be created.
