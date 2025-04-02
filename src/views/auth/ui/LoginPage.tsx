import { AuthForm } from "@/features/auth/ui/AuthForm"

import s from './s.module.css'

export const LoginPage = () => {
    return (
        <div className={s.container}>
            <AuthForm />
        </div>
    )
}
