import { Children } from "@kitajs/html"
import { twMerge } from "tailwind-merge"
import { Colors, Sizes } from "../types"
import { replaceHtmlClasses } from "../helpers"
import { ButtonTheme } from "./Theme"

interface ButtonGroupProps {
    children: Children[]
    class?: string[] | string
    size?: keyof Sizes
    color?: keyof Colors
    outline?: keyof Colors
}

/**
 * // TODO: See if it's possible to keep the button's existing classes, perhaps by retrieving them, merging with twmerge, and adding the necessary  grouping classes. 
 * 
 * Warning: using button group will remove all classes of child buttons
 * @param props 
 * @returns 
 */
export function ButtonGroup(props: ButtonGroupProps) {

    let buttons = props.children.map((item, index) => {
        let classes = twMerge(ButtonTheme.group.base, props.outline ? ButtonTheme.outlineColor[props.outline || "default"] : ButtonTheme.color[props.color || "default"])

        classes = twMerge(classes, ButtonTheme.sizes[props.size || "base"], index === 0 ? ButtonTheme.group.child.first : index === props.children.length - 1 ? ButtonTheme.group.child.end : ButtonTheme.group.child.other)

        return replaceHtmlClasses(item as string, classes)
    })

    return `
        <div class="${ButtonTheme.group.parent}">
            ${buttons.join('')}
        </div>
    `
}