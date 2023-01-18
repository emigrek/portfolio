import React from 'react'
import NavItem from './NavItem'
import { Screen } from '../typings';
import { Bars4Icon, BeakerIcon, HomeIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pageState } from '../atoms/page';

export const screens: Screen[] = [
    { name: 'About', Icon: HomeIcon },
    { name: 'Skills', Icon: SparklesIcon },
    { name: 'Projects', Icon: BeakerIcon },
];

function Navbar() {
    const page = useRecoilValue(pageState);
    const setPage = useSetRecoilState(pageState);

    if(!page.sidebar)
        return (
            <nav className='z-[4] absolute top-0 flex flex-wrap items-center md:justify-center mx-auto right-0 left-0 text-white w-full md:h-16 h-12 bg-black/50 backdrop-blur-sm shadow-lg select-none'>
                <button onClick={
                    () => {
                        setPage({
                            nav: page.nav,
                            sidebar: true
                        });
                    }
                } type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white hover:text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    <Bars4Icon className="w-6 h-6"/>
                </button>
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