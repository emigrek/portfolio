import React from 'react'

function Screen(props: {
    children: React.ReactNode,
    id?: string,
    className?: string
}) {
  return (
    <div id={props.id} className={`${props.className} w-full h-screen snap-start`}>
      { props.children }
    </div>
  )
}

export default Screen