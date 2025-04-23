import { Children, createElement } from "@kitajs/html";
import { twMerge } from "tailwind-merge";
import { InputTheme, InputThemeType } from "./Theme";

export interface InputBaseProps extends JSX.HtmlInputTag {
    class?: string | string[]
    color?: keyof InputThemeType["colors"]
    size?: keyof InputThemeType["sizes"]
}

export function InputBase(props: InputBaseProps) {

    props.class = twMerge(InputTheme.base, InputTheme.colors[props.color || "default"], InputTheme.sizes[props.size || "base"], props.class)
    
    delete props.color
    delete props.size
    delete props["icon"]

    return createElement('input', props)
}