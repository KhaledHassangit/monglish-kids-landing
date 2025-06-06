import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
