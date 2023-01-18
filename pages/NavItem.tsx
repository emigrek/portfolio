import React from 'react'
import { Screen } from '../typings'

type Props = {
    screen: Screen
    href?: string
}

function NavItem({ screen, href } : Props) {
    const Icon = screen?.Icon;

    return (
        <a href={href} className='flex space-x-3 items-center justify-center cursor-pointer text-xl xl:text-lg'>
            { Icon ? <Icon className="w-6 h-6"/> : null }
            <div className="text-[#dedede]">{ screen?.name }</div>
        </a>
    )
}

export default NavItem