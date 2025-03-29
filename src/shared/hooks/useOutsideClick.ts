import { useEffect, useLayoutEffect, useRef } from "react"

interface TUseOutsideClick {
    handler: () => void
    attached?: boolean
}

/**
 * @param handler функция, вызываемая при клике вне nodeRef
 * @param attached если false, то вся логика не будет работать. К примеру,
 * если в attached передать флаг isOpen, и он будет равен false,
 * то обработчик события не будет вешаться на документ, а текущий обработчик события будет удалён
 */
export const useOutsideClick = ({
    handler,
    attached = true,
}: TUseOutsideClick) => {
    const nodeRef = useRef<any>(null)
    const handlerRef = useRef<any>(null)

    useLayoutEffect(() => {
        handlerRef.current = handler
    }, [handler])

    useEffect(() => {
        if (!attached) return

        const handleClick = (e: any) => {
            const target = e.target as Node

            if (!nodeRef?.current || !target.isConnected) return
            if (!nodeRef?.current.contains(target)) {
                handlerRef.current?.()
            }
        }

        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return
            handlerRef.current?.()
        }

        document.addEventListener("click", handleClick)
        document.addEventListener("keydown", handleKeydown)

        return () => {
            document.removeEventListener("click", handleClick)
            document.removeEventListener("keydown", handleKeydown)
        }
    }, [nodeRef, attached])

    return { nodeRef }
}
