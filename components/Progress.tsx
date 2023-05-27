import React from 'react'
import chroma from 'chroma-js';

function Progress(props: {
  progress: number,
  color: string,
  zIndex: number
}) {
  const color = chroma(props.color || '#ffffff');

  return (
    <div className={`flex justify-end items-center align-middle absolute h-full left-0 z-0 rounded-lg`} style={{ background: color.darken(1.55).css(), width: `${props?.progress}%`, zIndex: props?.zIndex }}>
      <div className="mx-2 text-3xl font-black lg:text-4xl" style={{ color: color.darken(0.8).css() }}>
        {props?.progress}%
      </div>
    </div>
  )
}

export default Progress;