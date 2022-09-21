---
slug: let-this-script-type-instead-of-you-when-you-record-your-browser

title: "Let this script type instead of you when you record a video of your browser ⌨"

authors: [jcizmar]

image: "/img/blog/typing-script/image.jpg"

description: Describing a simple script that types the string instead of me when I hit a specific shortcut. 

tags: [fixtures, coding, fun]
---

I was working on cool gifs for Tolgee's [new readme](https://github.com/tolgee/tolgee-platform/blob/main/README.md),
where we show how simply you can [modify a localization string](/blog/in-context-production) in your App. But when I need to type something into input,
I always make like 5 mistakes and my typing is not very nice to look at. So I created a script that types the string
instead of me when I hit a specific shortcut. Now I use this to record videos, where I have to fill in some input, and I
don't want to record it like 1000 times because I was typing inconsistently.

It can be useful for some pranks if you extend this. But let's leave this to your imagination.

<!--truncate-->

## How does it work?

So how does it work? It takes the array of strings. When I hit `ctrl + h` for the first time, it iterates over
characters in the first string and modifies the value of the currently focused input by adding the current character. It waits 30ms
between every character addition. When I hit the shortcut a second time, it does the same thing with the second string.

## React issue

When you just modify the value property of an input element, React doesn't trigger your onChange listener and so the value is not changed,
since React state is not updated. To trigger the onChange event listener you have to also dispatch `input` and do some
other stuff you can read
about [here](https://stackoverflow.com/questions/30683628/react-js-setting-value-of-input/52486921#52486921).

## The script

The script (I call it typescript 😄):
```js
(() => {
  const strs = ["This is text...", "This is another text."];
  let hits = 0;
  window.onkeyup = async (event) => {
    if (event.ctrlKey && event.key === "h") {
      const input = document.activeElement;
      for (const char of strs[hits]) {
        if (input.value !== undefined) {
          setNativeValue(input, input.value + char)
        }
        await new Promise((resolve) => setTimeout(resolve, 30))
      }
      hits++;
    }
  }

  // Boring part starts here
  // It makes it working with react.js apps
  function setNativeValue(element, value) {
    let lastValue = element.value;
    element.value = value;
    let event = new Event("input", {target: element, bubbles: true});
    // React 15
    event.simulated = true;
    // React 16
    let tracker = element._valueTracker;
    if (tracker) {
      tracker.setValue(lastValue);
    }
    element.dispatchEvent(event);
  }
})()
```

## How to use it

1. Copy the script and modify the strings to be typed
2. Copy the modified script
3. Go to the console of developer tools in your browser and paste the script
4. Hit enter
5. Focus an input and hit `ctrl + h`
6. Your text is being typed

![The schowcase](/img/blog/typing-script/show.gif)
