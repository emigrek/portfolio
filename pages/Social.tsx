import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { Social } from '../typings'
import { openInNewTab } from '../utils/openInNewTab'

type Props = {
    social: Social
}

function Social({ social } : Props) {
    const src = social?.image && urlFor(social?.image).url();

    const handleSocialClick = (social: Social) => {
        openInNewTab(social?.url);
    }

    return (
        <div onClick={() => {
            handleSocialClick(social);
        }} className="flex items-center justify-start w-full p-3 rounded-lg cursor-pointer xl:p-3 bg-white/10" key={social?._id}>
            <Image alt={`social-image-${social?.title}`} unoptimized loader={() => src} src={src} width={128} height={128} className="relative w-10 xl:w-10"/>
            <div className='hidden mx-4 md:block'>
                {
                    social?.title
                }
            </div>
        </div>
    )
}

export default Social