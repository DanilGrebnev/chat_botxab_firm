export interface TModelCompact {
    id: string
    label: string
    owned_by: string
    created_at: string
}

export type TGetModelListResponse = TModelCompact[]
