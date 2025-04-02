import type { Metadata } from "next"
import "@/shared/styles/reset.css"
import "@/shared/styles/variables.css"
import "@/shared/styles/global.css"
import localFont from "next/font/local"
import { MainProvider } from "@/shared/providers/MainProvider"

const IBMFont = localFont({
    src: "../shared/fonts/IBMPlexSans.ttf",
})

export const metadata: Metadata = {
    title: "Test chat",
    description: "Test chat",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={IBMFont.className}>
                <MainProvider>{children}</MainProvider>
            </body>
        </html>
    )
}
