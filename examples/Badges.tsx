import { Badge } from "../components";

import { Html } from '@kitajs/html';
export function BadgesRender() {
    return (
        <>
            <h1>Badges</h1>
            <div>
                <Badge>Default</Badge>
                <Badge color="dark">Dark</Badge>
                <Badge color="red">Red</Badge>
                <Badge color="green">Green</Badge>
                <Badge color="yellow">Yellow</Badge>
                <Badge color="indigo">Indigo</Badge>
                <Badge color="purple">Purple</Badge>
                <Badge color="pink">Pink</Badge>
            </div>
            <div>
                <Badge size="xs">Default</Badge>
                <Badge size="xs" color="dark">Dark</Badge>
                <Badge size="xs" color="red">Red</Badge>
                <Badge size="xs" color="green">Green</Badge>
                <Badge size="xs" color="yellow">Yellow</Badge>
                <Badge size="xs" color="indigo">Indigo</Badge>
                <Badge size="xs" color="purple">Purple</Badge>
                <Badge size="xs" color="pink">Pink</Badge>
            </div>
            <div>
                <Badge outline="default">Default</Badge>
                <Badge outline="dark">Dark</Badge>
                <Badge outline="red">Red</Badge>
                <Badge outline="green">Green</Badge>
                <Badge outline="yellow">Yellow</Badge>
                <Badge outline="indigo">Indigo</Badge>
                <Badge outline="purple">Purple</Badge>
                <Badge outline="pink">Pink</Badge>
            </div>
            <div>
                <Badge size="xs" outline="default">Default</Badge>
                <Badge size="xs" outline="dark">Dark</Badge>
                <Badge size="xs" outline="red">Red</Badge>
                <Badge size="xs" outline="green">Green</Badge>
                <Badge size="xs" outline="yellow">Yellow</Badge>
                <Badge size="xs" outline="indigo">Indigo</Badge>
                <Badge size="xs" outline="purple">Purple</Badge>
                <Badge size="xs" outline="pink">Pink</Badge>
            </div>
        </>
    )
}