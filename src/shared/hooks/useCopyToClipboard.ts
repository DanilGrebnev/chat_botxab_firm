import { useCallback, useState } from "react"

export const useCopyToClipboard = () => {
    const [copiedText, setCopiedText] = useState<string | null>(null)

    type TCopyText = (
        text: string,
        args?: { succes?: () => void; error?: (err: any) => void }
    ) => void

    const copyText: TCopyText = useCallback(
        (
            text: string,
            args?: { succes?: () => void; error?: (err: any) => void }
        ) => {
            navigator.clipboard
                .writeText(text)
                .then(() => {
                    setCopiedText(text)
                    args?.succes?.()
                })
                .catch(args?.error)
        },
        []
    )

    return [copiedText, copyText] as [string | null, TCopyText]
}
