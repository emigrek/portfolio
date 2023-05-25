import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge';
import { Screen } from '../typings'
import useViewingScreen from '../utils/useViewingScreen';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
    screen: Screen,
    href?: string,
    className?: string
}

function SidebarItem({ screen, href, className }: Props) {
    const Icon = screen?.Icon;

    const currentScreen = useViewingScreen();
    const viewing = currentScreen.name == screen?.name;

    return (
        <a
            href={href}
            className={twMerge(viewing ? 'text-neutral-200 bg-black' : 'text-neutral-600', 'hover:text-neutral-200 transition ease-out duration-300 flex space-x-3 font-semibold items-center justify-center cursor-pointer text-xl xl:text-lg h-12 px-5 rounded-lg hover:font-semibold w-fit', className)}
        >
            {Icon ? <Icon className="w-6 h-6" /> : null}
            <div>{screen?.name}</div>
        </a>
    )
}

export default SidebarItem