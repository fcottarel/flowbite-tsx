import { Colors } from "../../types"

export type RadioThemeType = {
    base: string
    label: string
    container: string
    colors: Pick<Colors, "default" | "green" | "red">
}

export const RadioTheme: RadioThemeType = {
    container: "flex items-center",
    label: "ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",
    base: "w-4 h-4",
    colors: {
        default: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
        green: "text-green-600 bg-gray-100 border-green-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-green-800 focus:ring-2 dark:bg-gray-700 dark:border-green-600",
        red: "text-red-600 bg-gray-100 border-red-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-800 focus:ring-2 dark:bg-gray-700 dark:border-red-600"
    }
}