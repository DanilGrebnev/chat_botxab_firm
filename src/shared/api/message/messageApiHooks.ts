import { messageApi } from "./messageApi"
import {
    useInfiniteQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query"
import { messageKeys } from "./messageKey"

export const useGetMessageListQuery = (chatId: string) => {
    return useInfiniteQuery({
        queryKey: [messageKeys.getMessageList(chatId)],

        queryFn: ({ pageParam }) => {
            if (!pageParam.chatId) return
            return messageApi.getMessageList(pageParam)
        },
        getNextPageParam: (lastPage, __, lastPageParam) => {
            if (!lastPage?.data.length) return

            return { ...lastPageParam, page: lastPageParam.page + 1 }
        },
        getPreviousPageParam: (_, __, lastPageParam) => {
            if (lastPageParam.page === 1) return lastPageParam
            return { ...lastPageParam, page: lastPageParam.page - 1 }
        },
        select: ({ pages }) => pages.flatMap((page) => page?.data).reverse(),
        initialPageParam: { chatId, page: 1 },
        enabled: !!chatId,
    })
}

export const useSendMessageMutation = () => {
    // const client = useQueryClient()

    return useMutation({
        mutationFn: messageApi.sendMessage,
        // onSuccess: async (_, { chatId }) => {
        //     await client.invalidateQueries({
        //         queryKey: [messageKeys.getMessageList(chatId)],
        //     })
        // },
    })
}
