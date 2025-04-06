import {
    useInfiniteQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query"
import { chatApi } from "./chatApi"
import { chatApiKeys } from "./chatApiKeys"

export const useGetChatListQuery = () => {
    return useInfiniteQuery({
        queryFn: ({ pageParam }) => chatApi.getChatList(pageParam),
        queryKey: [chatApiKeys.getChatList],
        getNextPageParam: (lastPage, __, lastPageParam) => {
            if (!lastPage.data.length) return
            return { ...lastPageParam, page: lastPageParam.page + 1 }
        },
        getPreviousPageParam: (_, __, lastPageParam) => {
            if (lastPageParam.page === 1) return
            return { ...lastPageParam, page: lastPageParam.page - 1 }
        },
        select: (data) => data.pages.flatMap((page) => page.data).sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()),
        initialPageParam: { page: 1 },
    })
}

export const useCreateChatMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: chatApi.createChat,
        onSuccess: async () => {
            await client.invalidateQueries({
                queryKey: [chatApiKeys.getChatList],
            })
        },
    })
}

export const useDeleteChatMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: chatApi.deleteChat,
        onSuccess: async () => {
            await client.invalidateQueries({
                queryKey: [chatApiKeys.getChatList],
            })
        },
    })
}
