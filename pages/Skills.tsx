import { SparklesIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useRecoilValue } from 'recoil';
import { skillsState } from '../atoms/skills';
import Skill from './Skill'

function Skills() {
  const skills = useRecoilValue(skillsState);

  return (
    <div className="container flex flex-col z-30">
      <div className='flex flex-row items-center justify-center text-5xl space-x-3 pb-9'>
        <div className="font-medium">Skills</div>
        <div><SparklesIcon className='w-12 h-12 text-blue-500'/></div>
      </div>
      <div className='flex flex-wrap flex-row items-center align-middle justify-center gap-2'>
        {
          skills?.map((skill, index) => (
            <Skill key={skill?._id} skill={skill}/>
          ))
        }
      </div>
    </div>
  )
}

export default Skills