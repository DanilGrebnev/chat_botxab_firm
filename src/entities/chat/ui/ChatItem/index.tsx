"use client"

import { memo, useCallback } from "react"
import ChatIcon from "@/shared/assets/chat-icon.svg"
import s from "./chatItem.module.css"
import { Text } from "@/shared/ui/Text"
import { DeleteChatBtn } from "../DeleteChatBtn"
import cn from "@/shared/lib/cn"
import { useDeleteChatMutation } from "@/shared/api/chat/chatApiHooks"
import { useRouter } from "next/navigation"

interface ChatItemProps {
    disabled?: boolean
    className?: string
    name: string
    id: string
}

export const ChatItem = memo((props: ChatItemProps) => {
    const { disabled, id, name, className } = props

    const { mutate } = useDeleteChatMutation()
    const router = useRouter()

    const onClick = () => {
        router.push(`/${id}`)
    }

    const deleteChat = useCallback(() => {
        mutate(id)
    }, [mutate, id])

    return (
        <div className={cn(s.chat, { [s.disabled]: disabled }, className)}>
            <ChatIcon onClick={onClick} />
            <Text
                onClick={onClick}
                className={cn(s.text, "truncate")}
            >
                {name}
            </Text>
            <DeleteChatBtn
                onClick={deleteChat}
                className={s.delete}
            />
        </div>
    )
})

ChatItem.displayName = "ChatItem"
