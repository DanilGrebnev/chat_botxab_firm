import { ReactNode } from "react"
import { MotionProvider } from "./MotionProvider"

export const MainProvider = ({ children }: { children: ReactNode }) => {
    return <MotionProvider>{children}</MotionProvider>
}
