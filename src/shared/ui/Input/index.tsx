"use client"

import cn from "@/shared/lib/cn"
import { Box } from "../Box"
import s from "./input.module.css"
import { ComponentPropsWithRef, memo, type ReactNode } from "react"

interface InputProps extends ComponentPropsWithRef<"input"> {
    className?: string
    button?: ReactNode
    sizes?: "s" | "m" | "l"
}

export const Input = memo((props: InputProps) => {
    const { button, sizes = "m", className, ...otherProps } = props

    return (
        <Box
            border
            className={cn(s.input_wrapper, s["size-" + sizes], className)}
        >
            <input
                {...otherProps}
                className={s.input}
            />
            {button}
        </Box>
    )
})

Input.displayName = "Input"
