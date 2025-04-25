import { createElement } from "@kitajs/html";
import { SidebarTheme } from "./Theme";
import { replaceHtmlClasses } from "../helpers";

export interface SidebarCollapseProps {
    icon?: string
    label?: string
    children?: JSX.Element | JSX.Element[]
    id?: string
}

export function SidebarCollapse(props: SidebarCollapseProps) {
    props.id = props.id ? props.id : `dropdown-${Math.random() * 100}`

    return createElement('li', { class: SidebarTheme.li }, [
        createElement('button', { class: SidebarTheme.collapse.button, "data-collapse-toggle": props.id }, [
            props.icon && replaceHtmlClasses(props.icon, SidebarTheme.collapse.icon),
            createElement('span', { class: SidebarTheme.collapse.label }, props.label),
            `<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>`
        ]),
        createElement('ul', { class: SidebarTheme.collapse.ul, id: props.id }, props.children)
    ])
}