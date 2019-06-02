import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 500px;
  height: 281px;
  display: block;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
  .blurry {
    filter: blur(10px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`;

const Img = ({ image_large, image_small, alt, loaded, ...props }) =>
  loaded ? (
    <img src={image_large} alt={alt} {...props} />
  ) : (
    <img className="blurry" src={image_small} alt={`img_small`} />
  );

const ImageWrapper = props =>
  props.render ? (
    <ImageContainer>
      <Img {...props} />
    </ImageContainer>
  ) : (
    <ImageContainer />
  );

function ImageLoader(props) {
  const [loaded, setLoaded] = useState(false);
  const { image_large, image_small, width, height } = props;
  useEffect(() => {
    const large_img = new Image();
    large_img.src = image_large;
    large_img.onload = () => {
      setLoaded(true);
    };
  });
  return (
    <div>
      <ImageWrapper
        width={width}
        height={height}
        render={true}
        image_large={image_large}
        image_small={image_small}
        loaded={loaded}
      />
    </div>
  );
}

export default ImageLoader;
