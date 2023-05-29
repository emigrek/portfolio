import React from 'react'
import { useRecoilValue } from 'recoil';
import { skillsState } from '@/atoms/skills';
import Skill from '@/components/Skill'

function Skills() {
  const skills = useRecoilValue(skillsState);

  return (
    <div className="container flex flex-col items-center justify-center h-full gap-5 md:gap-10 z-[1]">
      <div className='flex flex-row items-center justify-center text-4xl font-medium md:text-5xl'>
        Skills
      </div>
      <div className='flex flex-row flex-wrap items-center justify-center gap-2 align-middle'>
        {
          skills?.map((skill) => (
            <Skill key={skill?._id} skill={skill} />
          ))
        }
      </div>
    </div>
  )
}

export default Skills