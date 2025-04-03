export interface TMessageBase {
    id: string
    type: string
    status: string
    action_type: string
    user_id: string
    chat_id: string
    disabled: boolean
    content: string
    model: null | TAssistantModel
    model_id: null | string
    created_at: string
}

interface TAssistantModel {
    auto_update_pricing: boolean
    child_provider_id: any
    context_length: number
    created_at: string
    custom: boolean
    deleted: boolean
    description: any
    disabled: boolean
    disabledTelegram: boolean
    disabledWeb: boolean
    features: string[]
    icon: null | string
    icon_id: null | number
    id: string
    label: string
    max_tokens: number
    message_color: string
    order: number
    owned_by: string
    parent: {
        id: string
        label: string
        description: null
        icon_id: null
        pricing: null
    }
    parent_id: string
    prefix: string
    pricing: {
        input: number
        output: number
        discount: number
        input_image: number
    }
    provider_id: string
    used_count: number
}

export interface TAssistantMessage extends TMessageBase {
    model: TAssistantModel
    role: "assistant"
    model_id: string
}

export interface TUserMessage extends TMessageBase {
    role: "user"
    model: null
    model_id: null
}

export interface TGetMessageListResponse {
    data: (TUserMessage | TAssistantMessage)[]
    page: number
}

export type TGetAllMessageListResponse = (TUserMessage | TAssistantMessage)[]

export interface TCreateMessageDTO {
    chatId: string
    message: string
}
