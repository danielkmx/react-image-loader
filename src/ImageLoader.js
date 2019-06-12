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

const Img = ({
  image_large,
  image_small,
  alt,
  loaded,
  setLoaded,
  onLoad,
  callback,
  slowCon,
  ...props
}) => (
  <React.Fragment>
    {slowCon && (
      <img
        style={loaded ? undefined : { display: "none" }}
        src={image_large}
        alt={alt}
        {...props}
        data-testid="image-large"
        onLoad={async e => {
          setLoaded(true);
          onLoad && onLoad(e);
        }}
      />
    )}
    {!loaded && (
      <img
        src={image_small}
        alt="img_small"
        className="blurry"
        data-testid="image-small"
      />
    )}
  </React.Fragment>
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
  const [slowCon, setSlowCon] = useState(false);
  const [loaded, setLoaded] = useState(false);
 
  const { image_large, image_small, width, height ,threshold} = props;
  useEffect(() => {
    setTimeout(function() {
      setSlowCon(true);
    }, threshold);
  });
  return (
    <div>
      <ImageWrapper
        slowCon={slowCon}
        width={width}
        height={height}
        render={true}
        image_large={image_large}
        image_small={image_small}
        loaded={loaded}
        setLoaded={setLoaded}
      />
    </div>
  );
}

export default ImageLoader;
