import React from 'react'
import chroma from 'chroma-js';

function Progress(props: {
  progress: number,
  color: string,
  zIndex: number
}) {
  const color = chroma(props.color || '#ffffff');
  const colorLuminance = color.luminance() > 0.5 ? 'black' : 'white';
  const textColor = colorLuminance == 'white' ? color.brighten(1).hex() : color.darken(1).hex();
  
  return (
    <div className={`flex justify-end items-center align-middle absolute h-full opacity-50 left-0 z-0 rounded-lg`} style={{ background: props?.color,width: `${props?.progress}%`, zIndex: props?.zIndex }}>
      <div className="lg:text-4xl text-3xl font-black mx-2" style={{color: textColor }}>
        {props?.progress}%
      </div>
    </div>
  )
}

export default Progress