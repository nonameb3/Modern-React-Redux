import React from 'react';

const ImageList = (prop)=> {
  const images = prop.images.map((image)=>{
    return <img key={image.id} alt={image.description} src={image.urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;