---
slug: closure-objects
title: How to remove Java from JavaScript
authors: [sgranat]
image: '/img/blog/closure-objects/js-without-java.png'
description: Replacing JavaScript classes with closure and simple JS constructions. Write React-like code even without React.
tags: [JavaScript, class, closure, React, TypeScript]
---

As a React developer, I have an suspicion to JS classes usage. In React bubble, it feels like a bad practice when I see them somewhere.

However, recently I got a task to rewrite our `@tolgee/core`, which is VanillaJS, and so far, there have been classes everywhere. I somehow felt it is not right. But then I realized that I don't actually know how to replace classes outside of React. Hmm ...

<!--truncate-->

## Wait, what's wrong with the classes?

Classes are basically added syntax sugar which gives you the impression that you are working with a class based programming language when you are actually not. Classes in JavaScript are implemented differently from the others. My main complaints are these:

- How `this` works is a cause of many issues, and correctly understanding it is not easy
- Inheritance is becoming an outdated concept, and classes encourage you to use it
- Private fields in classes are not supported everywhere yet, and their syntax is weird (and `Typescript` private fields are not really private)
- Class instances don't play well with desctructuring assignment

Classes in JavaScript tried to bring it closer to traditional OO languages, but it didn't go all the way. So if you are used to OOP, you won't get a very good experience, and it will feel like JS is crappy language. But it doesn't have to be this way.

## Like a fish out of water

In React, you don't need classes and even when you use external libraries, they usually don't require you to write classes. So it's easy to say, "classes are not necessary, just write functions" however, the second you step outside the React ecosystem, it's different.

As I realized this, it got me thinking: Why is that? How comes, that with React classes are not necessary?

## State and lifecycle

If you write a complex system, you need a way how to store your state somewhere. React has a way how to treat the state in your components, and it provides you with a lifecycle, which defines when the internal state is created, modified, and destroyed. Notice that it's very similar to class instances. In a way, React component is conceptually very similar to a class as it gives you a frame where your code lives, and you can "hook" into its lifecycle.

I think that's what I'm missing, that's why it's not easy to replace classes in our core.

## Classes without classes

So I have a justification for classes, but that would mean I have to live with their shortcomings. Do I need to use `class`, `this`, `extends`, and `new` like Java programmer? It somehow feels bad. I like the world of simple objects and simple functions. I like the simple world.

Let's try to "emulate" classes as React does.

One way is to separate methods from data. This is often used in languages that don't support classes (e.g. `C`).

```js
// equivalent of constructor
function createCar(color) {
  return {
    color,
  };
}

// equivalent of methods
function setCarColor(car, color) {
  car.color = color;
}
```

This method works, but it has even more disadvantages than classes as it doesn't encapsulate the data. It neither supports inheritance nor provides any nice way to replace it. All the data are exposed outside, meaning anyone can modify anything without your knowledge. The lifecycle is not enforced, it's just convention.

## Closure objects

I've come across a [lecture from Douglas Crockford](https://youtu.be/XFTOG895C7c?t=2803), where he recommends using closure instead of class.

> By far, the worst new feature in es6 is class. This one was strongly recommended by all the Java guys who have to write in JavaScript now and who don't want to learn a new language. This gives them the illusion of writing in a language that they think they already know.
>
> -- <cite>Douglas Crockford</cite>

If you look at it, it kind of reminds the definition of a React component.

```js
function Car(color) {
  const state = {
    color,
  };

  function setColor(color) {
    state.color = color;
  }

  return Object.freeze({
    setColor,
  });
}
```

The principle of this is that you create a higher-order function that wraps your methods and state variables. This function serves as your constructor. Its content is inaccessible from outside by definition. Then you just return what you want to be publicly available in an object which is the only gate to your data. It nicely forces you to create getters and setters for everything.

Even though this object represents the "instance", the data are not stored directly in it, so we can freeze it with `Object.freeze`. Data are actually stored in the constructor closure, and in the instance, we only "leak" functions that we want to be public.

### How about inheritance?

Instead of traditional inheritance, you can use composition here, as you can call any other constructors, and combine their methods in your new object.

```js
function Car(color) {

  ...

  const { setSpeed } = Vehicle();

  return Object.freeze({
    setColor,
    setSpeed,
  });
}
```

I've always found class inheritance confusing, and this way is much more readable for me. It's also quite similar to how React allows you to compose hooks, so it feels familiar.

Even though I haven't seen this method used in many places, it feels quite natural to me. I like how I see exactly what is passed where. It also brings an advantage in code optimization as private methods are truly private (unlike `Typescript` private methods), so the optimizer can optimize them accordingly.

One simple advantage is that you can safely use the desctructuring assignment here, as we won't run into issues with binding and prototype chain.

```js
// this is perfectly ok
const { setColor } = Car(...)
```

## Seems good. What's the catch?

No catch, except ...

Usage with typescript is not as smooth as with classes. With classes `Typescript` knows how to work with them and
so if you create class `Car` you can then use type `Car` as an type annotation for it's instance. This is not possible
with functions. It is possible to infer type, but we need to be more explicit.

```ts
let car: ReturnType<typeof Car>;
```

Over time I've started using a convention that with every constructor I also export the type of the instance like this:

```ts
export function Car(...) {
  ...
}
export type CarInstance = ReturnType<typeof Car>
```

For some reason, `Typescript` has a major issue with recursion in objects. It breaks this system if you want to return the instance itself in any method (which is quite common practice for chainable objects).

```ts
export function Car(...) {
  const car = Object.freeze({
    ...
    addWheel: (...) => {
      ...
      return car
    }
  })
  return car
}

export type CarInstance = ReturnType<typeof Car>
```

If you build this file into `Car.d.ts` with `tsc` compiler (v4.8.4), it will produce something like this:

```ts
export declare function Car(...): Readonly<{
  addWheel: (...) => Readonly<any>;
}>;

export declare type Instance = ReturnType<typeof Tolgee>;
```

Notice that the recursive function type is reduced to `any`, which is quite sad. I couldn't find any way around this, only to type the function explicitly, which is not ideal, but in my usecase still acceptable. Let's hope it will get better in future `Typescript` versions. If influential people will pull the strings, maybe we'll get some improvement.

<center>
  <iframe
    border="0"
    frameborder="0"
    height="470"
    width="550"
    src="https://twitframe.com/show?url=https://twitter.com/tannerlinsley/status/1579319192729186304"
  />
</center>

The Typescript drawbacks are quite significant, however for my usecase they are still outweight by drawbacks of classes and their "inappropriateness" in JavaScript.

## Conventions

I've quite naturally started using capitalized function names for the constructors. I've seen different approaches with `make` or `create` prefixes, but I like the simplicity better.

There is also no clear name for this whole convention, I've seen it called Crockford objects or Crockford classes, but I would prefer "Closure objects", so the name has some reference to its meaning.

## Conclusion

Python enthusiasts use the word "pythonic" for constructions that feel natural to them. I would call this "javascriptic" if that would be a term, but even if it's not, I think you know what I mean.
