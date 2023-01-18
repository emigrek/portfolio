import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pageState } from '../atoms/page';
import NavItem from './NavItem';
import { screens } from "./Navbar"

function Sidebar() {
    const page = useRecoilValue(pageState);
    const setPage = useSetRecoilState(pageState);

    if(page.sidebar)
        return (
            <div onClick={
                () => {
                    setPage({
                        nav: page.nav,
                        sidebar: false
                    });
                }
            } className='w-full h-full absolute z-[11] bg-black/80 select-none'>
                <div className='absolute w-64 h-full flex flex-col space-y-10 items-center justify-center bg-stone-800 z-[10]'>
                    { 
                        screens.map(screen => 
                            <NavItem key={screen?.name} screen={screen} href={`#${screen?.name.toLowerCase()}`}/>
                        )
                    }
                </div>
            </div>
        )
    else return null;
}

export default Sidebar