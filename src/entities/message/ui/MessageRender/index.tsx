import { Virtuoso, type VirtuosoHandle } from "react-virtuoso"
import { MessageAlItem } from "../MessageAlItem"
import { MessageUserItem } from "../MessageUserItem"
import s from "./message-render.module.css"
import { useRef } from "react"

interface MessageRenderProps<TData extends any[]> {
    data: TData
    endReached?: () => void
    loading?: boolean
}

export const MessageRender = <TData extends any[]>(
    props: MessageRenderProps<TData>
) => {
    const { data, endReached } = props
    const virtuoso = useRef<VirtuosoHandle>(null)

    return (
        <Virtuoso
            style={{ height: "100%", flexGrow: "1" }}
            data={data}
            ref={virtuoso}
            endReached={endReached}
            itemContent={(_, message) => {
                if (!message) return
                if (message?.role === "assistant") {
                    const { id, created_at, content, model } = message
                    return (
                        <MessageAlItem
                            key={id}
                            label={model.label}
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
