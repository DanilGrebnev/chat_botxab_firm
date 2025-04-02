import { ChatList, ShowChatNameInputBtn } from "@/entities/chat"
import s from "./s.module.css"
import { Box } from "@/shared/ui/Box"
import { Logo } from "@/shared/ui/Logo"
import { Underline } from "@/shared/ui/Underline"
import { Button } from "@/shared/ui/Button"
import SearchIcon from "@/shared/assets/search-icon.svg"
import { SelectLang } from "@/shared/ui/SelectLang"
import { UserCard } from "@/entities/user"
import { MessageList } from "@/entities/message"
import { Container } from "@/shared/ui/Container"
import { SendMessage } from "@/features/message"
import { CreateChatInput } from "@/features/chat"

export const HomePage = () => {
    return (
        <section className={s.page}>
            <Box
                padding='big'
                rounded='2'
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
            <Box
                rounded='2'
                className={s.chat_bar}
            >
                <Container
                    size='m'
                    className={s.chat_bar_container}
                >
                    <MessageList className={s.message_list} />
                    <SendMessage />
                </Container>
            </Box>
        </section>
    )
}
