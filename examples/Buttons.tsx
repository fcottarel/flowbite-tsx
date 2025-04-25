import { Button, ButtonGroup } from "../components/index"

import { Html } from '@kitajs/html';


export function ButtonsRender() {
    return (
        <>
            <h1>Buttons</h1>
            <div>
                <Button>Default</Button>
                <Button color="dark">Dark</Button>
                <Button color="red">Red</Button>
                <Button color="green">Green</Button>
                <Button color="yellow">Yellow</Button>
                <Button color="indigo">Indigo</Button>
                <Button color="purple">Purple</Button>
                <Button color="pink">Pink</Button>
            </div>

            <div>
                <Button outline="default">Default</Button>
                <Button outline="dark">Dark</Button>
                <Button outline="red">Red</Button>
                <Button outline="green">Green</Button>
                <Button outline="yellow">Yellow</Button>
                <Button outline="indigo">Indigo</Button>
                <Button outline="purple">Purple</Button>
                <Button outline="pink">Pink</Button>
            </div>

            <div>
                <Button>
                    <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                    </svg>
                    Facebook
                </Button>
            </div>
            <div>
                <Button size="sm">SM</Button>
                <Button size="xs">XS</Button>
                <Button size="base">Base</Button>
                <Button size="lg">LG</Button>
                <Button size="xl">XL</Button>
            </div>

            <div>
                <Button>
                    <svg class="w-4 h-4 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                    </svg>
                </Button>
            </div>

            <div class="flex gap-2">
                <ButtonGroup color="default">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
                <ButtonGroup color="dark">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
                <ButtonGroup color="red">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
                <ButtonGroup color="green">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
                <ButtonGroup color="yellow">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
                <ButtonGroup color="indigo">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
                <ButtonGroup color="purple">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
                <ButtonGroup color="pink">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
            </div>

            <div class="flex gap-2">
                <ButtonGroup outline="default">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
                <ButtonGroup outline="dark">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
                <ButtonGroup outline="red">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
                <ButtonGroup outline="green">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
                <ButtonGroup outline="yellow">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
                <ButtonGroup outline="indigo">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
                <ButtonGroup outline="purple">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
                <ButtonGroup outline="pink">
                    <Button>Blue</Button>
                    <Button>Blue</Button>
                    <Button>&gt;</Button>
                </ButtonGroup>
            </div>

        </>
    )
}