import React from 'react'
import Image from 'next/image';
import Progress from './Progress';
import { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  skill: SkillType
}

function Skill({ skill }: Props) {
  const src = skill?.image && urlFor(skill?.image).width(128).height(128).url();

  return (
    <div className='bg-black/25 shadow-xl relative backdrop-blur-3xl rounded-lg flex flex-row items-center justify-between mx-5 w-full lg:w-1/3 p-3 lg:p-4 align-middle'>
      <div className="flex flex-col space-y-1 text-left">
        <div className='lg:text-lg font-medium'>{ skill?.title }</div>
        <div className='text-xs text-white/40 flex items-center align-middle justify-start'>
          <div>
            {skill?.category}
          </div>
        </div>
      </div>
      <div>
        <Image alt={`skill-image-${skill?.title}`} unoptimized loader={() => src} src={src} width={128} height={128} className="w-8 h-8 lg:w-14 lg:h-14 relative"/>
      </div>
      <Progress zIndex={-1} color={skill?.color} progress={skill?.progress}/>
    </div>
  )
}

export default Skill