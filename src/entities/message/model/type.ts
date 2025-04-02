import { TMessageBase } from "@/shared/types/message/message"

export type TBaseMessage = Pick<TMessageBase, "content" | "created_at">
