# react-image-loader
Component for progressive image loading
<br>
![](video_libonlinevideocutterc.gif)

## Usage
```javascript
<ImageLoader 
width={'500'} 
height={'320'}  
image_large={'https://picsum.photos/1920/1080/?image=10'} 
image_small={'https://picsum.photos/200/113/?image=10'} /> 

```

### Properties

| Property   | Type      | Required | Description                                                                                                                                                                                                                              |
| :--------- | :-------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `image_large`      | string    | yes      | Original image URL                                                                                                                                                                                                                                |
| `image_small`       | number    | yes      |  Placeholder to display before original image is loaded. |
| `width`    | number    | yes      | Image width                                                                                                                                                                                                                              |
| `height`   | number    | yes      | Image height                                                                                                                                                                                                                             |
| `threshold`   | number    | yes      | Tempo máximo em segundos para determinar se a internet é lenta                                                                                                                                                                                                                           |


---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`
tests made with jest/react-testing-library/jest-dom

