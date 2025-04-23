import { AlertsRender } from "./Alerts";
import { BadgesRender } from "./Badges";
import { ButtonsRender } from "./Buttons";
import { Html } from '@kitajs/html';
import { InputsExamples } from "./Inputs";

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
                <body class="dark:bg-gray-900 p-4">
                    <ButtonsRender />
                    <BadgesRender />
                    <AlertsRender />
                    <InputsExamples />
                    <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
                </body>
            </html>
        </>
    )
}