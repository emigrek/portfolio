import React from 'react'
import Image from 'next/image';
import Progress from './Progress';
import { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';
import SkillImage from './SkillImage';

type Props = {
  skill: SkillType
}

function Skill({ skill }: Props) {
  const src = skill?.image && urlFor(skill?.image).url();

  return (
    <div className='bg-black/25 shadow-xl relative backdrop-blur-3xl rounded-lg flex flex-row items-center justify-between mx-5 w-full lg:w-1/3 p-3 lg:p-4 align-middle'>
      <div className="flex flex-col space-y-1 text-left">
        <div className='lg:text-lg font-medium'>{ skill?.title }</div>
        <div className='text-xs text-white/40 flex items-center align-middle justify-start'>
          {skill?.category}
        </div>
      </div>
      <SkillImage skill={skill} mini={false}/>
      <Progress zIndex={-1} color={skill?.color} progress={skill?.progress}/>
    </div>
  )
}

export default Skill