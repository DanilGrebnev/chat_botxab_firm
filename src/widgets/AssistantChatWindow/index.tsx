"use client"

import { MessageList } from "@/entities/message"
import { SendMessage } from "@/features/message"
import { Box } from "@/shared/ui/Box"
import { Container } from "@/shared/ui/Container"
import s from "./assistant-chat-window.module.css"
import { useOpenedChatSlice } from "@/shared/store/chat"
import { memo, useEffect } from "react"
import { useGetModelListQuery } from "@/shared/api/model/modelApiHooks"

interface AssistantChatWindowProps {
    chatId: string
}

export const AssistantChatWindow = memo(
    ({ chatId }: AssistantChatWindowProps) => {
        const setChatId = useOpenedChatSlice.use.setChatId()
        const { data } = useGetModelListQuery()

        useEffect(() => {
            console.log(data)
        }, [data])

        useEffect(() => {
            setChatId(chatId)
        }, [setChatId, chatId])

        return (
            <Box
                rounded='3'
                className={s.chat_bar}
            >
                <Container
                    size='m'
                    className={s.chat_bar_container}
                >
                    <MessageList
                        className={s.message_list}
                        chatId={chatId}
                    />
                    <SendMessage />
                </Container>
            </Box>
        )
    }
)

AssistantChatWindow.displayName = "AssistantChatWindow"
