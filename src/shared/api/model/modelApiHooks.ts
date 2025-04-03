import { useQuery } from "@tanstack/react-query"
import { modelApi } from "./modelApi"
import { modelApiKeys } from "./modelApiKeys"

export const useGetModelListQuery = () => {
    return useQuery({
        queryFn: modelApi.getModelList,
        queryKey: [modelApiKeys.getAllModel],
    })
}
