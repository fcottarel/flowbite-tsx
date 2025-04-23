import { Children, createElement } from "@kitajs/html";
import { twMerge } from "tailwind-merge";
import { SelectTheme } from "./Theme";

export interface SelectProps extends JSX.HtmlSelectTag {
    class?: string[] | string
    children: Children[]
    color?: keyof typeof SelectTheme["colors"]
    sizing?: keyof typeof SelectTheme["sizes"]
}

export function Select(props: SelectProps) {

    props.class = twMerge(props.class, SelectTheme.base, SelectTheme.sizes[props.sizing || "base"], props.disabled ? SelectTheme.disable : "", SelectTheme.colors[props.color || "default"])

    return createElement("select", props, props.children)
}