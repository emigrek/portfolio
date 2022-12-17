import { BeakerIcon, SparklesIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Button from './Button'

function NavButtons() {
  return (
    <div className='flex flex-col lg:space-y-0 space-y-4 lg:flex-row items-center justify-center align-middle p-4 lg:space-x-10'>
        <Button href="#skills" className="bg-white text-black space-x-2 rounded-full">
            <div className="font-medium">
                My skills
            </div>
            <div>
                <SparklesIcon className='w-5 h-5'/>
            </div>
        </Button>
        <Button href="#projects" className="text-white backdrop-blur-lg space-x-2 border-b-2 border-transparent transition-all hover:border-white/80">
            <div className="font-medium">
                Talk is cheap, show me the code
            </div>
            <div>
                <BeakerIcon className='w-5 h-5'/>
            </div>
        </Button>
    </div>
  )
}

export default NavButtons