import Image from 'next/image'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { pageInfoState } from '../atoms/pageInfo';
import { urlFor } from '../sanity';
import Socials from './Socials'

function Landing() {
  const pageInfo = useRecoilValue(pageInfoState);
  const birthdayFormatted = new Date(pageInfo?.birthday!).toLocaleDateString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' });
  const avatarSrc = pageInfo?.avatar ? urlFor(pageInfo.avatar).width(500).height(500).url() : `https://ui-avatars.com/api/?name=${pageInfo?.name}&size=500&bold=true&background=000000&color=ffffff`;

  return (
    <div className='z-[3] flex flex-col items-center justify-center md:flex-row gap-8'>
      <div className='flex-col justify-center mx-auto text-xl font-normal text-center align-middle rounded-lg md:text-left'>
        <div className='relative'>
          <Image priority className='relative w-32 mx-auto rounded-full shadow-lg lg:w-48' src={avatarSrc} width={500} height={500} alt="Face" />
        </div>
        <h4 className='mt-4 font-sans font-bold text-white md:text-lg'>{pageInfo?.name?.toUpperCase()}</h4>
        <div className='text-sm text-neutral-400'>{birthdayFormatted}</div>
      </div>
      <div className='flex-col items-center max-w-md p-2 py-3 mx-4 space-y-4 text-lg font-light text-center rounded-lg md:py-4 md:mx-0 bg-neutral-300/5 backdrop-blur-xl'>
        <div className='text-neutral-300'>
          <span className={`p-2 md:text-2xl`}>👋</span>{pageInfo?.description}
        </div>
        <div className='text-xl font-semibold text-center'>
          Reach me anytime!
          <span className="hidden md:inline-block">👉</span>
          <span className='inline-block md:hidden'>👇</span>
        </div>
      </div>
      <div className="relative hidden md:flex">
        <Socials />
      </div>
    </div>
  )
}

export default Landing