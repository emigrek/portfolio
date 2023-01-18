import React from 'react'
import { useRecoilValue } from 'recoil';
import { pageInfoState } from '../atoms/pageInfo';
import Social from './Social';

function Socials() {
    const pageInfo = useRecoilValue(pageInfoState);

    return (
        <div className="flex space-x-8 items-center justify-center align-middle">
            {
                pageInfo?.socials?.map(social => (
                    <Social key={social?._id} social={social}/>
                ))
            }
        </div>
    )
}

export default Socials