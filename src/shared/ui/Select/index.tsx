"use client"

import { useState } from "react"
import ArrowIcon from "@/shared/assets/arrow-icon.svg"
import * as m from "motion/react-m"

import s from "./select.module.css"
import cn from "@/shared/lib/cn"
import { useOutsideClick } from "@/shared/hooks/useOutsideClick"
import { SelectItem } from "./SelectItem"
import { AnimatePresence } from "motion/react"
import { SelectEventWrapper } from "./SelectEventWrapper"
import type { SelectProps, TData } from "./types"

export const Select = <T extends TData>(props: SelectProps<T>) => {
    const {
        label,
        data,
        name,
        dropDownDireaction = "bottom",
        onChange,
        children,
    } = props
    const [isOpen, setIsOpen] = useState(false)

    const { nodeRef } = useOutsideClick({
        attached: isOpen,
        handler: () => {
            setIsOpen(false)
        },
    })

    const onOpen = () => {
        setIsOpen((p) => !p)
    }

    const RenderItems = () => {
        return data.map((d) => {
            const onSelect = () => {
                const updatedArray = [...data].map((item) => ({
                    ...item,
                    active: d.id === item.id,
                }))

                onChange(updatedArray)
            }

            if (!children) {
                return (
                    <SelectEventWrapper
                        key={d.id}
                        onClick={onSelect}
                    >
                        <SelectItem active={d.active}>{d.value}</SelectItem>
                    </SelectEventWrapper>
                )
            } else {
                return (
                    <SelectEventWrapper
                        key={d.id}
                        onClick={onSelect}
                    >
                        {children(d)}
                    </SelectEventWrapper>
                )
            }
        })
    }

    return (
        <div
            ref={nodeRef}
            className={cn(
                s.select,
                s[`drop_down_direction-${dropDownDireaction}`]
            )}
            onClick={onOpen}
        >
            <label className={s.label}>
                {label}
                <ArrowIcon
                    className={cn(s.icon, { [s.icon_active]: isOpen })}
                />
            </label>
            <AnimatePresence>
                {isOpen && (
                    <m.div
                        key='select_list'
                        className={s.select_list}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                    >
                        <RenderItems />
                    </m.div>
                )}
            </AnimatePresence>
            <input
                hidden
                name={name}
                type='text'
                value={data.find((d) => d.active)?.value}
                onChange={() => {}}
            />
        </div>
    )
}

Select.Option = SelectItem
