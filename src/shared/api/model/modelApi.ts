import { TGetModelListResponse } from "@/shared/types/model/model"
import { api } from "../api"

class ModelApi {
    baseUrl = "model"

    getModelList = () => {
        return api
            .get(this.baseUrl + "/list/compact", {
                searchParams: { parentId: "gpt" },
            })
            .json<TGetModelListResponse>()
    }
}

export const modelApi = new ModelApi()
