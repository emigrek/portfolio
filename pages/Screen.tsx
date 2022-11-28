import React from 'react'

function Screen(props: {
    children: React.ReactNode,
    className?: string
}) {
  return (
    <div className={`${props.className} w-full h-screen snap-start`}>
        { props.children }
    </div>
  )
}

export default Screen