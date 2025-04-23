import { Children, createElement } from "@kitajs/html";
import { twMerge } from "tailwind-merge";
import { HelperTextTheme } from "./Theme.js";

export interface HelperTextProps extends JSX.HtmlTag {
    children: Children
    class?: string | string[]
}

export function HelperText(props: HelperTextProps) {
    props.class = twMerge(props.class, HelperTextTheme.base)

    return createElement('p', props, props.children)
}