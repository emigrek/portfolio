import React from 'react'
import NavItem from './NavItem'
import { Screen } from '../typings';
import { Bars4Icon, BeakerIcon, HomeIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pageState } from '../atoms/page';
import SidebarCloseButton from './SidebarCloseButton';

export const screens: Screen[] = [
    { name: 'About', Icon: HomeIcon },
    { name: 'Skills', Icon: SparklesIcon },
    { name: 'Projects', Icon: BeakerIcon },
];

function Navbar() {
    const page = useRecoilValue(pageState);

    if(!page.sidebar && page.scrollProgress <= 90)
        return (
            <nav className='transition-all z-[4] absolute top-0 flex flex-wrap items-center md:justify-center mx-auto right-0 left-0 text-white w-full xl:h-20 h-16 bg-black/40 backdrop-blur-3xl shadow-lg select-none'>
                <SidebarCloseButton className="md:hidden"/>
                <div id="navbar-default" className="hidden w-full text-lg flex-row space-x-10 xl:space-x-20 p-4 items-center justify-center md:flex md:w-auto">
                    { 
                        screens.map((screen: Screen) => 
                            <NavItem key={screen?.name} screen={screen} href={`#${screen?.name.toLowerCase()}`}/>
                        )
                    }
                </div>
            </nav>
        );
    else return null;
}

export default Navbar