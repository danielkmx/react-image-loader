import React from 'react';
import ReactDOM from 'react-dom';
import ImageLoader from './ImageLoader';
import * as serviceWorker from './serviceWorker';
import imageSmall from './output.svg';
import imageLarge from './big_img.jpeg';



ReactDOM.render(
<div>
<ImageLoader width={'500'} height={'320'} image_large={imageLarge} image_small={imageSmall} />
<ImageLoader width={'500'} height={'320'}  image_large={'https://picsum.photos/1920/1080/?image=1'} image_small={'https://picsum.photos/200/113/?image=1'} />
<ImageLoader width={'500'} height={'320'}  image_large={'https://picsum.photos/1920/1080/?image=2'} image_small={'https://picsum.photos/200/113/?image=2'} />
<ImageLoader width={'500'} height={'320'}  image_large={'https://picsum.photos/1920/1080/?image=3'} image_small={'https://picsum.photos/200/113/?image=3'} />
<ImageLoader width={'500'} height={'320'}  image_large={'https://picsum.photos/1920/1080/?image=4'} image_small={'https://picsum.photos/200/113/?image=4'} /> 



</div>




, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
