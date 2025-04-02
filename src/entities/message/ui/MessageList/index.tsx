"use client"

import cn from "@/shared/lib/cn"
import { Container } from "@/shared/ui/Container"
import { useOpenedChatSlice } from "@/shared/store/chat"
import { MessageRender } from "../MessageRender"
import { fetchEventSource } from "@microsoft/fetch-event-source"
import { consts } from "@/shared/consts"
import { useEffect, useState } from "react"

interface MessageListProps {
    className?: string
}

type SSE_EVENTS =
    | "MESSAGE_UPDATE"
    | "UPDATE"
    | "JOB_UPDATE"
    | "JOB_DONE"
    | "HOB_CREATE"
    | "TRANSACTION_CREATE"

export const MessageList = (props: MessageListProps) => {
    const { className } = props

    const chatId = useOpenedChatSlice.use.openedChatId()
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (!chatId) return
        const eventSource = fetchEventSource(
            consts.BASE_FETCH_URL + `/chat/${chatId}/stream`,
            {
                method: "GET",
                headers: {
                    [consts.API_AUTH_HEADER as string]:
                        consts.AUTH_API_TOKEN as string,
                },
                onmessage(message) {
                    // setMessages(message)
                    console.log("sse message")
                    console.log(JSON.parse(message.data))
                },
            }
        )
    }, [chatId])

    useEffect(() => {
        console.log(messages)
    }, [messages])

    return (
        <Container
            size='m'
            className={cn(className)}
        >
            {messages?.length && (
                <MessageRender
                    data={messages}
                    // endReached={fetchNextPage}
                />
            )}
        </Container>
    )
}
