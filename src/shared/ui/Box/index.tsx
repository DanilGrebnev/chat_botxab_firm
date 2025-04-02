import cn from "@/shared/lib/cn"
import { ComponentPropsWithRef } from "react"
import s from "./box.module.css"

export interface TBox extends ComponentPropsWithRef<"div"> {
    /**
     * @description
     * big: 16px;
     * normal: 12px;
     * small: 6px;
     */
    padding?: "xl" | "big" | "normal" | "small"
    border?: boolean
    background?: "standart" | 'secondary' | "opacity"
    rounded?: "1" | "2" | "3"
}

export const Box = (props: TBox) => {
    const {
        className,
        border = false,
        background = "standart",
        padding = "normal",
        rounded = "1",
        children,
    } = props

    return (
        <div
            className={cn(
                s.box,
                s[`padding-${padding}`],
                s[`background-${background}`],
                s[`rounded-${rounded}`],
                { [s.border]: border },
                className
            )}
        >
            {children}
        </div>
    )
}
