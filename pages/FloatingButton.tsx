import React from 'react'

type Props = {
    className?: string;
    onClick?: () => void;
    href?: string;
    children: React.ReactNode;
}

function FloatingButton({ className, onClick, children, href } : Props) {
    return (
        <a href={href} onClick={ onClick } className={`${className} p-2 text-sm focus:outline-none flex items-center justify-center w-12 h-12 z-10 cursor-pointer`}>
            { children }
        </a>
    )
}

export default FloatingButton