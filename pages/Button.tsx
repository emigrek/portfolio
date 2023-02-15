import React from 'react'

function Button(props: {
  className?: string,
  children: React.ReactNode,
  onClick?: () => void,
  href?: string
}) {
  return (
    <a href={props.href} onClick={props.onClick} className={`${props.className} z-0 lg:w-auto w-full py-3 justify-center px-4 lg:px-6 lg:py-3 font-bold flex flex-row items-center cursor-pointer select-none`}>
      {props.children}
    </a>
  )
}

export default Button