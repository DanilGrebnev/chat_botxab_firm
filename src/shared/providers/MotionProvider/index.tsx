"use client"
import { ReactNode } from "react"
import { LazyMotion, domAnimation } from "motion/react"

export const MotionProvider = ({ children }: { children: ReactNode }) => {
    return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
