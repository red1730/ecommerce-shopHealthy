import React, { useState } from 'react';

export const DragAndDrop = () => {

  const [images, setImages] = useState([]);

  const handleChange = (imageList) => setImages(imageList);

  return (
    <>      
      <ImageUploading multiple={false} maxNumber={1} value={images} onChange={handleChange}>
      </ImageUploading>
    </>
  )
}