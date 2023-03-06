import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { Social } from '../typings'
import { openInNewTab } from '../utils/openInNewTab'

type Props = {
    social: Social
}

function Social({ social }: Props) {
    const src = social?.image && urlFor(social?.image).url();

    const handleSocialClick = (social: Social) => {
        openInNewTab(social?.url);
    }

    return (
        <div onClick={() => {
            handleSocialClick(social);
        }} className="flex items-center w-full p-3 space-x-5 tracking-wider transition-all duration-200 rounded-lg shadow-lg cursor-pointer justify-evenly bg-black/20 backdrop-blur-xl hover:bg-black/40 backdrop-blur-4xl xl:p-3" key={social?._id}>
            <Image alt={`social-image-${social?.title}`} unoptimized loader={() => src} src={src} width={128} height={128} className="relative w-10 xl:w-10" />
            <div className='hidden mx-4 font-bold md:block text-white/80'>
                {
                    social?.title
                }
            </div>
            <div className='hidden mx-4 font-bold md:block text-white/80'>
                <ArrowTopRightOnSquareIcon className='w-6' />
            </div>
        </div>
    )
}

export default Social