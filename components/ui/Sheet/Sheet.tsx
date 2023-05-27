import { FC, HTMLAttributes, forwardRef } from 'react'
import cn from '@/utils/cn';

type SheetProps = HTMLAttributes<HTMLDivElement>

const Sheet: FC<SheetProps> = forwardRef<HTMLDivElement, SheetProps>(({ className, ...props }, ref) => {
    return (
        <div ref={ref} className={cn('p-3 rounded-lg bg-neutral-300/5 backdrop-blur-xl', className)} {...props}/>
    )
})

Sheet.displayName = 'Sheet';

export default Sheet;