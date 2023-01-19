import { Bars4Icon } from '@heroicons/react/24/solid';
import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pageState } from '../atoms/page';

type Props = {
    className?: string;
}

function SidebarCloseButton({ className } : Props) {
    const page = useRecoilValue(pageState);
    const setPage = useSetRecoilState(pageState);

    return (
        <button onClick={
            () => {
                setPage({ ...page, sidebar: true});
            }
        } type="button" className={`${className} inline-flex items-center p-2 ml-3 text-sm text-white hover:text-black hover:bg-gray-100 focus:outline-none`}>
            <span className="sr-only">Open main menu</span>
            <Bars4Icon className="w-6 h-6"/>
        </button>
    )
}

export default SidebarCloseButton