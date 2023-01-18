import { FaceSmileIcon, HandRaisedIcon, MoonIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { pageInfoState } from '../atoms/pageInfo';
import Socials from './Socials';

function Welcome() {
    const pageInfo = useRecoilValue(pageInfoState);
    const [isWaving, setIsWaving] = React.useState(true);

    return (
        <div className='mt-14 flex flex-col lg:flex-row space-x-4 space-y-10 lg:space-y-0 items-center justify-center align-middle z-0'>
            <div className="flex-col items-center justify-center align-middle space-y-10">
                <div className="lg:text-8xl text-5xl font-thin text-[#dedede] flex items-center justify-center">
                    <div>Hi I&apos;m </div>
                    <div className='font-bold mx-2'>{pageInfo?.name}</div>
                    <div onClick={() => setIsWaving(!isWaving) } className={`${isWaving ? 'waving-hand' : ''} cursor-pointer`}>
                        <span className={`w-8 h-8 lg:w-24 lg:h-24 lg:ml-3 rotate-12`}>👋</span>
                    </div>
                </div>
                <Socials/> 
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