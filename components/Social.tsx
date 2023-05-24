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

    const handleSocialClick = () => {
        openInNewTab(social?.url);
    }

    return (
        <a onClick={handleSocialClick} className="flex items-center justify-between w-full p-3 transition-all duration-300 rounded-lg shadow-lg cursor-pointer group text-neutral-400 bg-neutral-200/5 hover:bg-neutral-200/10 backdrop-blur-xl" key={social?._id}>
            <Image alt={`social-image-${social?.title}`} src={src} width={128} height={128} className="relative w-10" />
            <div className='hidden mx-4 font-bold transition-all duration-300 md:block group-hover:text-white'>
                { social?.title }
            </div>
            <div className='hidden font-bold md:block'>
                <ArrowTopRightOnSquareIcon className='w-5' />
            </div>
        </a>
    )
}

export default Social