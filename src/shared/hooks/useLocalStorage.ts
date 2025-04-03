import { useCallback, useEffect, useState } from "react"

export const useSyncLocalStorage = <T = any>(key: string) => {
    const [state, setState] = useState(() =>
        JSON.parse(localStorage.getItem(key) ?? "")
    )

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    const setItemToLS = useCallback((v: T) => {
        setState(v)
    }, [])

    return [state, setItemToLS] as [T, typeof setItemToLS]
}
