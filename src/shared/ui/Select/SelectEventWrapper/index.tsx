import { ReactNode } from "react"

interface SelectEventItemProps {
    onClick?: () => void
    children: ReactNode
}

/** Wrapper for the implementation of logic by choosing */
export const SelectEventWrapper = (props: SelectEventItemProps) => {
    const { children, onClick } = props

    return (
        <button
            type='button'
            onClick={onClick}
        >
            {children}
        </button>
    )
}
