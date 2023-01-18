import React from 'react'

function Button(props: {
  className?: string,
  children: React.ReactNode,
  href?: string,
  onClick?: (e: React.MouseEvent<HTMLBodyElement>) => void
}) {
  return (
    <a href={props.href} className={`${props.className} z-0 lg:w-auto w-full py-3 justify-center px-4 lg:px-6 lg:py-3 font-bold flex flex-row items-center cursor-pointer select-none`}>
      {props.children}
    </a>
  )
}

export default Button