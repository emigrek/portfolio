import React from 'react'
import { Social as SocialType } from '@/typings';
import Social from '@/components/screens/about/Social';

function Socials({ socials }: { socials: SocialType[] }) {
    return (
        <div className="flex items-center justify-center gap-2 align-middle md:flex-col">
            {
                socials?.map(social => (
                    <Social key={social?._id} social={social}/>
                ))
            }
        </div>
    )
}

export default Socials;