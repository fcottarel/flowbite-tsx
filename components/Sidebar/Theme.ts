
export type SidebarThemeType = {
    base: string
    navbar: string
    div: string
    ul: string
    li: string
    a: string

    logo: {
        a: string
        span: string
        img: string
    }

    collapse: {
        icon: string,
        label: string,
        dropdownIcon: string
        button: string
        ul: string
    }
}

export const SidebarTheme: SidebarThemeType = {
    base: "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700",
    navbar: "pt-20",
    div: "h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 py-4",
    ul: "space-y-2 font-medium",
    li: "",
    a: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
    logo: {
        a: "flex items-center ps-2.5 mb-5",
        span: "self-center text-xl font-semibold whitespace-nowrap dark:text-white",
        img: "h-6 me-3 sm:h-7"
    },
    collapse: {
        icon: "shrink-0 me-3 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        label: "flex-1 text-left rtl:text-right whitespace-nowrap",
        dropdownIcon: "w-3 h-3",
        button: "flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
        ul: "hidden py-2 space-y-2 *:*:ps-6"
    }
}