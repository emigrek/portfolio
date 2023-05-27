import cn from '@/utils/cn'
import { FC, HTMLAttributes } from 'react'
import { IconType } from 'react-icons'

interface NavbarItemProps extends HTMLAttributes<HTMLAnchorElement> {
    href?: string,
    active?: boolean,
    iconLeft?: IconType,
    iconRight?: IconType,
}

const NavbarItem: FC<NavbarItemProps> = ({ children, iconLeft: IconLeft, iconRight: IconRight, className, active, ...props }) => {
    return (
        <a
            className={cn("flex transition-all duration-300 hover:text-neutral-100 font-medium items-center gap-2 text-neutral-600", active ? "text-neutral-100" : null, className)}
            {...props}
        >
            {IconLeft ? <IconLeft className={cn("w-6 h-6")} /> : null}
            {children}
            {IconRight ? <IconRight className={cn("w-6 h-6")} /> : null}
        </a>
    )
}

export default NavbarItem