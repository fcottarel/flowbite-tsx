import { Children, createElement } from "@kitajs/html"
import { LabelTheme, LabelThemeType } from "./Theme"
import { twMerge } from "tailwind-merge"

export interface LabelProps extends JSX.HtmlLabelTag {
    color?: keyof LabelThemeType["colors"]
    children: Children
    class?: string[] | string
}

export function Label(props: LabelProps) {
    props.class = twMerge(props.class, LabelTheme.base, LabelTheme.colors[props.color || "default"])

    return createElement("label", props, props.children)
}