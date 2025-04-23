import { twMerge } from "tailwind-merge";
import { InputBase, InputBaseProps } from "./InputBase";
import { InputTheme } from "./Theme";

export interface InputProps extends InputBaseProps {
    icon?: string
    iconPosition?: "start" | "end"
}

export function Input(props: InputProps) {

    if (props.icon)
        props.class = twMerge(props.class || [], InputTheme.icon.base, InputTheme.icon[props.iconPosition || "start"].input)

    if (props.disabled)
        props.class = twMerge(props.class, InputTheme.disabled)

    return `
        <div class="${props.icon ? InputTheme.icon.base : ""}">
            ${props.icon ? `<div class="${twMerge(InputTheme.icon.container, InputTheme.icon[props.iconPosition || "start"].container)}">${props.icon}</div>` : ""}
            ${InputBase(props)}
        </div>
    `
}