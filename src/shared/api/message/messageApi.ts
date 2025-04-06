import {
    TCreateMessageDTO,
    TGetAllMessageListResponse,
    TGetMessageListResponse,
} from "@/shared/types/message/message"
import { api } from "../api"

class MessageApi {
    private baseUrl = "message/"

    getMessageList = (searchParams: { chatId: string; page: number }) => {
        return api
            .get(this.baseUrl + "list", {
                searchParams,
            })
            .json<TGetMessageListResponse>()
    }

    getAllMessageList = (searchParams: { chatId: string }) => {
        return api
            .get(this.baseUrl + "list-all", { searchParams })
            .json<TGetAllMessageListResponse>()
    }

    sendMessage = (message: TCreateMessageDTO) => {
        return api.post(this.baseUrl + "send", { json: message}).json()
    }
}

export const messageApi = new MessageApi()
