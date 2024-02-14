---
title: Faster! Optimizing React app to the bone
description: How to optimize React app and make it faster. How to identify slow components and optimize infinite scrolling in your application.
authors: [sgranat]
tags: [react.js, javascript, typescript, opensource]
image: '/img/blog/optimizations/thumbnail.png'
---

![Thumbnail](/img/blog/optimizations/thumbnail.png)

In Tolgee localization platform, we manage translations. So our most important view is a list of translations, every row contains key and related translations in different languages. As this view serves multiple purposes, we have quite a lot of requirements and fulfilling all of them required quite a bit of optimizations, which I'd like to share with you today.

<!--truncate-->

### What are we dealing with

Mainly, a whole view is using infinite scrolling, where we automatically fetch additional data when user scrolls down. Every row needs to have some buttons, so he can edit, select or modify state of translations. We have search and filters, which should work swiftly when applied. Then we have resible columns, which allow user to change whole layout by mouse dragging. We also need to detect overflowing text vertically, which can't be done simply through css, but we need to "test render" it first and then see if it fits. And last but not least (as new features will surely come in the future), everything need to work with focus, so user can controll it through keyboard.

### How to identify problems generally

Basically always when your React application is slow it's due to too many components re-rendering or too often. React have very useful Developer Tools, where you can profile your App and then find out which components are taking most of the time to render.

When I identified slow components, I needed to understand why exactly is rendering so slow.
One might think that if we keep our components small, the amount of rendering should be managable, but as it turned out this was not the case. Main problem is that components often depend on one another (like parent and child or using same data) and when small change in your state causes a big chunk of your app to re-render, you might have to apply additional optimizations, which React doesn't make automatically.

> To make sure that my optimizations are actually working I've brought my super old laptop to work, which I've considered the most reliable benchmark of improvement

## One problem at a time

I will now try to ilustrate different situations on the example of our app and offer a way which we choosed as a solution. It is important to understand what exactly is happening, because optimizations are often tradeoffs - you exchange comfort (elegance/convenience/generality) for speed. So if you do incorrect optimizations, you might improve nothing and only ruining your code.

### Optimizing state management

When we simply use Context API for our main state, we end up re-rendering almost entire view on every change. This issue is mostly visible when we use search field, as typing will become unbearably slow.

![Slow typing](/img/blog/optimizations/typing.gif)

You can solve this by using some state management tool (e.g. Redux, MobX, ...), or you can use context in a clever way, so you minimize re-rendering (check my previous [article](https://dev.to/tolgee_i18n/react-doesnt-need-state-management-tool-i-said-31l4)).

### Large number of children re-render

Clever state management still won't protect us completely against unnecessary re-renders. In some cases the fact the Component update causes all children re-render can be too expensive. You can avoid this by wrapping each child with `React.memo` - React will then render child only when props change. However, make sure that you fully understand how it works in the [docs](https://reactjs.org/docs/react-api.html#reactmemo), and then check that it really helped.

In our case we wrap each row in the list with `React.memo`. Because the row is relying mostly on fetched data, we can save quite a lot of unnecessary re-rendering.

### Infinite scolling

Our main problem now is that our page can have bascially infinite number of components. A way to solve this is to only render elements, that are currently visible to the user. It's better to use some third party solution for this, because it's quite complicated to do right. After some trial and error we ended up with library `react-list`.

Libraries like these usually require you to specify size of the components upfront (as they need to calculate a full length of the scrollable area without actually rendering the content), which can be quite problematic - in our case row sizes are variable and so we can't really tell how big it will be untill we render it. `react-list` is able to solve this by only asking you to estimate the size of rows and then when it actually renders the element, it updates the size automatically. This can lead to your scrollbar jumping (as a height of the container is changing while you are scrolling in it), but if your estimation is somehow decent, it is pretty minor issue.

Nice! So now we decreased an overall number of components displayed from infinity to "it depends on your screen size". However we have another problem ...

![Slow scrolling](/img/blog/optimizations/scrolling.gif)

### Reducing rows complexity

Our infinite scrolling optimization wasn't without tradeoff. It takes siginificant time to render each row and because user can scroll quite fast, it can lead to content not keeping up with scrolling. Problem that is related to this is our resizeble layout which is also very slow.

![Slow resizing](/img/blog/optimizations/resizing.gif)

This is quite difficult problem, because only thing that you can do here is to reduce complexity of individual rows. In our case we've mostly solved it by clever usage of css `grid`, which allowed us create complex layouts using only few html elements.

Another thing was to prevent displaying unnecessary stuff on first render. All our buttons are hidden by default and only appear when you hover the given row. We were doing this only by css, which doesn't help React at all. So my solution was to hide the buttons for real (not render them) and show them only `onmouseover`, which improved situation quite significantly.

This solution brought a new problem, that you were not able to use focus with `tab`, as buttons were not actually present. I've solved this by always rendering first and last button (but hiding them with css) and other buttons would render when focus is within the row itself or when mouseover - this way user won't recognize the difference.

## Conclusion

I was quite scared when I realized that our Application is becoming very slow and at the end I've spend one full week with these optimizations, but after some trial and error I've understood weak points and was able to target them. Considering the complexity it works fine even on my super old university laptop and I've learned a lot.

I'm now proud developer and I spend quite a lot of my working time just scrolling around in our App.

![Fast scrolling](/img/blog/optimizations/scrolling-fast.gif)

[![React.js banner](/img/blog/blog-banners/banner-react.webp)](https://app.tolgee.io/sign_up)
