import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pageState } from '../atoms/page';
import { screens } from "../utils/screens";
import SidebarItem from './SidebarItem';

function Sidebar() {
    const page = useRecoilValue(pageState);
    const setPage = useSetRecoilState(pageState);

    if(page.sidebar)
        return (
            <div onClick={
                () => {
                    setPage({ ...page, sidebar: false });
                }
            } className='w-full h-full absolute z-[11] bg-black/80 select-none'>
                <div className='w-64 h-full flex flex-col space-y-4 px-2 items-center justify-center bg-neutral-900 z-[10]'>
                    { 
                        screens.map(screen => 
                            <SidebarItem key={screen?.name} screen={screen} href={`#${screen?.name.toLowerCase()}`}/>
                        )
                    }
                </div>
            </div>
        )
    else return null;
}

export default Sidebar