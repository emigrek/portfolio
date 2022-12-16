import { FaceSmileIcon, HandRaisedIcon, MoonIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { pageInfoState } from '../atoms/pageInfo';

function Welcome() {
    const pageInfo = useRecoilValue(pageInfoState);

    return (
        <div className='flex flex-col lg:flex-row space-y-4 space-x-4 items-center justify-center align-middle'>
            <div className="lg:text-6xl text-4xl font-thin text-white flex items-center justify-center">
                <div>Hi I&apos;m </div>
                <div className='font-bold mx-2'>{pageInfo?.name}</div>
                <div><HandRaisedIcon className='w-8 h-8 lg:w-12 lg:h-12 lg:ml-3'/></div>
            </div>
            <div className='flex flex-col items-center text-xl lg:text-2xl font-thin text-white/50'>
                <div>
                    Aspiring <span className="text-blue-500 font-medium">{pageInfo?.target}</span> developer
                </div>
                <div>
                    <span className='font-medium'>
                        dark theme <MoonIcon className='w-6 h-6 inline-block'/>
                    </span>
                    <span> and </span>
                    <span className='font-medium'>
                        emoji <FaceSmileIcon className='w-6 h-6 inline-block'/>
                    </span>
                    <span> lover</span>
                </div>
            </div>
        </div>
    )
}

export default Welcome