import React from 'react'

type Props = {
    color: string,
    blur: number,
    scale: number,
    opacity: number,
    offsetX: number,
    offsetY: number
}

function SwayLight({ color, blur, scale, opacity, offsetX, offsetY }: Props) {
    return (
        <div className='absolute w-full h-full -z-10 animate-sway'
            style={{
                filter: `blur(${blur}px)`,
                scale: `${scale}%`,
                opacity: `${opacity}%`,
                top: `${offsetY}px`,
                left: `${offsetX}px`
            }}
        >
            <svg style={{
                fill: color
            }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.6,-62.9C48,-56.9,58,-48.1,64.3,-37.1C70.6,-26.2,73.1,-13.1,72.6,-0.3C72.2,12.6,68.8,25.2,64.2,39C59.5,52.8,53.7,67.9,42.8,75.5C31.9,83,16,83.1,0.8,81.7C-14.3,80.2,-28.6,77.3,-41.8,71.1C-55.1,64.8,-67.3,55.4,-73.3,43C-79.2,30.6,-79,15.3,-79.5,-0.3C-80.1,-16,-81.5,-31.9,-74.5,-42.4C-67.4,-52.9,-51.9,-57.9,-38,-62.5C-24.2,-67,-12.1,-71.2,0.3,-71.6C12.6,-72.1,25.3,-68.9,36.6,-62.9Z" transform="translate(100 100)" />
            </svg>
        </div>
    )
}

export default SwayLight