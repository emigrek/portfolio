import Image from 'next/image'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { pageInfoState } from '../atoms/pageInfo';
import Socials from './Socials'

function Landing() {
  const pageInfo = useRecoilValue(pageInfoState);
  const birthdayFormatted = new Date(pageInfo?.birthday!).toLocaleDateString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' });

  return (
    <div className='z-[3] items-center grid md:gap-10 mx-4 grid-cols-1 md:grid-cols-4'>
      <div className='flex-col justify-center mx-auto mb-6 text-xl font-normal text-center align-middle md:mb-0 md:text-left text-white/70'>
        <div className='relative'>
          <Image priority className='relative w-32 mx-auto rounded-full shadow-xl shadow-black/30 lg:w-48' src="/me.png" width={500} height={500} alt="Karol Janasz face"/>
          <div className='absolute bottom-0 right-0 w-full h-full opacity-60 -z-10 -left-5 -top-10 animate-sway' style={{filter: "blur(100px)", scale: "200%"}}>
            <svg className="fill-blue-500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.6,-62.9C48,-56.9,58,-48.1,64.3,-37.1C70.6,-26.2,73.1,-13.1,72.6,-0.3C72.2,12.6,68.8,25.2,64.2,39C59.5,52.8,53.7,67.9,42.8,75.5C31.9,83,16,83.1,0.8,81.7C-14.3,80.2,-28.6,77.3,-41.8,71.1C-55.1,64.8,-67.3,55.4,-73.3,43C-79.2,30.6,-79,15.3,-79.5,-0.3C-80.1,-16,-81.5,-31.9,-74.5,-42.4C-67.4,-52.9,-51.9,-57.9,-38,-62.5C-24.2,-67,-12.1,-71.2,0.3,-71.6C12.6,-72.1,25.3,-68.9,36.6,-62.9Z" transform="translate(100 100)" />
            </svg>
          </div>
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
        <div className='absolute bottom-0 right-0 w-full h-full opacity-30 -z-10 top-64 animate-sway' style={{filter: "blur(50px)", scale: "500%"}}>
          <svg className="fill-fuchsia-500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.6,-62.9C48,-56.9,58,-48.1,64.3,-37.1C70.6,-26.2,73.1,-13.1,72.6,-0.3C72.2,12.6,68.8,25.2,64.2,39C59.5,52.8,53.7,67.9,42.8,75.5C31.9,83,16,83.1,0.8,81.7C-14.3,80.2,-28.6,77.3,-41.8,71.1C-55.1,64.8,-67.3,55.4,-73.3,43C-79.2,30.6,-79,15.3,-79.5,-0.3C-80.1,-16,-81.5,-31.9,-74.5,-42.4C-67.4,-52.9,-51.9,-57.9,-38,-62.5C-24.2,-67,-12.1,-71.2,0.3,-71.6C12.6,-72.1,25.3,-68.9,36.6,-62.9Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Landing