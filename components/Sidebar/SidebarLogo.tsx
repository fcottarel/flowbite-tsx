import { Children, createElement } from "@kitajs/html";
import { create } from "domain";
import { SidebarTheme } from "./Theme";
import { twMerge } from "tailwind-merge";

export interface SidebarLogoProps extends JSX.HtmlImageTag, JSX.HtmlAnchorTag {
    children?: Children
}

export function SidebarLogo(props: SidebarLogoProps) {
    return createElement('a', { href: props.href, class: SidebarTheme.logo.a }, [
        createElement('img', { ...props, class: twMerge(props.class as string[], SidebarTheme.logo.img) }),
        createElement('span', { class: SidebarTheme.logo.span }, props.children)
    ])
}