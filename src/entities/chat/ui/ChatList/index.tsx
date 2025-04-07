"use client"

import cn from "@/shared/lib/cn"
import { ChatItem } from "../ChatItem"
import s from "./s.module.css"
import { useGetChatListQuery } from "@/shared/api/chat/chatApiHooks"
import { useOpenedChatSlice } from "@/shared/store/chat"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useIntersectionObserver } from "@/shared/hooks/useIntersectionObserver"

interface ChatListRenderProps {
    className?: string
}

export const ChatList = (props: ChatListRenderProps) => {
    const { className } = props
    const router = useRouter()
    const { data, fetchNextPage, hasNextPage } = useGetChatListQuery()
    const chatId = useOpenedChatSlice.use.openedChatId()
    const cursorRef = useIntersectionObserver(() => {
        try {
            if (hasNextPage) {
                fetchNextPage()
            }
        } catch (error) {
            console.error("Error fetching next page:", error)
        }
    })

    useEffect(() => {
        if (data) {
            router.push(`/${data[0]?.id}`)
        }
    }, [data, router])

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
            <div ref={cursorRef}/>
        </div>
    )
}
