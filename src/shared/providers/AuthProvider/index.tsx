"use client"
import { useLayoutEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getUserLogin } from "@/shared/api/user/loginApi"

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [checked, setChecked] = useState(false)
    const router = useRouter()

    useLayoutEffect(() => {
        const isAuthenticated = getUserLogin()
        if (!isAuthenticated) {
            router.replace("/login")
        } else {
            setChecked(true)
        }
    }, [router])

    if (!checked) return null

    return <>{children}</>
}
