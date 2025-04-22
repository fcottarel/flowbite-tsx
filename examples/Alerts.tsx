import { Alert } from "../components";

export function AlertsRender() {
    return (
        <>
            <h1>Alerts</h1>
            <div class="flex flex-row w-full gap-2">
                <div class="w-1/3">
                    <Alert>Default</Alert>
                    <Alert color="dark">Dark</Alert>
                    <Alert color="red">Red</Alert>
                    <Alert color="green">Green</Alert>
                    <Alert color="yellow">Yellow</Alert>
                    <Alert color="indigo">Indigo</Alert>
                    <Alert color="purple">Purple</Alert>
                    <Alert color="pink">Pink</Alert>
                </div>
                <div class="w-1/3">
                    <Alert outline="default">Default</Alert>
                    <Alert outline="dark">Dark</Alert>
                    <Alert outline="red">Red</Alert>
                    <Alert outline="green">Green</Alert>
                    <Alert outline="yellow">Yellow</Alert>
                    <Alert outline="indigo">Indigo</Alert>
                    <Alert outline="purple">Purple</Alert>
                    <Alert outline="pink">Pink</Alert>
                </div>
            </div>
        </>
    )
}