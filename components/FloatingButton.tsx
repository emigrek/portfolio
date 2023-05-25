import React from 'react'
import { twMerge } from 'tailwind-merge';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    className?: string;
    href?: string;
}

function FloatingButton({ href, className, children, ...props } : Props) {
    return (
        <a 
            {...props}
            href={href}
            className={twMerge('p-2 text-sm focus:outline-none flex items-center justify-center w-12 h-12 z-10 cursor-pointer', className)}
        >
            { children }
        </a>
    )
}

export default FloatingButton