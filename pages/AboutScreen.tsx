import React from 'react'
import Screen from './Screen'

import { HandRaisedIcon, MoonIcon, FaceSmileIcon, BeakerIcon } from '@heroicons/react/24/solid'
import { CodeBracketSquareIcon } from '@heroicons/react/24/outline'
import Button from './Button'

function AboutScreen() {
  return (
    <Screen className="bg-gradient-to-t from-stone-800 to-black flex flex-col items-center justify-center space-y-12 lg:space-y-10">
        <div className='flex flex-col lg:flex-row space-y-4 space-x-4 items-center justify-center align-middle lg:py-10 lg:border-b-2 border-white/20'>
            <div className="lg:text-6xl text-4xl font-thin text-white flex items-center justify-center">
                <div>Hi I'm </div>
                <div className='font-bold mx-2'>Emigrek</div>
                <div><HandRaisedIcon className='w-8 h-8 lg:w-12 lg:h-12 lg:ml-3'/></div>
            </div>
            <div className='flex flex-col items-center text-xl lg:text-2xl font-thin text-white/50'>
                <div>
                    Aspiring <span className="text-typescript font-medium">typescript</span> developer
                </div>
                <div>
                    <span className='font-medium'>
                        dark theme <MoonIcon className='w-6 h-6 inline-block'/>
                    </span>
                    <span> and </span>
                    <span className='font-medium'>
                        emoji lover <FaceSmileIcon className='w-6 h-6 inline-block'/>
                    </span>
                </div>
            </div>
        </div>
        <div className='flex flex-col lg:space-y-0 space-y-4 lg:flex-row items-center justify-center align-middle p-4 space-x-3'>
            <Button className="bg-white text-black space-x-2 rounded-full">
                <div className="font-medium">
                    My projects
                </div>
                <div>
                    <BeakerIcon className='w-5 h-5'/>
                </div>
            </Button>
            <Button className="text-white space-x-2 border-b-2 border-transparent transition-all hover:border-blue-500/80">
                <div className="font-medium">
                    Talk is cheap, show me the code
                </div>
                <div>
                    <CodeBracketSquareIcon className='w-6 h-6'/>
                </div>
            </Button>
        </div>
    </Screen>
  )
}

export default AboutScreen