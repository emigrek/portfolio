import React from 'react'

type Props = {
    progress: number,
    zIndex: number
}

function ScrollProgress({ progress, zIndex } : Props) {
    return (
        <div style={ { width: `${progress}%`, zIndex: zIndex }} className='transition-all absolute top-0 h-[0.2rem] bg-gradient-to-r from-blue-500 to-fuchsia-500'></div>
    )
}

export default ScrollProgress