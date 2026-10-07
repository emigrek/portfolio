import Image from 'next/image'
import React, { FC } from 'react'
import { urlFor } from '@/sanity'
import { Skill } from '@/typings'
import chroma from 'chroma-js'

const SkillImage: FC<{ skill: Skill }> = ({ skill }) => {
    const backgroundColor = skill.color ? chroma(skill.color).alpha(0.2).css() : '#ffffff50';

    return (
        <div
            style={{ backgroundColor: backgroundColor }}
            className='relative w-6 h-6 rounded-full backdrop-blur-lg'
        >
            {
                skill.image && (
                    <Image
                        alt={skill.title}
                        src={urlFor(skill.image).url()}
                        width={24}
                        height={24}
                        className='p-[0.3rem]'
                    />
                )
            }
        </div>
    )
}

export default SkillImage
