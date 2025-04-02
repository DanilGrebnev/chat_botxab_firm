import { createSelectors } from "@/shared/store/autoCreateSelectors"
import { create } from "zustand"

type State = {
    isOpenChat: boolean
}

type Actions = {
    setOpenChat: (open: boolean) => void
}

const useOpenChatSliceBase = create<State & Actions>((set) => ({
    isOpenChat: false,
    setOpenChat: (open) => set((state) => ({ ...state, isOpenChat: open })),
}))

export const useOpenChatSlice = createSelectors(useOpenChatSliceBase)
