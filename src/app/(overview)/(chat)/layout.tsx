"use client"
import { ChatSideBar } from "@/widgets/ChatSideBar"
import { ReactNode } from "react"
import s from "./layout.module.css"
import { AuthProvider } from "@/shared/providers/AuthProvider"

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <main className={s.page}>
            <AuthProvider>
                <ChatSideBar />
                {children}
            </AuthProvider>
        </main>
    )
}
