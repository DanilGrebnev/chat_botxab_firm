"use client"

import cn from "@/shared/lib/cn"
import { Container } from "@/shared/ui/Container"
import { MessageRender } from "../MessageRender"
import { useEffect } from "react"
import {
    useGetAllMessageList,
    useGetAllMessageStream,
} from "@/shared/api/message/messageApiHooks"

interface MessageListProps {
    className?: string
    chatId: string
}

export const MessageList = (props: MessageListProps) => {
    const { className, chatId } = props

    // Если раскомментировать, то будет ошибка с вечным перерендером от virtuoso.
    // const chatId = useOpenedChatSlice.use.openedChatId()

    const { data, isPending } = useGetAllMessageList(chatId)

    const [messages, setMessages] = useGetAllMessageStream(chatId)

    // Инициализируем историю сообщений
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
