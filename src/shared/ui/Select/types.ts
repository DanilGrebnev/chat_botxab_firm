import { ReactNode } from "react"

export type TData = (Record<string, any> & {
    value: string
    id: string
    active: boolean
})[]

export interface SelectProps<T extends TData> {
    label?: ReactNode
    data: T
    /** Render you custom Option components
     *
     * @example
     * <Select data={[...some data]}>
     *      {({value, id, active})=>{<div key={id}>{value}</div>}}
     * </Select>
     */
    children?: (value: T[number], i?: number) => ReactNode
    onChange: (updatedArray: T) => void
    name?: string
    dropDownDireaction?: "top" | "bottom"
}
