import { cva } from 'class-variance-authority'
import { FC, forwardRef, HTMLAttributes, useEffect, useState } from 'react'
import { VariantProps } from 'class-variance-authority'
import cn from '@/utils/cn';

const drawerVariants = cva(
    "absolute left-0 top-0 bottom-0 h-full z-[10] bg-neutral-900 shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
    {
        variants: {
            open: {
                open: "w-56 md:w-64 px-2 py-2",
                closed: "w-0"
            }
        },
        defaultVariants: {
            open: "closed"
        }
    }
);

interface DrawerProps extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof drawerVariants> {
    onClickOutside?: () => void;
}

const Drawer: FC<DrawerProps> = forwardRef<HTMLDivElement, DrawerProps>(({ open, className, children, onClickOutside: handleClickOutside, ...props }, ref) => {
    return (
        <>
            <aside
                ref={ref}
                className={cn(drawerVariants({ className, open }))}
                {...props}
            >
                {
                    open === "open" ? children : null
                }
            </aside>
            {
                open === "open" ? <div className="fixed inset-0 z-[9] bg-black/80" onClick={handleClickOutside} /> : null
            }
        </>
    )
})

Drawer.displayName = "Drawer";

export { Drawer, drawerVariants };