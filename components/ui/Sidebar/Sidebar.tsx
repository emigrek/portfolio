import { cva } from 'class-variance-authority'
import { FC, forwardRef, HTMLAttributes } from 'react'
import { VariantProps } from 'class-variance-authority'
import cn from '@/utils/cn';

const sidebarVariants = cva(
    "h-screen bg-neutral-900 shadow-lg transition-all duration-300 ease-in-out overflow-hidden text-neutral-200",
    {
        variants: {
            variant: {
                transparent: "bg-transparent",
                blue: "bg-blue-500",
            }
        },
        defaultVariants: {
            variant: "transparent"
        }
    }
);

interface SidebarProps extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
}

const Sidebar: FC<SidebarProps> = forwardRef<HTMLDivElement, SidebarProps>(({ variant, className, children, ...props }, ref) => {
    return (
        <aside
            ref={ref}
            className={cn(sidebarVariants({ className, variant }))}
            {...props}
        >
            {
                children
            }
        </aside>
    )
})

Sidebar.displayName = "Sidebar";

export { Sidebar, sidebarVariants };