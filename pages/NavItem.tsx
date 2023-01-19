import React, { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pageState } from '../atoms/page';
import { Screen } from '../typings'
import { screens } from './Navbar'

type Props = {
    screen: Screen,
    href?: string,
    className?: string
}

function NavItem({ screen, href, className } : Props) {
    const [hovering, setHovering] = useState(false);
    const Icon = screen?.Icon;
    const page = useRecoilValue(pageState);

    const getCurrentViewingScreen = () => {
        if(page.scrollProgress >= 0 && page.scrollProgress < 50)
            return screens[0];
        else if(page.scrollProgress >= 50 && page.scrollProgress < 80)
            return screens[1];
        else if(page.scrollProgress >= 80 && page.scrollProgress < 150)
            return screens[2];
        else return screens[2];
    }
    const viewing = getCurrentViewingScreen().name == screen?.name;

    return (
        <a 
            href={href} 
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{ opacity: viewing || hovering ? 1 : 0.2 }} 
            className={`${className} text-[#dedede] hover:text-black flex space-x-3 items-center justify-center cursor-pointer text-xl xl:text-lg h-10 w-32 rounded-lg bg-black hover:bg-white`}
        >
            { Icon ? <Icon className="w-6 h-6"/> : null }
            <div>{ screen?.name }</div>
        </a>
    )
}

export default NavItem