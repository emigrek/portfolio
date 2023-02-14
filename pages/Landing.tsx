import Image from 'next/image'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { pageInfoState } from '../atoms/pageInfo';
import { urlFor } from '../sanity';
import Socials from './Socials'
import SwayLight from './SwayLight';

function Landing() {
  const pageInfo = useRecoilValue(pageInfoState);
  const birthdayFormatted = new Date(pageInfo?.birthday!).toLocaleDateString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' });
  const avatarSrc = pageInfo?.avatar ? urlFor(pageInfo.avatar).width(500).height(500).url() : `https://ui-avatars.com/api/?name=${pageInfo?.name}&size=500&bold=true&background=000000&color=ffffff`;

  return (
    <div className='z-[3] items-center grid md:gap-10 mx-4 grid-cols-1 md:grid-cols-4'>
      <div className='flex-col justify-center mx-auto mb-6 text-xl font-normal text-center align-middle md:mb-0 md:text-left text-white/70'>
        <div className='relative'>
          <Image priority className='relative w-32 mx-auto rounded-full shadow-lg lg:w-48' src={avatarSrc} width={500} height={500} alt="Face"/>
          <SwayLight color="#3b82f6" blur={100} scale={300} opacity={60} offsetX={0} offsetY={0} />
        </div>
        <h4 className='my-2 mt-4 font-sans font-bold text-white md:text-lg'>{ pageInfo?.name?.toUpperCase() }</h4>
        <div className='text-sm'>{ birthdayFormatted }</div>
      </div>
      <div className='flex-col items-center max-w-md col-span-2 p-2 my-auto mb-4 space-y-4 font-light text-center whitespace-normal rounded-lg md:mb-6 bg-white/5 md:bg-black/20 backdrop-blur-xl text-md overflow-clip md:p-4 md:text-lg xl:text-xl lg:text-lg'>
        <div>
          <span className={`p-2 md:text-2xl`}>👋</span>{ pageInfo?.description }
        </div>
        <div className='text-xl font-semibold tracking-wide'>
          Reach me anytime!
          <span className="hidden md:inline-block">👉</span>
          <span className='inline-block md:hidden'>👇</span>
        </div>
      </div>
      <div className="relative hidden md:flex">
        <Socials/>
        <SwayLight color="#d946ef" blur={60} scale={500} opacity={50} offsetX={30} offsetY={200} />
      </div>
    </div>
  )
}

export default Landing