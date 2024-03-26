import React, { useState } from 'react';
import Preloader from './Preloader/Preloader';

const Loader = ({ src, alt, height, style }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader />}
      
    </>
  );
};

export default Loader;