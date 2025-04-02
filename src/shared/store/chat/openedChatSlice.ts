import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { createSelectors } from "../autoCreateSelectors"

type Store = { openedChatId: string }

type Actions = {
    setChatId: (chatId: string) => void
}

const useOpenedChatSliceBase = create<Store & Actions>()(
    immer((set) => ({
        openedChatId: "",
        setChatId: (chatId) =>
            set((state) => {
                state.openedChatId = chatId
            }),
    }))
)

export const useOpenedChatSlice = createSelectors(useOpenedChatSliceBase)
