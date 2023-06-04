import { cva } from 'class-variance-authority'
import { FC, forwardRef, HTMLAttributes } from 'react'
import { VariantProps } from 'class-variance-authority'
import cn from '@/utils/cn';

const drawerVariants = cva(
    "absolute left-0 top-0 bottom-0 h-screen z-10 shadow-lg transition-all duration-300 ease-in-out overflow-hidden text-neutral-200",
    {
        variants: {
            open: {
                open: "w-64 px-2 py-2",
                closed: "w-0"
            },
            variant: {
                neutral: "bg-neutral-900",
                blue: "bg-blue-500",
            }
        },
        defaultVariants: {
            open: "closed",
            variant: "neutral"
        }
    }
);

interface DrawerProps extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof drawerVariants> {
    onClickOutside?: () => void;
}

const Drawer: FC<DrawerProps> = forwardRef<HTMLDivElement, DrawerProps>(({ open, variant, className, children, onClickOutside: handleClickOutside, ...props }, ref) => {
    return (
        <>
            <aside
                ref={ref}
                className={cn(drawerVariants({ className, open, variant }))}
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