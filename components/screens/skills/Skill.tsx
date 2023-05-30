import React, { FC, HTMLAttributes } from 'react'
import { Skill as SkillType } from '@/typings';
import SkillImage from '@/components/screens/skills/SkillImage';
import cn from '@/utils/cn';

interface SkillProps extends HTMLAttributes<HTMLDivElement> {
  skill: SkillType
}

const Skill: FC<SkillProps> = ({ skill, className, ...props }) => {
  return (
    <div className={cn('flex flex-col items-center justify-center w-full gap-3 border rounded-lg shadow-lg h-28 md:w-full md:h-36 bg-neutral-900/60 backdrop-blur-sm border-neutral-800', className)} {...props}>
      <SkillImage image={skill.image} color={skill.color} />
      <div className='font-medium md:text-lg text-neutral-200'>{skill?.title}</div>
    </div>
  )
}

export default Skill