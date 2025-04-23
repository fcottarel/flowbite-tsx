import { Children, createElement } from "@kitajs/html";
import { twMerge } from "tailwind-merge";
import { ToggleTheme } from "./Theme";

export interface ToggleProps extends JSX.HtmlInputTag {
    children?: Children
    class?: string | string[]
}

export function Toggle(props: ToggleProps) {
    props.class = twMerge(props.class, ToggleTheme.input)

    return createElement('label', { class: twMerge(ToggleTheme.container) }, [
        createElement('input', { ...props, type: 'checkbox' }), // Input
        createElement('div', {class: twMerge(ToggleTheme.toggle)}), // Real toggle (div)
        createElement('span', { class: twMerge(ToggleTheme.label) }, props.children), // label
    ])
}