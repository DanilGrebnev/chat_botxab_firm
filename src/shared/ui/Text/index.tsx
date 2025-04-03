import { ComponentPropsWithRef, memo } from "react"
import { TAppliedTags, TColor, TFontSize, TFontWeight } from "./types"
import cn from "@/shared/lib/cn"
import s from "./text.module.css"
import MarkdownPreview from "@uiw/react-markdown-preview"
import { IBMFont } from "@/shared/fonts/IBMPlexSans"

type TText<T extends TAppliedTags> = {
    tag?: T
    fontSize?: TFontSize
    fontWeight?: TFontWeight
    color?: TColor
    markDown?: boolean
} & Omit<ComponentPropsWithRef<T>, "children"> & {
        children?: string
    }

export const Text = memo(<T extends TAppliedTags = "p">(props: TText<T>) => {
    const {
        tag = "p",
        fontSize = "130",
        fontWeight = "normal",
        color = "main",
        className,
        children,
        markDown = false,
        style,
        ...otherProps
    } = props

    const Tag = tag as any

    const createdClass = cn(
        s.text,
        s[`font-weight-${fontWeight}`],
        s[`color-${color}`],
        className
    )

    const createdStyle = { fontSize: `var(--font-${fontSize})`, ...style }

    if (markDown) {
        return (
            <MarkdownPreview
                source={children}
                style={createdStyle}
                className={cn(createdClass, s.markdown, IBMFont.className)}
            />
        )
    }

    return (
        <Tag
            style={createdStyle}
            className={createdClass}
            {...otherProps}
        >
            {children}
        </Tag>
    )
})

Text.displayName = "Text"
