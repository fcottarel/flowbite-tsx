import { AlertsRender } from "./Alerts";
import { BadgesRender } from "./Badges";
import { ButtonsRender } from "./Buttons";
import { InputsExamples } from "./Inputs";
import { Navbar, NavbarLogo, Sidebar, SidebarCollapse, SidebarItem, SidebarItems, SidebarLogo } from "../components";

export function Page() {
    return (
        <>
            {'<!DOCTYPE html>'}
            <html lang="fr" >
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                    <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />

                    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
                </head>
                <body class="dark:bg-gray-900 pt-10">
                    <Navbar>
                        <NavbarLogo src="https://flowbite.com/docs/images/logo.svg" href="test">test!</NavbarLogo>
                    </Navbar>
                    <Sidebar>
                        <SidebarLogo src="https://flowbite.com/docs/images/logo.svg" href="test">test!</SidebarLogo>
                        <SidebarItems>
                            <SidebarItem href="/">menu 1</SidebarItem>
                            <SidebarCollapse label="test">
                                <SidebarItem>Test!</SidebarItem>
                                <SidebarItem>Test!</SidebarItem>
                            </SidebarCollapse>
                        </SidebarItems>
                    </Sidebar>
                    <main class="p-4 sm:ml-64">
                        <ButtonsRender />
                        <BadgesRender />
                        <AlertsRender />
                        <InputsExamples />
                    </main>
                    <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
                </body>
            </html>
        </>
    )
}