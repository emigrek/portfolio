import React from 'react'
import { twMerge } from 'tailwind-merge';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

function Screen({ className, children, ...props }: Props) {
  return (
    <div {...props} className={twMerge(className, 'w-full h-screen snap-start')}>
      {children}
    </div>
  )
}

export default Screen