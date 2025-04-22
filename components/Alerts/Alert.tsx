import { Children, createElement } from "@kitajs/html";
import { Colors } from "../types.js";
import { twMerge } from "tailwind-merge";
import { AlertTheme } from "./Theme.js";

export type AlertProps = {
    color?: keyof Colors
    outline?: keyof Colors
    children: Children
    class?: string
}

export function Alert(props: AlertProps) {
    props.class = twMerge(props.class, AlertTheme.base)

    if (props.outline)
        props.class = twMerge(props.class, AlertTheme.outline[props.outline || "default"])
    else
        props.class = twMerge(props.class, AlertTheme.color[props.color || "default"])

    return createElement('div', props, props.children)
}