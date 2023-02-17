import React from 'react'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    href?: string;
}

function FloatingButton({ href, children, ...props } : Props) {
    return (
        <a 
            {...props}
            href={href}
            className={`${props.className} p-2 text-sm focus:outline-none flex items-center justify-center w-12 h-12 z-10 cursor-pointer`}
        >
            { children }
        </a>
    )
}

export default FloatingButton