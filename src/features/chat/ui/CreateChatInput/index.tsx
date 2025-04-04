"use client"

import { z } from "zod"
import { Input } from "@/shared/ui/Input"
import SendIcon from "@/shared/assets/send-icon.svg"
import { AnimateShowWrapper } from "@/shared/ui/AnimateShowWrapper"
import { Button } from "@/shared/ui/Button"
import { useCreateChatMutation } from "@/shared/api/chat/chatApiHooks"
import { FormEvent, useState } from "react"
import { useOutsideClick } from "@/shared/hooks/useOutsideClick"
import toast from "react-hot-toast"
import cn from "@/shared/lib/cn"
import { useOpenChatSlice } from "@/entities/chat"

interface WriteChatNameInputProps {
    className?: string
}

export const CreateChatInput = (props: WriteChatNameInputProps) => {
    const { className } = props
    const isOpenChat = useOpenChatSlice.use.isOpenChat()
    const setOpenChat = useOpenChatSlice.use.setOpenChat()
    const [name, setName] = useState("")

    const nameSchema = z.string().min(1)

    const { nodeRef } = useOutsideClick({
        handler: () => setOpenChat(false),
        attached: isOpenChat,
    })

    const { mutateAsync, isPending } = useCreateChatMutation()

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const parseResult = nameSchema.safeParse(name)
        if (!parseResult.success) {
            toast.error("Название чата не может быть пустым")
            return
        }
        await toast.promise(() => mutateAsync({ name }), {
            loading: "Создание чата",
            success: () => {
                setName("")
                setOpenChat(false)
                return "Чат создан"
            },
            error: "Ошибка создания чата",
        })
    }

    return (
        <AnimateShowWrapper
            ref={nodeRef}
            className={className}
            show={isOpenChat}
        >
            <form onSubmit={onSubmit}>
                <Input
                    sizes='s'
                    value={name}
                    placeholder='Введите название чата'
                    onChange={(e) => setName(e.target.value)}
                    button={
                        <Button
                            type='submit'
                            className={cn({ ["disabled"]: isPending })}
                        >
                            <SendIcon />
                        </Button>
                    }
                />
            </form>
        </AnimateShowWrapper>
    )
}
