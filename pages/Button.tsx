import React from 'react'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href?: string;
}

function Button({ href, children, ...props } : Props) {
  return (
    <a 
      {...props}
      href={href}
      className={`${props.className} z-0 lg:w-auto w-full py-3 justify-center px-4 lg:px-6 lg:py-3 font-bold flex flex-row items-center cursor-pointer select-none`}
    >
      {children}
    </a>
  )
}

export default Button