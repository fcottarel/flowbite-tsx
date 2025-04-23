import { Checkbox, HelperText, Input, Label, Radio, Select, Textarea, Toggle } from "../components";

export function InputsExamples() {
    return (
        <>
            <h1>Inputs</h1>
            <div>
                <div>
                    <Label>Email</Label>
                    <Input />
                </div>
                <div>
                    <Label color="red">Email</Label>
                    <Input color="red" type="date" />
                </div>
                <div>
                    <Label color="green">Email</Label>
                    <Input color="green" />
                </div>
            </div>
            <div>
                <Input size="sm" />
                <Input />
                <Input size="lg" />
            </div>
            <div>
                <Input icon='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>' />
                <Input iconPosition="end" icon='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>' />
            </div>
            <div>
                <div>
                    <Label>email</Label>
                    <Input type="email" />
                    <HelperText>This is an helper text for your input</HelperText>
                </div>
                <div>
                    <Label>number</Label>
                    <Input type="number" />
                </div>
                <div>
                    <Label>password</Label>
                    <Input type="password" />
                </div>
                <div>
                    <Label>date</Label>
                    <Input type="date" />
                </div>
                <div>
                    <Label>color</Label>
                    <Input type="color" />
                </div>
                <div>
                    <Label>disabled</Label>
                    <Input type="text" disabled />
                </div>
            </div>
            <div>
                <h1>Select</h1>
                <div>
                    <Label>email</Label>
                    <Select>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                </div>
                <div>
                    <Label>email</Label>
                    <Select color="red">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                </div>
                <div>
                    <Label>email</Label>
                    <Select color="green">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                </div>

                <div>
                    <Label>email</Label>
                    <Select sizing="sm">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                </div>
                <div>
                    <Label>email</Label>
                    <Select color="red">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                </div>
                <div>
                    <Label>email</Label>
                    <Select color="green" sizing="lg">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                </div>
                <div>
                    <Label>email</Label>
                    <Select color="green" sizing="lg" size="5">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                </div>
            </div>
            <div>
                <h1>Textarea</h1>
                <div>
                    <Label>Textarea</Label>
                    <Textarea />
                </div>
                <div>
                    <Label>Textarea</Label>
                    <Textarea color="green" />
                </div>
                <div>
                    <Label>Textarea</Label>
                    <Textarea color="red" />
                </div>
            </div>
            <div>
                <h1>Checkbox</h1>
                <div class="flex flex-row gap-2">
                    <Checkbox id="test">Test!</Checkbox>
                    <Checkbox color="green">Test!</Checkbox>
                    <Checkbox color="red">Test!</Checkbox>
                </div>
            </div>
            <div>
                <h1>Radio</h1>
                <div class="flex flex-row gap-2">
                    <Radio name="test" value="test1" id="test"> Test! </Radio>
                    <Radio name="test" value="test2" color="green">Test!</Radio>
                    <Radio name="test" value="test3" color="red">Test!</Radio>
                </div>
            </div>
            <div>
                <h1>Toggle</h1>
                <div class="flex flex-row gap-2">
                    <Toggle>Toggle</Toggle>
                </div>
            </div>
        </>
    )
}