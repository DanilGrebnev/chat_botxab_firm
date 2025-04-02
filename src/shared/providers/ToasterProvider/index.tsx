import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"

export const ToasterProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {children}
            <Toaster
                toastOptions={{
                    className: "",
                    style: {
                        border: "1px solid var(--palette-4)",
                        background: "var(--palette-9)",
                        color: "var(--palette-7)",
                    },
                }}
            />
        </>
    )
}
