"use client"

import cn from "@/shared/lib/cn"
import { ComponentPropsWithRef, memo } from "react"
import s from "./button-wrapper.module.css"

interface ButtonWrapperProps extends ComponentPropsWithRef<"button"> {
    className?: string
    variant?: "outlined"
    background?: "variant-1" | "variant-2" | "transparent"
    size?: "s" | "m"
    fullWidth?: boolean
}

export const Button = memo((props: ButtonWrapperProps) => {
    const {
        size = "s",
        fullWidth,
        background = "varinat-1",
        variant,
        children,
        className,
        ...otherProps
    } = props

    return (
        <button
            className={cn(
                s.btn,
                s[`variant-${variant}`],
                s[`background-${background}`],
                s[`size-${size}`],
                { [s.full_width]: fullWidth },
                className
            )}
            {...otherProps}
        >
            {children}
        </button>
    )
})

Button.displayName = "Button"
