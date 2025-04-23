import { Children, createElement } from "@kitajs/html"
import { twMerge } from "tailwind-merge"
import { RadioTheme } from "./Theme"

interface RadioProps extends JSX.HtmlInputTag {
    class?: string | string[]
    color?: keyof typeof RadioTheme["colors"]
    children?: Children
}

export function Radio(props: RadioProps) {

    props.class = twMerge(props.class, RadioTheme.base, RadioTheme.colors[props.color || "default"])

    return `
        <div class="${RadioTheme.container}">
        ${createElement('input', { ...props, type: 'radio' })}
        ${createElement('label', { class: RadioTheme.label, for: props.id }, props.children)}
        </div>
    `
}
