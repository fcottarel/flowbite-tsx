import { Children, createElement } from "@kitajs/html"
import { BadgeTheme } from "./Theme"
import { twMerge } from "tailwind-merge"
import { Colors, Sizes } from "../types"

export interface BadgeProps {
    children: Children
    color?: keyof Colors
    outline?: keyof Colors
    class?: string
    size?: keyof Pick<Sizes, "sm" | "xs">
}

export function Badge(props: BadgeProps) {
    props.class = twMerge(BadgeTheme.base, BadgeTheme.size["sm"], props.class)

    if (!props.color || !props.outline)
        props.class = twMerge(props.class, BadgeTheme.color["default"])

    if (props.color)
        props.class = twMerge(props.class, BadgeTheme.color[props.color])
    if (props.outline)
        props.class = twMerge(props.class, BadgeTheme.outline[props.outline])

    if (props.size)
        props.class = twMerge(props.class, BadgeTheme.size[props.size])

    delete props.color

    return createElement('span', props, props.children)
}