import { AssistantChatWindow } from "@/widgets/AssistantChatWindow"

export default async function ChatAssistantPage({
    params,
}: {
    params: Promise<{ chatId: string }>
}) {
    const { chatId } = await params

    return <AssistantChatWindow chatId={chatId} />
}
