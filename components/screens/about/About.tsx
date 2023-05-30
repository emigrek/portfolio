import Image from 'next/image'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { pageInfoState } from '@/atoms/pageInfo';
import { urlFor } from '@/sanity';

import Socials from '@/components/screens/about/Socials';
import Sheet from '@/components/ui/Sheet/Sheet';

function About() {
  const pageInfo = useRecoilValue(pageInfoState);
  const birthdayFormatted = new Date(pageInfo?.birthday!).toLocaleDateString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' });
  const avatarSrc = pageInfo?.avatar ? urlFor(pageInfo.avatar).width(500).height(500).url() : `https://ui-avatars.com/api/?name=${pageInfo?.name}&size=500&bold=true&background=000000&color=ffffff`;

  return (
    <div className='z-[2] flex flex-col items-center justify-center gap-8 md:flex-row'>
      <div className='flex flex-row items-center gap-8 mx-auto md:gap-0 lg:items-start md:flex-col'>
        <Image priority className='relative mx-auto rounded-full shadow-xl w-36 lg:w-44' src={avatarSrc} width={500} height={500} alt="Face" />
        <div className="flex flex-col text-left">
          <h1 className='mt-4 text-lg font-medium text-white md:text-xl'>{pageInfo?.name}</h1>
          <h2 className='text-sm text-neutral-400'>{birthdayFormatted}</h2>
        </div>
      </div>
      <Sheet className='flex flex-col max-w-md gap-3 mx-4 text-center md:mx-0'>
        <div className='text-neutral-300'>
          <span className={`p-2 md:text-xl`}>👋</span>{pageInfo?.description}
        </div>
        <div className='text-lg font-medium text-center'>
          Reach me anytime!
          <span className="hidden md:inline-block">👉</span>
          <span className='inline-block md:hidden'>👇</span>
        </div>
      </Sheet>
      <Socials />
    </div>
  )
}

export default About