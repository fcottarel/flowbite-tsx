import { twMerge } from "tailwind-merge"
import { ButtonBase, ButtonBaseProps } from "./ButtonBase"
import { ButtonTheme } from "./Theme"
import { Colors, Sizes } from "../types"

export type ButtonProps = {
    color?: keyof Colors
    outline?: keyof Colors
    size?: keyof Sizes
} & ButtonBaseProps

export function Button(props: ButtonProps) {

    if (props.outline)
        props.class = twMerge(ButtonTheme.outlineColor[props.outline] || ButtonTheme.outlineColor["default"], props.class as any)
    else
        props.class = twMerge(ButtonTheme.color[props.color] || ButtonTheme.color["default"], props.class as any)

    props.class = twMerge(props.disabled ? ButtonTheme.disabled : [], props.class)
    
    props.class = twMerge(ButtonTheme.sizes[props.size], props.class)

    delete props.outline
    delete props.color

    return ButtonBase(props)
}