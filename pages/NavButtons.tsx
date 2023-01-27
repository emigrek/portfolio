import { BeakerIcon, SparklesIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Button from './Button'
import Socials from './Socials'

function NavButtons() {
  return (
    <div className='flex flex-col items-center justify-center p-4 space-y-4 align-middle lg:space-y-0 lg:flex-row lg:space-x-10'>
        <div className="flex md:hidden">
            <Socials/>
        </div>
        <Button href="#skills" className="space-x-2 text-black bg-white rounded-full">
            <div className="font-medium">
                My skills
            </div>
            <div>
                <SparklesIcon className='w-5 h-5'/>
            </div>
        </Button>
        <Button href="#projects" className="space-x-2 text-white transition-all border-b-2 border-transparent backdrop-blur-lg hover:border-white/80">
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