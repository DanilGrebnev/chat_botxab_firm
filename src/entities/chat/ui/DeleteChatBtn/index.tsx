import DeleteIcon from "@/shared/assets/delete-icon.svg"
import s from "./chat-btn.module.css"
import cn from "@/shared/lib/cn"
import { MouseEvent } from "react"

interface DeleteChatBtnProps {
    className?: string
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const DeleteChatBtn = (props: DeleteChatBtnProps) => {
    const { onClick, className } = props

    return (
        <button
            type='button'
            onClick={onClick}
            className={cn(s.btn, className)}
        >
            <DeleteIcon />
        </button>
    )
}
