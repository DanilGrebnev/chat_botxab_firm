"use client"

import { Button } from "@/shared/ui/Button"
import CreateChatIcon from "@/shared/assets/add-chat-icon.svg"
import { useOpenChatSlice } from "../../model/store/openChatSlice"
import { useCallback } from "react"

export const ShowChatNameInputBtn = () => {
    const setOpenChat = useOpenChatSlice.use.setOpenChat()
    const isOpenChat = useOpenChatSlice.use.isOpenChat()

    const onClick = useCallback(() => {
        if (isOpenChat) {
            setOpenChat(false)
        } else {
            setOpenChat(true)
        }
    }, [isOpenChat, setOpenChat])

    return (
        <Button
            variant='outlined'
            background='variant-1'
            onClick={onClick}
        >
            <CreateChatIcon />
        </Button>
    )
}
