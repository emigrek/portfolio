import React from 'react'
import { useRecoilValue } from 'recoil';
import { pageInfoState } from '@/atoms/pageInfo';
import Social from '@/components/screens/about/Social';

function Socials() {
    const pageInfo = useRecoilValue(pageInfoState);

    return (
        <div className="flex items-center justify-center gap-2 align-middle md:flex-col">
            {
                pageInfo?.socials?.map(social => (
                    <Social key={social?._id} social={social}/>
                ))
            }
        </div>
    )
}

export default Socials;