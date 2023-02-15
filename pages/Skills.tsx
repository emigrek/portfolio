import React from 'react'
import { useRecoilValue } from 'recoil';
import { skillsState } from '../atoms/skills';
import Skill from './Skill'

function Skills() {
  const skills = useRecoilValue(skillsState);

  return (
    <div className="container flex flex-col z-[3]">
      <div className='flex flex-row items-center justify-center space-x-3 text-5xl pb-9'>
        <div className="font-medium">Skills</div>
      </div>
      <div className='flex flex-row flex-wrap items-center justify-center gap-2 align-middle'>
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