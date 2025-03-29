"use client"

import { useState } from "react"
import { Select } from "../Select"
import { nanoid } from "nanoid"
import Icon from "@/shared/assets/planet-icon.svg"

export const SelectLang = () => {
    const [lang, setLang] = useState(() => [
        { value: "RU", id: nanoid(), active: true },
        { value: "EN", id: nanoid(), active: false },
    ])

    return (
        <Select
            data={lang}
            onChange={setLang}
            label={
                <div style={{ display: "flex", gap: "8px" }}>
                    <Icon />
                    {lang.find((d) => d.active)?.value}
                </div>
            }
        />
    )
}
