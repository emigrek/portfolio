import { cva } from 'class-variance-authority'
import { FC, forwardRef, HTMLAttributes, useEffect, useState } from 'react'
import { VariantProps } from 'class-variance-authority'
import cn from '@/utils/cn';

const navbarVariants = cva(
    "w-full absolute top-0 md:h-20 h-16 z-10 shadow-xl text-neutral-200",
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

interface NavbarProps extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarVariants> {}

const Navbar: FC<NavbarProps> = forwardRef<HTMLDivElement, NavbarProps>(({ className, variant, children, ...props }, ref) => {
    return (
        <nav
            ref={ref}
            className={cn(navbarVariants({ className, variant }))}
            {...props}
        >
            {children}
        </nav>
    )
})

Navbar.displayName = "Navbar";

export { Navbar, navbarVariants };