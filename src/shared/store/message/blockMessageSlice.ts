import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { createSelectors } from "../autoCreateSelectors"

type Store = {
    isBlocking: boolean
}
type Action = {
    setIsBlocking: (value: boolean) => void
}

const useSendMessageBlockerBase = create<Store & Action>()(
    immer((set) => ({
        isBlocking: false,
        setIsBlocking: (value) =>
            set((s) => {
                s.isBlocking = value
            }),
    }))
)

export const useSendMessageBlocker = createSelectors(useSendMessageBlockerBase)
