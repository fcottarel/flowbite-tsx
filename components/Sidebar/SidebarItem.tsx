import { createElement } from "@kitajs/html";
import { SidebarTheme } from "./Theme";

export interface SidebarItem extends JSX.HtmlAnchorTag {
    children: JSX.Element | JSX.Element[]
}

export function SidebarItem(props: SidebarItem) {
    return createElement('li', { class: SidebarTheme.li }, [
        createElement('a', { ...props, class: SidebarTheme.a }, props.children)
    ])
}