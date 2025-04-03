"use client"

import cn from "@/shared/lib/cn"
import { Container } from "@/shared/ui/Container"
import { MessageRender } from "../MessageRender"
import { fetchEventSource } from "@microsoft/fetch-event-source"
import { consts } from "@/shared/consts"
import { useDeferredValue, useEffect, useState } from "react"
import { TAssistantMessage, TUserMessage } from "@/shared/types/message/message"
import { useGetAllMessageList } from "@/shared/api/message/messageApiHooks"
import { useOpenedChatSlice } from "@/shared/store/chat"
import { useQueryClient, QueryClient } from "@tanstack/react-query"
import { messageKeys } from "@/shared/api/message/messageKey"
import { useGetAllMessageStream } from "../../../../shared/api/message/messageApiHooks"

interface MessageListProps {
    className?: string
    chatId: string
}

type SSE_EVENTS =
    | "MESSAGE_UPDATE"
    | "MESSAGE_CREATE"
    | "UPDATE"
    | "JOB_UPDATE"
    | "JOB_DONE"
    | "TRANSACTION_CREATE"

interface TSmallMessage {
    content: string
    id: string
}

interface TMessageEventData {
    name: SSE_EVENTS
    data: { message: TAssistantMessage | TUserMessage | TSmallMessage }
}

type TMessageStore = (TUserMessage | TAssistantMessage)[]

export const MessageList = (props: MessageListProps) => {
    const { className, chatId } = props

    // Если раскомментировать, то будет ошибка с вечным перерендером от virtuoso.
    // const chatId = useOpenedChatSlice.use.openedChatId()

    const { data, isPending } = useGetAllMessageList(chatId)

    const [messages, setMessages] = useGetAllMessageStream(chatId)

    // Инициализируем историю сообщений в store
    useEffect(() => {
        if (isPending || !data?.length) return
        setMessages(data)
    }, [data, isPending, setMessages])

    return (
        <Container
            size='m'
            className={cn(className)}
        >
            {!!messages?.length && <MessageRender data={messages} />}
        </Container>
    )
}
