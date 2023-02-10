import React from 'react'
import NavItem from './NavItem'
import { Screen } from '../typings';
import { BeakerIcon, HomeIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { useRecoilValue } from 'recoil';
import { pageState } from '../atoms/page';
import SidebarCloseButton from './SidebarCloseButton';
import { pageInfoState } from '../atoms/pageInfo';

export const screens: Screen[] = [
    { name: 'About', Icon: HomeIcon },
    { name: 'Skills', Icon: SparklesIcon },
    { name: 'Projects', Icon: BeakerIcon },
];

function Navbar() {
    const page = useRecoilValue(pageState);
    const pageInfo = useRecoilValue(pageInfoState);

    if(!page.sidebar && page.scrollProgress <= 90)
        return (
            <nav className='transition-all z-[4] absolute top-0 flex flex-wrap items-center justify-between md:justify-center mx-auto right-0 left-0 text-white w-full md:h-20 h-14 bg-black/30 backdrop-blur-xl shadow-lg select-none'>
                <SidebarCloseButton className="md:hidden"/>
                <div id="navbar-default" className="flex-row items-center justify-center hidden w-full p-4 space-x-10 text-lg xl:space-x-20 md:flex md:w-auto">
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