'use client';

import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type CustomImageProps = {
  rounded?: string;
} & ImageProps;

const CustomImage = (props: CustomImageProps) => {
  const { alt, src, className, rounded, ...rest } = props;
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={clsx(
        'overflow-hidden',
        isLoading ? 'animate-pulse' : '',
        rounded,
      )}
    >
      <Image
        className={clsx(
          'duration-700 ease-in-out',
          isLoading
            ? 'scale-[1.02] blur-xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
          rounded,
          className,
        )}
        src={src}
        alt={alt}
        loading='lazy'
        quality={100}
        onLoad={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};
export default CustomImage;
