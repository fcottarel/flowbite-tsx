import { createElement } from "@kitajs/html"
import { twMerge } from "tailwind-merge"

export interface ButtonBaseProps extends JSX.HtmlButtonTag, JSX.HtmlAnchorTag {
}

export function ButtonBase(props: ButtonBaseProps) {
  props.class = twMerge("box-border", "font-medium", "focus:ring-4", "text-sm", "rounded-lg", "px-5", "py-2.5", "me-2", "mb-2", "cursor-pointer", "inline-flex", "items-center", props.class as string[])

  return createElement(props.href ? 'a' : 'button', props, props.children)
}