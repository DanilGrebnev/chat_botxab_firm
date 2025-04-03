import { Box } from "@/shared/ui/Box"
import s from "./chat-sidebar.module.css"
import { Logo } from "@/shared/ui/Logo"
import { SelectLang } from "@/shared/ui/SelectLang"
import { ChatList, ShowChatNameInputBtn } from "@/entities/chat"
import { Button } from "@/shared/ui/Button"
import SearchIcon from "@/shared/assets/search-icon.svg"
import cn from "@/shared/lib/cn"
import { CreateChatInput } from "@/features/chat"
import { Underline } from "@/shared/ui/Underline"
import { UserCard } from "@/entities/user"

interface ChatSideBarProps {
    className?: string
}

export const ChatSideBar = (props: ChatSideBarProps) => {
    const { className } = props
    return (
        <Box
            padding='big'
            rounded='3'
            className={cn(s.sidebar, className)}
        >
            <header>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Logo />
                    <SelectLang />
                </div>
                <div className={s.btn_group}>
                    <ShowChatNameInputBtn />
                    <Button variant='outlined'>
                        <SearchIcon />
                    </Button>
                </div>
                <CreateChatInput className={s.write_chat_name} />
                <Underline />
            </header>
            <ChatList className={s.chat_list} />
            <UserCard />
        </Box>
    )
}
