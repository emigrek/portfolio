import React from 'react'
import { useRecoilValue } from 'recoil';
import { pageInfoState } from '../atoms/pageInfo';
import Social from './Social';

function Socials() {
    const pageInfo = useRecoilValue(pageInfoState);

    return (
        <div className="absolute container top-0 z-10 w-full h-24">
            <div className="flex space-x-8 items-center justify-center xl:justify-end align-middle my-3 xl:my-10">
            {
                pageInfo?.socials?.map(social => (
                    <Social key={social._id} social={social}/>
                ))
            }
            </div>
        </div>
    )
}

export default Socials