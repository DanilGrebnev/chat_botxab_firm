import { ComponentPropsWithRef } from "react"
import s from "./container.module.css"
import { type AllHTMLTags } from "@/shared/types/AllHTMLTags"
import cn from "@/shared/lib/cn"

type ContainerProps<T extends AllHTMLTags> = {
    component?: T
    size?: "m"
} & ComponentPropsWithRef<T>

export const Container = <T extends AllHTMLTags>(props: ContainerProps<T>) => {
    const {
        component = "div",
        size = "m",
        children,
        className,
        ...otherProps
    } = props

    const Tag = component as any

    return (
        <Tag
            {...otherProps}
            className={cn(s.container, s[size], className)}
        >
            {children}
        </Tag>
    )
}
