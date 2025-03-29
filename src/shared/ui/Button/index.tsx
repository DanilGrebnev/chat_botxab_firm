import cn from "@/shared/lib/cn"
import { ComponentPropsWithRef } from "react"
import s from "./button-wrapper.module.css"

interface ButtonWrapperProps extends ComponentPropsWithRef<"button"> {
    className?: string
    variant?: "outlined"
    background?: "variant-1" | "variant-2" | "transparent"
}

export const Button = (props: ButtonWrapperProps) => {
    const { className, background = "varinat-1", variant, children } = props

    return (
        <button
            className={cn(
                s.btn,
                s[`variant-${variant}`],
                s[`background-${background}`],
                className
            )}
        >
            {children}
        </button>
    )
}
