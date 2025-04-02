"use client"

import cn from "@/shared/lib/cn"
import { ChatItem } from "../ChatItem"
import s from "./s.module.css"
import { useGetChatListQuery } from "@/shared/api/chat/chatApiHooks"
import { useOpenedChatSlice } from "@/shared/store/chat"

interface ChatListRenderProps {
    className?: string
}

export const ChatList = (props: ChatListRenderProps) => {
    const { className } = props
    const { data } = useGetChatListQuery()
    const chatId = useOpenedChatSlice.use.openedChatId()

    return (
        <div className={cn(s.list, className)}>
            <div className={s.wrapper}>
                {data?.map(({ name, id }) => {
                    return (
                        <ChatItem
                            key={id}
                            id={id}
                            disabled={chatId !== id}
                            name={name}
                        />
                    )
                })}
            </div>
        </div>
    )
}
