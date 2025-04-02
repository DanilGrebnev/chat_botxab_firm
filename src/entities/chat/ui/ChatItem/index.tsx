"use client"

import { memo, useCallback } from "react"
import ChatIcon from "@/shared/assets/chat-icon.svg"
import s from "./chatItem.module.css"
import { Text } from "@/shared/ui/Text"
import { DeleteChatBtn } from "../DeleteChatBtn"
import cn from "@/shared/lib/cn"
import { useOpenedChatSlice } from "@/shared/store/chat"
import { useDeleteChatMutation } from "@/shared/api/chat/chatApiHooks"

interface ChatItemProps {
    disabled?: boolean
    className?: string
    name: string
    id: string
}

export const ChatItem = memo((props: ChatItemProps) => {
    const { disabled, id, name, className } = props

    const { mutate } = useDeleteChatMutation()

    const setChatId = useOpenedChatSlice.use.setChatId()

    const onClick = () => {
        setChatId(id)
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
