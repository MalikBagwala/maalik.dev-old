import { ComponentPropsWithoutRef } from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';
type ContainerProps = ComponentPropsWithoutRef<'div'> & {
  className?: ClassNameValue;
};

const Container = ({ children, className, ...others }: ContainerProps) => {
  return (
    <div className={twMerge('mt-20 mb-10 lg:mt-0 p-8', className)} {...others}>
      {children}
    </div>
  );
};

export default Container;
