import { ReactNode } from "react"

export interface optionProps {
    value: string,
    label: ReactNode
}

export interface selectBoxProps {
    options: optionProps[]
    initialValue?: string
    onChange: (value: string) => void
    className?: string
}