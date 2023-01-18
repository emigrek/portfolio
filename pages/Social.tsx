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
        }} className="cursor-pointer" key={social?._id}>
            <Image alt={`social-image-${social?.title}`} unoptimized loader={() => src} src={src} width={128} height={128} className="relative w-10"/>
        </div>
    )
}

export default Social