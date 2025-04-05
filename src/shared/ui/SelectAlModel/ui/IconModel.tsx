import GPT from "@/shared/assets/gpt3.5-modal.svg"
import DallE from "@/shared/assets/gpt4-modal.svg"
import MidJ from "@/shared/assets/mj-white-modal.svg"
import cn from "@/shared/lib/cn"
import s from "./s.module.css"

type IconsProps = Pick<IconModelProps, "size"> & React.SVGProps<SVGSVGElement>
type IconModelProps = {
    icon: "ChatGPT" | "DALL-E" | "Midjourney"
    size?: "s" | "m"
    className?: string
}

const Icons = {
    ChatGPT: ({ className, size, ...otherProps }: IconsProps) => (
        <GPT
            className={cn(s[`size-${size}`], className)}
            {...otherProps}
        />
    ),
    "DALL-E": ({ className, size, ...otherProps }: IconsProps) => (
        <DallE
            className={cn(s[`size-${size}`], className)}
            {...otherProps}
        />
    ),
    Midjourney: ({ className, size, ...otherProps }: IconsProps) => (
        <MidJ
            className={cn(s[`size-${size}`], className)}
            {...otherProps}
        />
    ),
}

export const IconModel = ({ icon, size = "m", className }: IconModelProps) => {
    return <>{Icons[icon]({ size, className })}</>
}
