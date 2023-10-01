import Image from 'next/image';
import React from 'react';

// image props datatype declared here
interface IImage {
  src: string;
  alt: string;
}

const KKPLImage = ({ src, alt }: IImage) => {
  // rendering the image component here for abstraction purpose
  return (
    <Image
      className='h-auto w-auto'
      src={src}
      height={0}
      width={0}
      sizes='100%'
      alt={alt}
    />
  );
};

export default KKPLImage;
