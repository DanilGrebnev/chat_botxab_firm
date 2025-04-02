export interface TChat {
    id: string
    group_id: string
    user_id: string
    name: string
    total_caps: 0
    highlight: string
    model_id: string
    created_at: string
}

export interface TGetChatListResponse {
    data: TChat[]
    page: number
}

export type TGetChatResponse = TChat