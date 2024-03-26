import React, { useState } from 'react';
import Preloader from './Preloader/Preloader';

const ImageLoader = ({ src, alt, height, style }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader />}
      <img
        src={src}
        alt={alt}
        height={height}
        style={{ ...style, display: loaded ? 'block' : 'none' }}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
};

export default ImageLoader;