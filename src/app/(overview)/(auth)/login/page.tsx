// export { LoginPage as default } from "@/views/auth"

import { AuthProvider } from "@/shared/providers/AuthProvider"
import { LoginPage } from "@/views/auth"

const Login = () => {
    return (
        <AuthProvider>
            <LoginPage />
        </AuthProvider>
    )
}

export { Login as default }
