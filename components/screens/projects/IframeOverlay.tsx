import cn from '@/utils/cn';
import { FC, HTMLAttributes } from 'react'

type IframeOverlayProps = HTMLAttributes<HTMLDivElement>;

const IframeOverlay: FC<IframeOverlayProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn("flex items-center justify-center backdrop-blur-sm bg-neutral-900/95 absolute right-0 w-full lg:w-[calc(100%-theme('spacing.64'))] lg:h-full md:h-[calc(100%-theme('spacing.20'))] h-[calc(100%-theme('spacing.16'))] lg:overflow-auto lg:rounded-2xl lg:border-4 lg:border-blue-500", className)} {...props}>
            { children }
        </div>
    )
}

export default IframeOverlay;