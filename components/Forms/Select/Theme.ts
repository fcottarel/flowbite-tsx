import { Colors, Sizes } from "../../types"

export type SelectThemeType = {
    base: string
    disable: string
    colors: Pick<Colors, "default" | "green" | "red">
    sizes: Pick<Sizes, "sm" | "base" | "lg">
}

export const SelectTheme: SelectThemeType = {
    base: "border rounded-lg block w-full",
    disable: "cursor-not-allowed",
    sizes: {
        sm: "text-xs p-2",
        base: "text-sm p-2.5",
        lg: "text-base p-4"
    },
    colors: {
        default: "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        green: "bg-gray-50 border-green-300 text-green-900 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500",
        red: "bg-gray-50 border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
    }
}