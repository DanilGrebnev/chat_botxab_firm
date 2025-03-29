import { ChatItem } from "../ChatItem"
import s from "./s.module.css"

export const ChatListRender = () => {
    const mock = new Array(10).fill("")

    return (
        <div className={s.list}>
            {mock.map((el, i) => (
                <ChatItem key={i} />
            ))}
        </div>
    )
}
