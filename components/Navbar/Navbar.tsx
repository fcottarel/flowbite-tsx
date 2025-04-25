import { Children, createElement } from "@kitajs/html";
import { NavTheme } from "./Theme";

export interface NavProps {
    children: Children
}

export function Navbar(props: NavProps) {
    return createElement('nav', { class: NavTheme.nav }, [
        createElement('div', { class: NavTheme.container }, [
            createElement('div', { class: NavTheme.content }, [
                props.children
            ])
        ])
    ])
}