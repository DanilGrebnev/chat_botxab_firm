import {
    useInfiniteQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query"
import { chatApi } from "./chatApi"
import { chatKeys } from "./chatKeys"

export const useGetChatListQuery = () => {
    return useInfiniteQuery({
        queryFn: ({ pageParam }) => chatApi.getChatList(pageParam),
        queryKey: [chatKeys.getChatList],
        getNextPageParam: (lastPage, __, lastPageParam) => {
            if (!lastPage.data.length) return
            return { ...lastPageParam, page: lastPageParam.page + 1 }
        },
        getPreviousPageParam: (_, __, lastPageParam) => {
            if (lastPageParam.page === 1) return
            return { ...lastPageParam, page: lastPageParam.page - 1 }
        },
        select: (data) => data.pages.flatMap((page) => page.data).reverse(),
        initialPageParam: { page: 1 },
    })
}

export const useCreateChatMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: chatApi.createChat,
        onSuccess: async () => {
            await client.invalidateQueries({ queryKey: [chatKeys.getChatList] })
        },
    })
}

export const useDeleteChatMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: chatApi.deleteChat,
        onSuccess: async () => {
            await client.invalidateQueries({ queryKey: [chatKeys.getChatList] })
        },
    })
}
