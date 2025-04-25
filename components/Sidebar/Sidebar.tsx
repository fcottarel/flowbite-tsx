import { createElement } from "@kitajs/html";
import { SidebarTheme } from "./Theme";

export interface SidebarProps extends JSX.HtmlTag {
    children?: JSX.Element | JSX.Element[]
}

export function Sidebar(props: SidebarProps) {
    return createElement('aside', {...props, class: SidebarTheme.base }, [
        createElement('div', { class: SidebarTheme.div }, props.children)
    ])
}