import { Colors, Sizes } from "../../types"

export type InputIconType = {
    base: string,
    container: string,
    start: {
        container: string,
        input: string
    },
    end: {
        container: string,
        input: string
    }
}

export type InputThemeType = {
    base: string,
    colors: Pick<Colors, "default" | "green" | "red">,
    sizes: Pick<Sizes, "sm" | "base" | "lg">
    icon: InputIconType
    disabled: string
}

export const InputTheme: InputThemeType = {
    base: "block w-full border rounded-lg mb-2",
    colors: {
        default: "border-gray-300 text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        green: "bg-green-50 border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-green-500",
        red: "bg-red-50 border-red-500 text-red-900 dark:text-red-400 placeholder-red-700 dark:placeholder-red-500 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-red-500"
    },
    disabled: "cursor-not-allowed",
    sizes: {
        lg: "p-4 text-base",
        base: "p-2.5 text-sm",
        sm: "p-2 text-xs",
    },
    icon: {
        base: "relative",
        container: "absolute flex items-center pointer-events-none *:w-4 *:h-4 *:text-gray-500 dark:text-gray-400 *:z-1",
        start: {
            container: "inset-y-0 start-0 ps-3.5",
            input: "ps-10"
        },
        end: {
            container: "inset-y-0 end-0 pe-3.5",
            input: "pe-10"
        }
    }
}