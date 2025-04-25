import { createElement } from "@kitajs/html"
import { SidebarTheme } from "./Theme"

interface SidebarItemsProps {
    children: JSX.Element[] | JSX.Element
}

export function SidebarItems(props: SidebarItemsProps) {
    return createElement('ul', { class: SidebarTheme.ul }, props.children)
}