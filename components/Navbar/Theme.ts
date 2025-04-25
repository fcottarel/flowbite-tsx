
export type NavThemeType = {
    nav: string
    container: string
    content: string
    logo: {
        a: string
        img: string
        label: string
        div: string
    }
}

export const NavTheme: NavThemeType = {
    nav: "fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700",
    container: "px-3 py-3 lg:px-5 lg:pl-3",
    content: "flex items-center justify-between",
    logo: {
        div: "flex items-center justify-start rtl:justify-end",
        a: "flex ms-2 md:me-24",
        img: "h-8 me-3",
        label: "self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
    }
}