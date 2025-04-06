"use client"
import { useLayoutEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useCheckAuth } from "@/shared/api/user/loginApiHooks"

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    const pathname = usePathname()
    const isLoginPage = pathname === "/login"
    const { isAuth, isLoading } = useCheckAuth()

    useLayoutEffect(() => {
        if (isLoading) {
            return
        }
        if (isAuth) {
            router.replace("/")
        } else {
            router.replace("/login")
        }
    }, [isAuth, router, isLoading])

    if (isLoading) return null
    if (isLoginPage && isAuth) {
        return null
    }
    if (!isLoginPage && !isAuth) {
        return null
    }

    return <>{children}</>
}
