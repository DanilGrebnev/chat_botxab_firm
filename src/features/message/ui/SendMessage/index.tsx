"use client"

import { Button } from "@/shared/ui/Button"
import { Input } from "@/shared/ui/Input"
import SendIcon from "@/shared/assets/send-icon.svg"
import { useSendMessageMutation } from "@/shared/api/message/messageApiHooks"
import { useOpenedChatSlice } from "@/shared/store/chat"
import { ChangeEvent, useCallback, useState } from "react"
import { SelectAlModel } from "@/shared/ui/SelectAlModel"
import { useSendMessageBlocker } from "@/shared/store/message"

export const SendMessage = () => {
    const chatId = useOpenedChatSlice.use.openedChatId()

    const [message, setMessage] = useState("")
    const { isBlocking, setIsBlocking } = useSendMessageBlocker()

    const { mutate, isPending } = useSendMessageMutation()

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }, [])

    return (
        <>
            <SelectAlModel />
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    if (isBlocking || isPending) return
                    setIsBlocking(true)
                    mutate(
                        { chatId, message },
                        {
                            onSuccess: () => {
                                setMessage("")
                            },
                        }
                    )
                }}
            >
                <Input
                    type='text'
                    placeholder='Спроси о чем-нибудь...'
                    onChange={onChange}
                    sizes='l'
                    value={message}
                    min={1}
                    required={true}
                    button={
                        <Button
                            background='variant-2'
                            type='submit'
                        >
                            <SendIcon />
                        </Button>
                    }
                />
            </form>
        </>
    )
}
