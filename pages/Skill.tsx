import React from 'react'
import Progress from './Progress';
import { Skill as SkillType } from '../typings';
import SkillImage from './SkillImage';

type Props = {
  skill: SkillType
}

function Skill({ skill }: Props) {
  return (
    <div className='bg-black/25 shadow-xl relative backdrop-blur-3xl rounded-lg flex flex-row items-center justify-between mx-5 w-full lg:w-1/3 p-3 lg:p-4 align-middle'>
      <div className='flex items-center space-x-4 justify-center'>    
        <SkillImage skill={skill} mini={false}/>
        <div className="flex flex-col text-left">
          <div className='lg:text-lg font-medium'>{ skill?.title }</div>
          <div className='text-xs text-white/40 flex items-center align-middle justify-start'>
            {skill?.category}
          </div>
        </div>
      </div>
      <Progress zIndex={-1} color={skill?.color || '#ffffff'} progress={skill?.progress}/>
    </div>
  )
}

export default Skill;