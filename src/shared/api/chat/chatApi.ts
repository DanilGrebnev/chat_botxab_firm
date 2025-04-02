import type {
    TGetChatListResponse,
    TGetChatResponse,
} from "@/shared/types/chat/chat"
import { api } from "../api"

class ChatApi {
    private baseUrl = "chat"

    getChatList = (searchParams: { page: number }) => {
        return api
            .get(this.baseUrl + "/list", { searchParams })
            .json<TGetChatListResponse>()
    }

    createChat = (json: { name: string }) => {
        return api.post(this.baseUrl, { json }).json()
    }

    getChat = (chatId: string) => {
        return api.get(this.baseUrl + "/" + chatId).json<TGetChatResponse>()
    }

    deleteChat = (chatId: string) => {
        return api.delete(this.baseUrl + "/" + chatId).json()
    }
}

export const chatApi = new ChatApi()
