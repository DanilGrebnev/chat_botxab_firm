import { useState } from "react"
import { TData } from "../Select/types"
import { nanoid } from "nanoid"
import { Select } from "../Select"
import { IconModel } from "./ui/IconModel"
import { Text } from "../Text"

import s from "./s.module.css"
import cn from "@/shared/lib/cn"

type AIModelValue = "ChatGPT" | "DALL-E" | "Midjourney"

export const SelectAlModel = () => {
    const [selectedAiModel, setSelectedAiModel] = useState(
        () =>
            [
                { value: "ChatGPT", id: nanoid(), active: true },
                { value: "DALL-E", id: nanoid(), active: false },
                { value: "Midjourney", id: nanoid(), active: false },
            ] satisfies Array<TData[number] & { value: AIModelValue }>
    )
    return (
        <Select
            wrapperClassName={s.wrapper}
            name='ai-model'
            dropDownDireaction='top'
            data={selectedAiModel}
            onChange={setSelectedAiModel}
            label={
                <>
                    <IconModel
                        icon={
                            selectedAiModel.find((d) => d.active)?.value ||
                            "ChatGPT"
                        }
                    />
                    {selectedAiModel.find((d) => d.active)?.value}
                </>
            }
        >
            {({ value, active }) => (
                <div className={cn(s.list, { [s.active]: active })}>
                    <IconModel icon={value} />
                    <Text>{value}</Text>
                </div>
            )}
        </Select>
    )
}
