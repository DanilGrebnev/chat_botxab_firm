export interface TMessageBase {
    id: string
    type: string
    status: string
    tokens: 0
    action_type: string
    user_id: string
    chat_id: string
    additional_content: string
    tg_bot_message_id: string
    disabled: true
    content: string
    model: null | TAssistantModel
    request_id: string
    transaction_id: string
    model_id: string
    created_at: string
    transaction: {
        id: string
        provider: string
        currency: string
        meta: Record<string, any>
        amount: 0
        status: string
        type: string
        plan_id: string
        user_id: string
        referral_id: string
        external_id: string
        created_at: string
    }
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

interface TAssistantMessage extends TMessageBase {
    model: TAssistantModel
    role: "assistant"
}

interface TUserMessage extends TMessageBase {
    role: "user"
    model: null
}

export interface TGetMessageListResponse {
    data: (TUserMessage | TAssistantMessage)[]
    page: number
}

export interface TCreateMessageDTO {
    chatId: string
    message: string
}
