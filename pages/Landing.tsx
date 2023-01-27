import Image from 'next/image'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { pageInfoState } from '../atoms/pageInfo';
import Socials from './Socials'

function Landing() {
  const pageInfo = useRecoilValue(pageInfoState);
  const birthdayFormatted = new Date(pageInfo?.birthday!).toLocaleDateString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' });

  return (
    <div className='z-[3] grid gap-10 mx-4 xl:w-6/12 grid-cols-2 md:grid-cols-3'>
      <div className='flex-col justify-center text-xl'>
        <Image className='relative w-48 mx-auto rounded-full shadow-lg' src="/me.png" width={1000} height={1000} alt="Karol Janasz"/>
        <h4 className='my-2 mt-4 text-2xl font-bold'>{ pageInfo?.name }</h4>
        <div>{ birthdayFormatted }</div>
        <div><span>🏡</span> { pageInfo?.city }</div>
        <div><span>🌍</span> { pageInfo?.country }</div>
      </div>
      <div className='p-2 rounded-lg text-md md:p-4 xl:text-xl lg:text-2xl bg-white/10'>
        <span className={`w-8 h-8 lg:w-24 lg:h-24 lg:ml-3 rotate-12`}>👋</span> { pageInfo?.description }
      </div>
      <div className="hidden md:flex">
        <Socials/>
      </div>
    </div>
  )
}

export default Landing