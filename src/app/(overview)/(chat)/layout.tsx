import { ChatSideBar } from "@/widgets/ChatSideBar"
import { ReactNode } from "react"
import s from "./layout.module.css"

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <main className={s.page}>
            <ChatSideBar />
            {children}
        </main>
    )
}
