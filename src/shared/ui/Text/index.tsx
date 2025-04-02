import { ComponentPropsWithRef } from "react"
import { TAppliedTags, TColor, TFontSize, TFontWeight } from "./types"
import cn from "@/shared/lib/cn"
import s from "./text.module.css"

type TText<T extends TAppliedTags> = {
    tag?: T
    fontSize?: TFontSize
    fontWeight?: TFontWeight
    color?: TColor
} & Omit<ComponentPropsWithRef<T>, "children"> & {
        children?: string
    }

export const Text = <T extends TAppliedTags = "p">(props: TText<T>) => {
    const {
        tag = "p",
        fontSize = "130",
        fontWeight = "normal",
        color = "main",
        className,
        children,
        style,
        ...otherProps
    } = props

    const Tag = tag as any

    return (
        <Tag
            style={{ fontSize: `var(--font-${fontSize})`, ...style }}
            className={cn(
                s.text,
                s[`font-weight-${fontWeight}`],
                s[`color-${color}`],
                className
            )}
            {...otherProps}
        >
            {children}
        </Tag>
    )
}
