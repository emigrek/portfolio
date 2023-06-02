import Image from 'next/image'
import React, { HTMLAttributes, FC } from 'react'
import { urlFor } from '@/sanity'
import { Image as ImageType } from '@/typings'
import chroma from 'chroma-js'
import cn from '@/utils/cn'

interface SkillImageProps extends HTMLAttributes<HTMLDivElement> {
    image: ImageType,
    color: string,
    mini?: boolean
}

const SkillImage: FC<SkillImageProps> = ({ image, color, mini }) => {
    const src = image && urlFor(image).url();
    const backgroundColor = color ? chroma(color).alpha(0.2).css() : '#ffffff50';

    return (
        <div
            style={{ backgroundColor: backgroundColor }}
            className={cn(
                mini ? 'w-6 h-6 lg:w-6 lg:h-6' : 'w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14',
                'relative rounded-full backdrop-blur-lg'
            )}
        >
            <Image
                alt={`Skill image`}
                src={src}
                width={128}
                height={128}
                className={mini ? 'p-[0.3rem]' : 'p-2 md:p-3'}
                priority={true}
            />
        </div>
    )
}

export default SkillImage