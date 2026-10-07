import cn from '@/utils/cn';
import { FC, HTMLAttributes } from 'react'

type IframeOverlayProps = HTMLAttributes<HTMLDivElement>;

const IframeOverlay: FC<IframeOverlayProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn("absolute inset-0 flex items-center justify-center overflow-auto backdrop-blur-sm bg-black/95", className)} {...props}>
            { children }
        </div>
    )
}

export default IframeOverlay;
