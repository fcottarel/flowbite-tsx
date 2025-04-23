import { Children, createElement } from "@kitajs/html"
import { twMerge } from "tailwind-merge"
import { CheckboxTheme } from "./Theme"

interface CheckboxProps extends JSX.HtmlInputTag {
    class?: string | string[]
    color?: keyof typeof CheckboxTheme["colors"]
    children?: Children
}

export function Checkbox(props: CheckboxProps) {

    props.class = twMerge(props.class, CheckboxTheme.base, CheckboxTheme.colors[props.color || "default"])

    return `
        <div class="${CheckboxTheme.container}">
        ${createElement('input', { ...props, type: 'checkbox' })}
        ${createElement('label', { class: CheckboxTheme.label, for: props.id }, props.children)}
        </div>
    `
}
