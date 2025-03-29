import DeleteIcon from "@/shared/assets/delete-icon.svg"
import s from "./chat-btn.module.css"
import cn from "@/shared/lib/cn"

interface DeleteChatBtnProps {
    className?: string
}

export const DeleteChatBtn = (props: DeleteChatBtnProps) => {
    const { className } = props

    return (
        <button className={cn(s.btn, className)}>
            <DeleteIcon />
        </button>
    )
}
