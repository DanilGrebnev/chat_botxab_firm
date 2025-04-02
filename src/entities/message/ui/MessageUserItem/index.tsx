import CopyIcon from "@/shared/assets/copy-icon.svg"
import s from "./message-item.module.css"
import cn from "@/shared/lib/cn"
import { UserProfileIcon } from "@/shared/ui/UserProfileIcon"
import { Text } from "@/shared/ui/Text"
import { memo } from "react"
import { TBaseMessage } from "../../model/type"
import { getTime } from "@/shared/lib/getTime"

interface MessageUserItemProps extends TBaseMessage {
    className?: string
}

export const MessageUserItem = memo((props: MessageUserItemProps) => {
    const { content, created_at, className } = props

    return (
        <div className={cn(s.message, className)}>
            <CopyIcon className={s.copy_icon} />
            <div className={s.content}>
                <Text
                    fontSize='160'
                    className={s.text}
                >
                    {content}
                </Text>
                <Text className={s.time}>{getTime(created_at)}</Text>
            </div>
            <UserProfileIcon />
        </div>
    )
})

MessageUserItem.displayName = "MessageUserItem"
