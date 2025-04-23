
export type LabelThemeType = {
    base: string,
    colors: {
        default: string,
        green: string,
        red: string
    }
}

export const LabelTheme = {
    base: "block mb-2 text-sm font-medium",
    colors: {
        default: "text-gray-900 dark:text-white",
        green: "text-green-700 dark:text-green-500",
        red: "text-red-700 dark:text-red-500",
    }
}