import { memo, ReactNode } from "react"
import s from "./select-item.module.css"
import cn from "@/shared/lib/cn"

interface SelectItemProps {
    children?: ReactNode
    id?: string
    active?: boolean
}

export const SelectItem = memo((props: SelectItemProps) => {
    const { children, active } = props

    return (
        <div className={cn(s.select_item, { [s.active]: active })}>
            {children}
        </div>
    )
})

SelectItem.displayName = "SelectItem"
