import { AnimatePresence } from "motion/react"
import { ComponentPropsWithRef, ReactNode } from "react"
import * as m from "motion/react-m"
import { useId } from "react"
interface AnimateShowWrapperProps extends ComponentPropsWithRef<"div"> {
    children?: ReactNode
    show?: boolean
    className?: string
}

export const AnimateShowWrapper = (props: AnimateShowWrapperProps) => {
    const { ref, children, show, className } = props
    const id = useId()

    return (
        <AnimatePresence>
            {show && (
                <m.div
                    key={id}
                    ref={ref}
                    className={className}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                >
                    {children}
                </m.div>
            )}
        </AnimatePresence>
    )
}
