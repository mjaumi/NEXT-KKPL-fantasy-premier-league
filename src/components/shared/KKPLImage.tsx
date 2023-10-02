import Image from 'next/image';
import React from 'react';

// image props datatype declared here
interface IImage {
  src: string;
  alt: string;
  priority?: boolean;
}

const KKPLImage = ({ src, alt, priority }: IImage) => {
  // rendering the image component here for abstraction purpose
  return (
    <Image
      className='h-full w-full'
      src={src}
      height={0}
      width={0}
      sizes='100%'
      priority={priority && priority}
      alt={alt}
    />
  );
};

export default KKPLImage;
