import { Virtuoso, type VirtuosoHandle } from "react-virtuoso"
import { MessageAlItem } from "../MessageAlItem"
import { MessageUserItem } from "../MessageUserItem"
import s from "./message-render.module.css"
import { memo, useEffect, useRef } from "react"
import { TAssistantMessage, TUserMessage } from "@/shared/types/message/message"

type TMessage = (TUserMessage | TAssistantMessage)[]

interface MessageRenderProps<TData extends TMessage> {
    data: TData
    endReached?: () => void
    loading?: boolean
}

export const MessageRender = memo(
    <TData extends TMessage>(props: MessageRenderProps<TData>) => {
        const { data, endReached } = props
        const virtuoso = useRef<VirtuosoHandle>(null)

        useEffect(() => {
            if (!virtuoso.current) return
            const id = setTimeout(() => {
                virtuoso.current?.scrollToIndex({
                    index: data.length - 1,
                    align: "end",
                })
            }, 100)

            return () => {
                clearTimeout(id)
            }
        }, [data])

        return (
            <Virtuoso   
                increaseViewportBy={800}
                style={{ height: "100%", flexGrow: "1" }}
                data={data}
                ref={virtuoso}
                endReached={endReached}
                itemContent={(_, message) => {
                    if (!message) return
                    if (message?.role === "assistant") {
                        const { id, created_at, model_id, content, model } =
                            message

                        return (
                            <MessageAlItem
                                key={id}
                                label={model_id ?? "Assistant"}
                                created_at={created_at}
                                content={content}
                                className={s.padding}
                            />
                        )
                    } else {
                        const { content, id, created_at } = message

                        return (
                            <MessageUserItem
                                key={id}
                                content={content}
                                created_at={created_at}
                                className={s.padding}
                            />
                        )
                    }
                }}
            />
        )
    }
)

MessageRender.displayName = "MessageRender"
