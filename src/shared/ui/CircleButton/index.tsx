import { useState, useRef, ComponentPropsWithRef } from "react"
import s from "./s.module.css"
import cn from "@/shared/lib/cn"

interface CircleButtonProps extends ComponentPropsWithRef<"button"> {
    children: React.ReactNode
    btnSize?: "s" | "m"
}

export const CircleButton: React.FC<CircleButtonProps> = (props) => {
    const { className, children, btnSize = "s", ...otherProps } = props

    const [ripples, setRipples] = useState<
        Array<{ id: number; x: number; y: number; size: number }>
    >([])
    const buttonRef = useRef<HTMLButtonElement>(null)
    const rippleId = useRef(0)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget
        const rect = button.getBoundingClientRect()

        const x = rect.width / 2
        const y = rect.height / 2
        const size = Math.max(rect.width, rect.height)

        const id = rippleId.current++
        setRipples((prev) => [...prev, { id, x, y, size }])

        const timer = setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== id))
        }, 600)

        if (props.onClick) {
            props.onClick(e)
        }
        return () => clearTimeout(timer)
    }

    return (
        <button
            ref={buttonRef}
            className={cn(s.button, s[`size-${btnSize}`], className)}
            {...otherProps}
            onClick={handleClick}
        >
            {children}
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className={s.ripple}
                    style={{
                        left: ripple.x - ripple.size / 2,
                        top: ripple.y - ripple.size / 2,
                        width: ripple.size,
                        height: ripple.size,
                    }}
                />
            ))}
        </button>
    )
}
