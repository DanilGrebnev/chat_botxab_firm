import { memo } from "react"
import ChatIcon from "@/shared/assets/chat-icon.svg"
import s from "./chatItem.module.css"
import { Text } from "@/shared/ui/Text"
import { DeleteChatBtn } from "../DeleteChatBtn"

export const ChatItem = memo(() => {
    return (
        <div className={s.chat}>
            <ChatIcon />
            <Text>Новый чат</Text>
            <DeleteChatBtn />
        </div>
    )
})

ChatItem.displayName = "ChatItem"
