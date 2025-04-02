import UserIcon from "@/shared/assets/user-icon.svg"
import s from "./s.module.css"
import cn from "@/shared/lib/cn"

interface UserProfileIconProps {
    className?: string
}

export const UserProfileIcon = (props: UserProfileIconProps) => {
    const { className } = props

    return (
        <div className={cn(s.icon_wrapper, className)}>
            <UserIcon />
        </div>
    )
}
