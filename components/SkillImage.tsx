import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { urlFor } from '../sanity'
import { Skill } from '../typings'

type Props = {
    skill: Skill,
    mini: boolean
}

function SkillImage({ skill, mini } : Props) {
    const src = skill?.image && urlFor(skill?.image).url();

    return (
        <div 
            style={ { backgroundColor: skill?.color ? `${skill?.color}50` as string : '#ffffff50' } } 
            className={twMerge(mini ? 'w-6 h-6 lg:w-6 lg:h-6' : 'w-10 h-10 lg:w-14 lg:h-14', 'relative rounded-full backdrop-blur-lg')}
        >
            <Image 
                alt={`skill-image-${skill?.title}`}
                src={src} 
                width={128}
                height={128}
                className={mini ? 'p-[0.3rem]' : 'xl:p-3 p-2'}
                priority={true}
            />
        </div>
    )
}

export default SkillImage