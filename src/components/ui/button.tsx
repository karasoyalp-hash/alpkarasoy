import * as React from "react"
import { cn } from "@/lib/utils"

export type ButtonVariant = "default" | "outline" | "ghost" | "secondary"
export type ButtonSize = "default" | "sm" | "lg" | "icon"

export function getButtonClasses(variant: ButtonVariant = "default", size: ButtonSize = "default", className?: string) {
    return cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
            "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-14 rounded-full px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
        },
        className
    )
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
    size?: ButtonSize
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={getButtonClasses(variant, size, className)}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
