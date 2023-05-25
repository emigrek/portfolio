import React from 'react'
import NavItem from './NavItem'
import { Screen } from '../typings';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pageState } from '../atoms/page';
import ScrollProgress from './ScrollProgress';
import FloatingButton from './FloatingButton';
import { Bars4Icon } from '@heroicons/react/20/solid';
import { screens } from '../utils/screens';
import { twMerge } from 'tailwind-merge';

function Navbar() {
    const page = useRecoilValue(pageState);
    const setPage = useSetRecoilState(pageState);

    const handleSidebarToggle = () => {
        setPage({ ...page, sidebar: !page.sidebar });
    }

    if(!page.sidebar && page.scrollProgress <= 90)
        return (
            <>
                <ScrollProgress progress={page.scrollProgress} zIndex={30} />
                <nav className={twMerge(page.scrollProgress > 10 ? "border-b-[1px]" : "", "transition-all z-[4] absolute top-0 flex flex-wrap items-center justify-between md:justify-center mx-auto right-0 left-0 text-white w-full md:h-16 h-14 bg-black/60 backdrop-blur-xl shadow-lg select-none border-neutral-800")}>
                    <FloatingButton onClick={ handleSidebarToggle } className="w-10 h-10 ml-3 rounded-md md:hidden hover:text-black hover:bg-white">
                        <Bars4Icon className="w-6 h-6"/>
                    </FloatingButton>
                    <div className="flex-row items-center justify-center hidden w-full space-x-10 text-lg xl:space-x-20 md:flex md:w-auto">
                        { 
                            screens.map((screen: Screen) => 
                                <NavItem key={screen?.name} screen={screen} href={`#${screen?.name.toLowerCase()}`}/>
                            )
                        }
                    </div>
                </nav>
            </>
        );
    else return null;
}

export default Navbar