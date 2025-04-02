"use client"
import { ReactNode } from "react"
import { MotionProvider } from "./MotionProvider"
import { TanstackQueryProvider } from "./TanstackQueryProvider"
import { ToasterProvider } from "./ToasterProvider"

export const MainProvider = ({ children }: { children: ReactNode }) => {
    return (
        <TanstackQueryProvider>
            <ToasterProvider>
                <MotionProvider>{children}</MotionProvider>
            </ToasterProvider>
        </TanstackQueryProvider>
    )
}
