import React from 'react'
import { Navbar as Nav } from '@/components/ui/Navbar/Navbar';
import { Screen } from '@/typings';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pageState } from '@/atoms/page';
import ScrollProgress from '@/components/ScrollProgress';
import { screens } from '@/utils/screens';
import { Button } from '@/components/ui/Button/Button';
import { GoThreeBars } from 'react-icons/go';
import NavItem from '@/components/ui/Navbar/NavbarItem';
import useViewingScreen from '@/hooks/useViewingScreen';
import cn from '@/utils/cn';

function Navbar() {
    const page = useRecoilValue(pageState);
    const setPage = useSetRecoilState(pageState);

    const currentViewing = useViewingScreen();

    const handleSidebarToggle = () => {
        setPage(state => ({ ...state, sidebar: !state.sidebar }));
    }

    if (page.sidebar || page.scrollProgress >= 90) return null;

    return (
        <>
            <ScrollProgress progress={page.scrollProgress} zIndex={30} />
            <Nav className={cn(
                'transition-all duration-300 flex items-center justify-between shadow-lg md:justify-center backdrop-blur-sm border-neutral-800',
                page.scrollProgress > 15 && 'border-b bg-neutral-900/90'
            )}>
                <Button className='ml-3 cursor-pointer md:hidden' onClick={handleSidebarToggle} iconRight={GoThreeBars} variant={'transparent'} />
                <div className="flex-row items-center justify-center hidden w-full space-x-10 text-lg xl:space-x-20 md:flex md:w-auto">
                    {
                        screens.map((screen: Screen) =>
                            <NavItem active={screen === currentViewing} key={screen.name} href={`#${screen.name.toLowerCase()}`} iconLeft={screen.Icon}>
                                {screen.name}
                            </NavItem>
                        )
                    }
                </div>
            </Nav>
        </>
    )
}

export default Navbar