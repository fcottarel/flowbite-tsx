import { AlertsRender } from "./Alerts";
import { BadgesRender } from "./Badges";
import { ButtonsRender } from "./Buttons";
import { Html } from '@kitajs/html';

export function Page() {
    return (
        <>
            {'<!DOCTYPE html>'}
            <html lang="en" >
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
                </head>
                <body class="dark:bg-gray-900">
                    <ButtonsRender />
                    <BadgesRender />
                    <AlertsRender />
                </body>
            </html>
        </>
    )
}