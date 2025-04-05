"use client"
import { ChatSideBar } from "@/widgets/ChatSideBar"
import { ReactNode } from "react"
import s from "./layout.module.css"
import { AuthProvider } from "@/shared/providers/AuthProvider"
import { useMediaQuery } from "@/shared/hooks/useMediaQuery"
import cn from "@/shared/lib/cn"

export default function Layout({ children }: { children: ReactNode }) {
    const matches = useMediaQuery("(max-width: 767px)")
    return (
        <main className={cn(s.page, { [s.mobile_page]: matches })}>
            <AuthProvider>
                <ChatSideBar />
                {children}
            </AuthProvider>
        </main>
    )
}
