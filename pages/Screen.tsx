import React from 'react'


interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Screen({ children, ...props } : Props) {
  return (
    <div {...props} className={`${props.className} w-full h-screen snap-start`}>
      { children }
    </div>
  )
}

export default Screen