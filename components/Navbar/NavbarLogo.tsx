import { Children, createElement } from "@kitajs/html";
import { twMerge } from "tailwind-merge";
import { NavTheme } from "./Theme";

export interface NavbarLogoProps {
    src?: string
    href?: string
    children?: Children
}

export function NavbarLogo(props: NavbarLogoProps) {
    return createElement('div', { ...props, class: NavTheme.logo.div }, [
        createElement('a', { class: NavTheme.logo.a, href: props.href }, [
            createElement('img', { src: props.src, class: NavTheme.logo.img }),
            createElement('span', { class: NavTheme.logo.label }, props.children)
        ])
    ])
}