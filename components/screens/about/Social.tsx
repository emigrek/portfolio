import Image from 'next/image'
import React, { FC, HTMLAttributes } from 'react'
import { urlFor } from '@/sanity'
import { Social } from '@/typings'
import { openInNewTab } from '@/utils/openInNewTab'
import Sheet from '@/components/ui/Sheet/Sheet';
import { BiLinkExternal } from 'react-icons/bi'

interface SocialProps extends HTMLAttributes<HTMLDivElement> {
    social: Social
}

const Social: FC<SocialProps> = ({ social, ...props }) => {
    const src = social?.image && urlFor(social?.image).url();

    const handleSocialClick = () => {
        openInNewTab(social?.url);
    }

    return (
        <Sheet className='flex items-center justify-between w-full transition-all duration-300 cursor-pointer group hover:bg-neutral-700/50' onClick={handleSocialClick} {...props}>
            <Image alt={`${social?.title} social image`} src={src} width={128} height={128} className="w-10 h-10" />
            <div className='hidden mx-4 font-medium transition-all duration-300 md:block text-neutral-300 group-hover:text-neutral-100'>
                {social?.title}
            </div>
            <div className='hidden md:block'>
                <BiLinkExternal className='fill-white' />
            </div>
        </Sheet>
    )
}

export default Social