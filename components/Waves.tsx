import cn from '@/utils/cn'
import React from 'react'

type Props = {
  className?: string
}

function Waves({ className }: Props) {
  return (
    <svg className={cn(className, 'absolute w-full bottom-0')} id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="5%" stopColor="#3b82f6"></stop>
          <stop offset="95%" stopColor="#8b5cf6"></stop>
        </linearGradient>
      </defs>
      <path d="M 0,600 C 0,600 0,150 0,150 C 153.06666666666666,135.46666666666667 306.1333333333333,120.93333333333334 474,133 C 641.8666666666667,145.06666666666666 824.5333333333333,183.73333333333332 988,191 C 1151.4666666666667,198.26666666666668 1295.7333333333333,174.13333333333333 1440,150 C 1440,150 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stopColor="#3b82f6"></stop><stop offset="95%" stopColor="#8b5cf6"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 171.46666666666664,300.6666666666667 342.9333333333333,301.33333333333337 488,291 C 633.0666666666667,280.66666666666663 751.7333333333333,259.3333333333333 906,259 C 1060.2666666666667,258.6666666666667 1250.1333333333332,279.33333333333337 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1"></path><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stopColor="#3b82f6"></stop><stop offset="95%" stopColor="#8b5cf6"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,450 0,450 C 141.59999999999997,472.5333333333333 283.19999999999993,495.06666666666666 450,482 C 616.8000000000001,468.93333333333334 808.8,420.26666666666665 978,409 C 1147.2,397.73333333333335 1293.6,423.8666666666667 1440,450 C 1440,450 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2"></path>
    </svg>
  )
}

export default Waves