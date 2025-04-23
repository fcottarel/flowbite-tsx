import { Children, createElement } from "@kitajs/html";
import { twMerge } from "tailwind-merge";
import { TextareaTheme, TextareaThemeType } from "./Theme";

export interface TextareaProps extends JSX.HtmlTextAreaTag {
    children?: Children
    class?: string | string[]
    color?: keyof TextareaThemeType["colors"]
}

export function Textarea(props: TextareaProps) {
    props.class = twMerge(props.class, TextareaTheme.base, TextareaTheme.colors[props.color || "default"])

    return createElement('textarea', props, props.children)
}