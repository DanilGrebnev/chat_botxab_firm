"use client"

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
import { DynamicUserCard } from "@/entities/user/ui/UserCard/lazy"
import { useMediaQuery } from "@/shared/hooks/useMediaQuery"
import { useState } from "react"
import ArrowIcon from "@/shared/assets/arrow-icon.svg"

interface ChatSideBarProps {
    className?: string
}

export const ChatSideBar = (props: ChatSideBarProps) => {
    const [open, setOpen] = useState(false)
    const matches = useMediaQuery("(max-width: 767px)")

    const { className } = props
    return (
        <Box
            background={!open ? "transparent" : "standart"}
            padding='big'
            rounded={matches ? "0" : "3"}
            className={cn(s.sidebar, { [s.show]: open }, className)}
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
            <DynamicUserCard />
            {matches && (
                <div
                    onClick={() => setOpen((prev) => !prev)}
                    className={cn(s.btn_wrap, { [s.btn_open]: open })}
                >
                    <ArrowIcon
                        className={cn(s.showbtn, { [s.rotated]: open })}
                    />
                </div>
            )}
        </Box>
    )
}
