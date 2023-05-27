import cn from '@/utils/cn'
import { FC, HTMLAttributes } from 'react'
import { IconType } from 'react-icons'

interface DrawerItemProps extends HTMLAttributes<HTMLAnchorElement> {
    href?: string,
    active?: boolean,
    iconLeft?: IconType,
    iconRight?: IconType,
}

const DrawerItem: FC<DrawerItemProps> = ({ children, iconLeft: IconLeft, iconRight: IconRight, className, active, ...props }) => {
    return (
        <a
            className={cn("flex px-4 transition-all duration-300 hover:text-neutral-100 text-neutral-600 font-medium items-center gap-4 hover:bg-neutral-700/30 rounded-lg h-14", active ? "text-neutral-100 bg-neutral-700/50" : null, className)}
            {...props}
        >
            {IconLeft ? <IconLeft className={cn("w-6 h-6")} /> : null}
            {children}
            {IconRight ? <IconRight className={cn("w-6 h-6")} /> : null}
        </a>
    )
}

export default DrawerItem