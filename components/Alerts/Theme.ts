import { Colors } from "../types.js"

export type AlertTheme = {
    base: string
    color: Colors,
    outline: Colors
}

export const AlertTheme: AlertTheme = {
    base: "p-4 mb-4 text-sm flex items-center rounded-lg",
    color: {
        default: "text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400",
        dark: "text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-400",
        green: "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400",
        indigo: "text-indigo-800 bg-indigo-50 dark:bg-gray-800 dark:text-indigo-400",
        pink: "text-pink-800 bg-pink-50 dark:bg-gray-800 dark:text-pink-400",
        purple: "text-purple-800 bg-purple-50 dark:bg-gray-800 dark:text-purple-400",
        red: "text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400",
        yellow: "text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400"
    },
    outline: {
        default: "text-blue-800 border border-blue-300 bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800",
        dark: "text-gray-800 border border-gray-300 bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-800",
        green: "text-green-800 border border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800",
        indigo: "text-indigo-800 border border-indigo-300 bg-indigo-50 dark:bg-gray-800 dark:text-indigo-400 dark:border-indigo-800",
        pink: "text-pink-800 border border-pink-300 bg-pink-50 dark:bg-gray-800 dark:text-pink-400 dark:border-pink-800",
        purple: "text-purple-800 border border-purple-300 bg-purple-50 dark:bg-gray-800 dark:text-purple-400 dark:border-purple-800",
        red: "text-red-800 border border-red-300 bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",
        yellow: "text-yellow-800 border border-yellow-300 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400 dark:border-yellow-800"
    }
}