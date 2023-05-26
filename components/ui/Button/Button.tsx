import { cva } from 'class-variance-authority'
import { HTMLAttributes, forwardRef } from 'react'
import { VariantProps } from 'class-variance-authority'
import cn from "../../../utils/cn";
import { IconType } from "react-icons";

const buttonVariants = cva(
    "relative w-fit flex items-center justify-center rounded-full text-white font-semibold tracking-wide transition duration-200 ease-in-out focus:outline-none disabled:cursor-not-allowed disabled:opacity-90",
    {
        variants: {
            variant: {
                default: "bg-neutral-500/20 hover:bg-neutral-600/60 focus:ring-2 focus:ring-neutral-500/50",
                accent: "bg-accent-500/20 hover:bg-accent-600/60 focus:ring-2 focus:ring-accent-500/50",
                blue: "bg-blue-500/20 hover:bg-blue-600/60 focus:ring-2 focus:ring-blue-500/50",
                emerald: "bg-emerald-500/20 hover:bg-emerald-600/60 focus:ring-2 focus:ring-emerald-500/50",
                red: "bg-red-500/20 hover:bg-red-600/60 focus:ring-2 focus:ring-red-500/50",
                yellow: "bg-yellow-500/20 hover:bg-yellow-600/60 focus:ring-2 focus:ring-yellow-500/50",
                cyan: "bg-cyan-500/20 hover:bg-cyan-600/60 focus:ring-2 focus:ring-cyan-500/50",
                transparent: "bg-transparent hover:bg-neutral-500/20 focus:ring-2 focus:ring-neutral-500/50",
            },
            size: {
                small: "px-4 h-8 text-sm gap-2",
                medium: "px-4 h-12 text-base gap-2",
                large: "px-6 h-16 text-lg gap-2"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "medium"
        }
    }
);

const buttonIconVariants = cva(
    "",
    {
        variants: {
            variant: {
                default: "fill-neutral-100",
                accent: "fill-accent-500",
                blue: "fill-blue-500",
                emerald: "fill-emerald-500",
                red: "fill-red-500",
                yellow: "fill-yellow-500",
                cyan: "fill-cyan-500",
                active: "fill-neutral-100",
                transparent: "fill-neutral-100"
            },
            size: {
                small: "w-4 h-4",
                medium: "w-5 h-5",
                large: "w-6 h-6"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "medium"
        }
    }
)

interface ButtonProps extends HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
    href?: string
    iconLeft?: IconType,
    iconRight?: IconType,
}

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(({ children, iconLeft: IconL, iconRight: IconR, className, size, variant, ...props }, ref) => {
    return (
        <a
            ref={ref}
            className={cn(buttonVariants({ className, size, variant }))}
            {...props}
        >
            {IconL ? <IconL className={cn(buttonIconVariants({ size, variant }))} /> : null}
            {children}
            {IconR ? <IconR className={cn(buttonIconVariants({ size, variant }))} /> : null}
        </a>
    )
})

Button.displayName = "Button";

export { Button, buttonVariants, buttonIconVariants };