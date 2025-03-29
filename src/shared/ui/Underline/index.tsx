import cn from "@/shared/lib/cn"
import s from "./underline.module.css"

interface TUnderlineProps {
    className?: string
}

export const Underline = (props: TUnderlineProps) => {
    return <div className={cn(s.underline, props.className)}></div>
}
