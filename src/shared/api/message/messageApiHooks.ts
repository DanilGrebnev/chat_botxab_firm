import { messageApi } from "./messageApi"
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query"
import { messageApiKeys } from "./messageApiKeys"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { fetchEventSource } from "@microsoft/fetch-event-source"
import { consts } from "@/shared/consts"
import { TAssistantMessage, TUserMessage } from "@/shared/types/message/message"

export const useGetMessageListQuery = (chatId: string) => {
    return useInfiniteQuery({
        queryKey: [messageApiKeys.getMessageList(chatId)],

        queryFn: ({ pageParam }) => {
            if (!pageParam.chatId) return
            return messageApi.getMessageList(pageParam)
        },
        getNextPageParam: (lastPage, __, lastPageParam) => {
            if (!lastPage?.data.length) return

            return { ...lastPageParam, page: lastPageParam.page + 1 }
        },
        getPreviousPageParam: (_, __, lastPageParam) => {
            if (lastPageParam.page === 1) return lastPageParam
            return { ...lastPageParam, page: lastPageParam.page - 1 }
        },
        select: ({ pages }) => pages.flatMap((page) => page?.data).reverse(),
        initialPageParam: { chatId, page: 1 },
        enabled: !!chatId,
    })
}

export const useGetAllMessageList = (chatId: string) => {
    return useQuery({
        queryFn: () => messageApi.getAllMessageList({ chatId }),
        select: (data) =>
            data.sort(
                (a, b) =>
                    new Date(a.created_at).getTime() -
                    new Date(b.created_at).getTime()
            ),
        queryKey: [messageApiKeys.getAllMessageList(chatId)],
        enabled: !!chatId,
    })
}

export const useSendMessageMutation = () => {
    return useMutation({
        mutationFn: messageApi.sendMessage,
    })
}

export const useGetAllMessageStream = (chatId: string) => {
    interface TSmallMessage {
        content: string
        id: string
    }
    type SSE_EVENTS =
        | "MESSAGE_UPDATE"
        | "MESSAGE_CREATE"
        | "UPDATE"
        | "JOB_UPDATE"
        | "JOB_DONE"
        | "TRANSACTION_CREATE"

    interface TMessageEventData {
        name: SSE_EVENTS
        data: { message: TAssistantMessage | TUserMessage | TSmallMessage }
    }

    type TMessageStore = (TUserMessage | TAssistantMessage)[]

    const [messages, setMessages] = useState<TMessageStore>([])

    useEffect(() => {
        if (!chatId) return
        const controller = new AbortController()

        fetchEventSource(consts.BASE_FETCH_URL + `/chat/${chatId}/stream`, {
            method: "GET",
            headers: {
                [consts.API_AUTH_HEADER as string]:
                    consts.AUTH_API_TOKEN as string,
            },

            onmessage(messageEvent) {
                const eventData = JSON.parse(
                    messageEvent.data
                ) as TMessageEventData

                const m = eventData?.data?.message

                if (eventData.name === "MESSAGE_CREATE") {
                    setMessages((p) => [
                        ...p,
                        { ...m, content: "Печатает..." } as
                            | TAssistantMessage
                            | TUserMessage,
                    ])
                }

                if (eventData.name === "MESSAGE_UPDATE") {
                    setMessages((p) =>
                        p.map((message) => {
                            if (m.content) {
                                if (message.id === m.id) {
                                    message.content = m.content
                                }
                            }

                            return message
                        })
                    )
                }
            },
            signal: controller.signal,
        })

        return () => controller.abort()
    }, [chatId])

    return [messages, setMessages] as [
        TMessageStore,
        Dispatch<SetStateAction<TMessageStore>>
    ]
}
