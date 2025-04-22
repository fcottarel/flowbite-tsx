import { Colors, Sizes } from "../types.js"

export type BadgeThemeTypes = {
    base: string,
    color: Colors,
    outline: Colors
    size: Pick<Sizes, "sm" | "xs">
}

export const BadgeTheme: BadgeThemeTypes = {
    base: "font-medium me-2 py-0.5 rounded-sm",
    color: {
        default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
        dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
        red: "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-300",
        green: "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:hover:bg-green-300",
        yellow: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:hover:bg-yellow-300",
        indigo: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-200 dark:text-indigo-900 dark:hover:bg-indigo-300",
        purple: "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-200 dark:text-purple-900 dark:hover:bg-purple-300",
        pink: "bg-pink-100 text-pink-800 hover:bg-pink-200 dark:bg-pink-200 dark:text-pink-900 dark:hover:bg-pink-300",
    },
    outline: {
        default: "bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border border-blue-400",
        dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border border-gray-400",
        red: "bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border border-red-400",
        green: "bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border border-green-400",
        yellow: "bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400",
        indigo: "bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400",
        purple: "bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border border-purple-400",
        pink: "bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border border-pink-400"
    },
    size: {
        xs: "p-1 py-0.5 text-xs",
        sm: "p-1.5 py-0.5 text-sm",
    },
}