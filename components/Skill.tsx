import React from 'react'
import Progress from '@/components/Progress';
import { Skill as SkillType } from '@/typings';
import SkillImage from '@/components/SkillImage';

type Props = {
  skill: SkillType
}

function Skill({ skill }: Props) {
  return (
    <div className='relative flex flex-row items-center justify-between w-full p-3 mx-5 align-middle rounded-lg shadow-lg bg-black/30 backdrop-blur-xl lg:w-1/3 lg:p-4'>
      <div className='flex items-center justify-center space-x-4'>    
        <SkillImage skill={skill} mini={false}/>
        <div className="flex flex-col text-left">
          <div className='font-medium lg:text-lg'>{ skill?.title }</div>
          <div className='flex items-center justify-start text-xs align-middle text-white/40'>
            {skill?.category}
          </div>
        </div>
      </div>
      <Progress zIndex={-1} color={skill?.color || '#ffffff'} progress={skill?.progress}/>
    </div>
  )
}

export default Skill;