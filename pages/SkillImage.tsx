import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { Skill } from '../typings'

import useImageAverageColor from '../utils/useImageAverageColor'

type Props = {
    skill: Skill,
    mini: boolean
}

function SkillImage({ skill, mini } : Props) {
    const src = skill?.image && urlFor(skill?.image).url();
    const [color, loading, error] = useImageAverageColor(src);

    return (
        <div 
            style={ { backgroundColor: color ? `${color}5A` as string : '#ffffff50' } } 
            className={`${mini ? 'w-8 h-8 lg:w-8 lg:h-8' : 'w-8 h-8 lg:w-14 lg:h-14'} relative shadow-sm rounded-full backdrop-blur-lg`}
        >
            <Image 
                alt={`skill-image-${skill?.title}`}
                src={src} 
                width={128}
                height={128}
                className={`${mini ? 'p-2' : 'p-3'}`}
                priority={true}
            />
        </div>
    )
}

export default SkillImage