import React from 'react'

function Button(props: {
    className?: string,
    children: React.ReactNode,
    onClick?: (e: React.MouseEvent<HTMLBodyElement>) => void
}) {
  return (
    <div className={`${props.className} lg:w-auto w-full py-3 justify-center px-4 lg:px-6 lg:py-3 font-bold flex flex-row items-center cursor-pointer select-none`}>
        { props.children }
    </div>
  )
}

export default Button