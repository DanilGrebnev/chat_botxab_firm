import cn from "@/shared/lib/cn"
import s from "./message-al-item.module.css"
import GPTIcon from "@/shared/assets/gpt3.5.svg"
import { Text } from "@/shared/ui/Text"
import CopyIcon from "@/shared/assets/copy-icon.svg"
import { TBaseMessage } from "../../model/type"
import { getTime } from "@/shared/lib/getTime"
import { memo } from "react"

interface MessageAlItemProps extends TBaseMessage {
    className?: string
    label: string
}

export const MessageAlItem = memo((props: MessageAlItemProps) => {
    const { className, label, created_at, content } = props

    return (
        <div className={cn(s.message_container, className)}>
            <header className={s.header}>
                <Text fontSize='140'>{label}</Text>
                <div className={s.model}>
                    <Text fontSize='120'>gpt-3.5-turbo</Text>
                </div>
            </header>
            <section className={s.message_content}>
                <GPTIcon className={s.al_icon} />
                <Text fontSize='160'>{content}</Text>
                <footer className={s.footer}>
                    <div className={s.copy}>
                        <Text
                            color='secondary'
                            fontSize='140'
                        >
                            -223 CAPS
                        </Text>
                        <CopyIcon />
                    </div>
                    <Text className={s.time}>{getTime(created_at)}</Text>
                </footer>
            </section>
        </div>
    )
})

MessageAlItem.displayName = "MessageAlItem"
