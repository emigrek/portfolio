import React from 'react'

function Progress(props: {
  progress: number,
  color: string,
  zIndex: number
}) {
  return (
    <div className={`absolute h-full opacity-50 left-0 z-0 rounded-lg`} style={{ background: props.color,width: `${props.progress}%`, zIndex: props.zIndex }}></div>
  )
}

export default Progress