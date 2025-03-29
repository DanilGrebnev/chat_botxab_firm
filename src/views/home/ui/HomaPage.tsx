"use client"

import { ChatListRender } from "@/entities/chat"
import s from "./s.module.css"
import { Box } from "@/shared/ui/Box"
import { Logo } from "@/shared/ui/Logo"
import { Underline } from "@/shared/ui/Underline"
import { Button } from "@/shared/ui/Button"
import CreateChatIcon from "@/shared/assets/add-chat-icon.svg"
import SearchIcon from "@/shared/assets/search-icon.svg"
import { SelectLang } from "@/shared/ui/SelectLang"

export const HomePage = () => {
    return (
        <section className={s.page}>
            <Box
                padding='big'
                className={s.sidebar}
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
                        <Button
                            variant='outlined'
                            background='variant-1'
                        >
                            <CreateChatIcon />
                        </Button>
                        <Button variant='outlined'>
                            <SearchIcon />
                        </Button>
                    </div>
                    <Underline />
                </header>
                <div className={s.chat_items_list}></div>
                <ChatListRender />
            </Box>
            <Box className={s.chat_bar}></Box>
        </section>
    )
}
