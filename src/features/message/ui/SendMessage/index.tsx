"use client"
import { Button } from "@/shared/ui/Button"
import { Input } from "@/shared/ui/Input"
import SendIcon from "@/shared/assets/send-icon.svg"
import { useSendMessageMutation } from "@/shared/api/message/messageApiHooks"
import { useOpenedChatSlice } from "@/shared/store/chat"
import { ChangeEvent, useCallback, useState } from "react"

export const SendMessage = () => {
    const chatId = useOpenedChatSlice.use.openedChatId()
    const [message, setMessage] = useState("")

    const { mutate } = useSendMessageMutation()

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }, [])

    return (
        <Input
            placeholder='Спроси о чем-нибудь...'
            onChange={onChange}
            value={message}
            button={
                <Button
                    onClick={() => {
                        mutate(
                            { chatId, message },
                            {
                                onSuccess: () => {
                                    setMessage("")
                                },
                            }
                        )
                    }}
                    background='variant-2'
                >
                    <SendIcon />
                </Button>
            }
        />
    )
}
