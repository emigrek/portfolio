import React from 'react'
import { useRecoilValue } from 'recoil';
import { pageInfoState } from '../atoms/pageInfo';
import Social from './Social';

function Socials() {
    const pageInfo = useRecoilValue(pageInfoState);

    return (
        <div className="flex items-center justify-center w-full space-x-2 space-y-0 align-middle md:space-y-3 md:space-x-0 md:flex-col">
            {
                pageInfo?.socials?.map(social => (
                    <Social key={social?._id} social={social}/>
                ))
            }
        </div>
    )
}

export default Socials