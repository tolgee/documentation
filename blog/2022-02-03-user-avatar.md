---
slug: manage-user-avatar

title: All you need to know to deal with user avatars 👤 in React

description: Learn how to generate user avatar, select avatar from file and crop selected avatar using libraries.

authors: [jcizmar]

image: "/img/blog/avatar/ogImage.png"

tags: [react, avatar, javascript, typescript]
---

Most of the information systems using user authentication also work with some kind of avatars - images enabling other
users to see who commented, posted or made anything else in the system.
When we want to be able to show user avatars, we need to enable users to upload their avatar or generate some default.
In this article I am going to show you how to:
- generate user avatar by their unique ID using `jdenticon`
- select avatar from file
- crop selected avatar using `cropper.js` and `react-cropper` libraries

<!--truncate-->

## Generating default avatar
When the user hasn't selected their own avatar, we have few options what to show instead of it.
We can show nothing, use some placeholder image 👤 or **generate** some pretty cool image. 😎

There are multiple avatar generators in npm. I chose [`jdenticon`](https://www.npmjs.com/package/jdenticon) because I like the images it produces.

![Identicon Example 1](/img/blog/avatar/jdenticon.png)

You can also find this [nice icon designer](https://jdenticon.com/icon-designer.html) in their docs, so you can
customize the output. But I am going to stick with defaults.

So let's see how to use the library to generate the image.
```tsx
import { ComponentProps, FC, useState } from 'react';

export const AutoAvatar: FC<
  ComponentProps<'img'> & { userId: number; size: number }
  > = ({ userId, size, ...imgProps }) => {
  const [base64, setBase64] = useState(undefined as string | undefined);

  // using dynamic import to save some loading
  import('jdenticon').then(({ toSvg }) => {
    const svgString = toSvg(userId, size);
    const base64 = Buffer.from(svgString).toString('base64');
    setBase64(base64);
  });

  return base64 ? (
    <div style={{ backgroundColor: 'rgb(225,225,225)', display: 'flex' }}>
      <img
        {...imgProps}
        src={`data:image/svg+xml;base64,${base64}`}
        alt={'User Avatar'}
      />
    </div>
  ) : (
    <div style={{ width: size, height: size, display: 'inline-block' }}>
      Loading...
    </div>
  );
};
```
What I am doing here is loading the `jdenticon` library using dynamic import. The library has approx. 45 kb, so it is good
idea to let webpack download it dynamically just when it's needed.

When it's loaded, I let the library produce svg by user ID. The library works similarly as good hash function so
for near values it produces completely different results.

![Identicon Example 1](/img/blog/avatar/generatedAvatars.png)

If you don't trust me, you can play with that [here](https://stackblitz.com/edit/web-platform-er334x?file=index.html).

When it's generated I am converting the result to `base64` to use it in `img src` attribute.

That's it. Avatar generated! 🥳

## Letting user select an avatar
To let user select an avatar, we can simply use input element with `file` type attribute.
```html
<input
  type="file"
  accept="image/png,image/jpeg,image/gif"
/>
```
But this input is pretty ugly. So I am going to hide it and provide my own cool button instead of this. Then I can trigger
click on this input to open the system file selection dialog.

```tsx
import React, {createRef} from "react";

export const ImageSelect = () => {
  const fileRef = createRef<HTMLInputElement>();

  const onFileInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target?.files?.[0]);
  }

  return (
    <>
      <input
        type="file"
        style={{display: 'none'}}
        ref={fileRef}
        onChange={onFileInputChange}
        accept="image/png,image/jpeg,image/gif"
      />
      <button
        onClick={() => fileRef.current?.click()}
      >Cool Button
      </button>
    </>
  )
}
```
Like this, we can use any event to open the file selection. When the user selects some file, it is printed to the console.
Now we would be prepared to upload the file to backend. But that would be lame. Let's also crop the image! 🎈

## Cropping the image
To provide a bit more comfort to our users it would be nice to enable them to crop the image before they actually upload
it. This can be done using [cropper.js](https://fengyuanchen.github.io/cropperjs/) and its
React wrapper [`react-cropper`](https://www.npmjs.com/package/react-cropper).


![Cropping](/img/blog/avatar/crop.gif)

```tsx
import React, {createRef} from "react";
import {Cropper, ReactCropperElement} from "react-cropper";
import 'cropperjs/dist/cropper.css';

export const ImageCrop = () => {
  const cropperRef = createRef<ReactCropperElement>();

  return (
    <Cropper
      src="<the iamge src>"
      style={{height: 400, width: 400}}
      autoCropArea={1}
      aspectRatio={1}
      viewMode={3}
      guides={false}
      ref={cropperRef}
    />
  )
}
```
What does the configuration do?

- autoCropArea=1 - selects whole image by default
- aspectRatio=1 - makes it 1:1, so it is square
- viewMode=3 - makes the image to cover cropper size and disables selecting empty areas by moving out from canvas
- guides=false - removes tiny lines, which I found unnecessary for croping avatars

So now it would be nice to get the actual cropped image. We can do it this way:
```tsx
import React, {createRef, useState} from "react";
import {Cropper, ReactCropperElement} from "react-cropper";
import 'cropperjs/dist/cropper.css';

export const ImageCrop = () => {
  const cropperRef = createRef<ReactCropperElement>();
  const [cropped, setCropped] = useState(null as string | null);

  const onSaveClick = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    setCropped(cropper.getCroppedCanvas().toDataURL())
  }

  return (
    <>
      <Cropper
        src={"https://picsum.photos/500/300"}
        style={{height: 400, width: 400}}
        autoCropArea={1}
        aspectRatio={1}
        viewMode={3}
        guides={false}
        ref={cropperRef}
      />
      <button onClick={onSaveClick}>Crop</button>
      {cropped &&
        <img src={cropped} alt={"It's cropped"}/>
      }
    </>
  )
}
```

If we would like to get the image for uploading, it would be better to use
```tsx
cropper.getCroppedCanvas().toBlog()
```
Which provides a blob which we can use to create a file to upload.

Depends, for what we like to use the result. If we would like to upload it, `blob` is what we are looking for. To just
show the image `dataUrl` is our choice.

Cool! So now we can also crop the image. Now, let's combine it all together!
```tsx
import React, {createRef, useState} from 'react';
import './App.css';
import {Cropper, ReactCropperElement} from "react-cropper";
import 'cropperjs/dist/cropper.css';
import './roundedCropper.css';

// this transforms file to base64
const file2Base64 = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result?.toString() || '');
    reader.onerror = (error) => reject(error);
  });
};

const App = () => {
  // ref of the file input
  const fileRef = createRef<HTMLInputElement>();

  // the selected image
  const [uploaded, setUploaded] = useState(null as string | null);

  // the resulting cropped image
  const [cropped, setCropped] = useState(null as string | null);

  // the reference of cropper element
  const cropperRef = createRef<ReactCropperElement>();

  const onFileInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target?.files?.[0];
    if (file) {
      file2Base64(file).then((base64) => {
        setUploaded(base64);
      });
    }
  }

  const onCrop = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    setCropped(cropper.getCroppedCanvas().toDataURL())
  }

  return (
    <>
      <div className="App">
        {
          uploaded ?
            <div>
              <Cropper
                src={uploaded}
                style={{height: 400, width: 400}}
                autoCropArea={1}
                aspectRatio={1}
                viewMode={3}
                guides={false}
                ref={cropperRef}
              />
              <button onClick={onCrop}>Crop</button>
              {cropped && <img src={cropped} alt="Cropped!"/>}
            </div>
            :
            <>
              <input
                type="file"
                style={{display: 'none'}}
                ref={fileRef}
                onChange={onFileInputChange}
                accept="image/png,image/jpeg,image/gif"
              />
              <button
                onClick={() => fileRef.current?.click()}
              >Upload something!
              </button>
            </>}
      </div>
    </>
  );
}

export default App;
```
When user selects an image, the cropper component is rendered. When user hits the crop button, the resulting cropped image
is shown. That's all. Easy-peasy.

## Making the selection rounded
If you would like to use the avatars rounded, you would probably like to make also the selection rounded.

To do so, we have to style the cropper elements.
```css
.cropper-crop-box, .cropper-view-box {
    border-radius: 50%;
}
```

## TL;DR
In this article I explained how to generate default avatar using `jdenticon` library and how to select an image file and
also, how to enable user to crop it using `react-croper` library.
