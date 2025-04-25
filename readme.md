# TSX Flowbite

A simple library providing TSX components for easy integration with the Flowbite CSS framework in server-side rendering environments. This package, in our case, is used to render tsx from backend in a project that uses kitaJS for rendering tsx. The goal of this package is to be used with htmx or unpoly, and keep rendering on the server-side to keep projects simple and typed.

### Requirement
1.  **Tailwind CSS:** You have to install and configure Tailwind CSS in your project.
2.  **Flowbite CSS:** Add the following line to your main CSS file. This will allow Tailwind to scan the components from this library for classes:
    ```css
    @source "../../node_modules/flowbite-tsx";
    ```
3.  **Flowbite JavaScript:** For interactive components like Toggles, Modals, Dropdowns (if added later), etc., to function correctly, you also need to install the main `flowbite` library and include its JavaScript. Follow the [official Flowbite Quickstart guide](https://flowbite.com/docs/getting-started/quickstart/) to set it up in your project (usually involves installing `flowbite` via npm and including it in your `tailwind.config.js` and potentially your main JS bundle).

## Installation (Example)

```bash
# Install this library
npm install tsx-flowbite # or yarn add tsx-flowbite

# Don't forget to install Flowbite itself if you need interactive components
npm install flowbite # or yarn add flowbite
```

## Documentation

This documentation outlines the available components and their customization options.

### Colors

The following color options are available for applicable components via the `color` prop.

| Color          | Description        |
|----------------|--------------------|
| default (blue) | Default theme blue |
| dark (gray)    | Dark/Gray shade    |
| green          | Green shade        |
| yellow         | Yellow shade       |
| indigo         | Indigo shade       |
| purple         | Purple shade       |
| pink           | Pink shade         |
| red            | Red shade          |
| blue           | Explicit blue shade|

### Sizes

The following size options are available for applicable components via the `size` prop.

| Size  | Description     |
|-------|-----------------|
| xs    | Extra Small     |
| sm    | Small           |
| base  | Default/Medium  |
| lg    | Large           |
| xl    | Extra Large     |

### Components

Here are some of the components provided by the library.

#### Alerts

Displays standard Flowbite alert messages.

**Basic Usage:**

```html
<Alert>Your informative message here.</Alert>
```

**With Color:**

```html
<Alert color="green">This is a success alert.</Alert>
```

#### Badges

Displays small status indicators or labels.

**Basic Usage (with color):**

```html
<Badge color="dark">Dark Badge</Badge>
```

**With Outline and Size:**
*Note: Use the `outline` prop with a color value to get an outlined style.*

```html
<Badge size="xs" outline="yellow">Yellow Outline XS</Badge>
```

#### Buttons

Standard clickable buttons.

**Basic Usage (with color):**

```html
<Button color="dark">Dark Button</Button>
```

**With Outline and Size:**
*Note: Use the `outline` prop with a color value to get an outlined style.*

```html
<Button size="xs" outline="yellow">Yellow Outline XS</Button>
```

#### Button Group

Groups multiple buttons together.

**Warning:** When using `<ButtonGroup>`, any `class`, `color`, or `size` props applied directly to individual `<Button>` elements *inside* the group will be ignored. Apply these props to the `<ButtonGroup>` component itself.

**Basic Usage (applies 'default' color to all buttons):**

```html
 <ButtonGroup>
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
</ButtonGroup>
```

**With Specific Color (applies 'green' to all buttons):**

```html
 <ButtonGroup color="green">
    <Button>Ok</Button>
    <Button>Cancel</Button>
 </ButtonGroup>
```

**With Outline and Size (applies 'yellow' outline and 'xs' size to all buttons):**

```html
<ButtonGroup size="xs" outline="yellow">
    <Button>Option 1</Button>
    <Button>Option 2</Button>
    <Button>Option 3</Button>
</ButtonGroup>
```

#### Inputs

Standard form input fields.

**Available Colors:** `default`, `green`, `red`

**Basic Usage (with Label and Color):**

```html
<div>
    <Label for="email-input">Email</Label>
    <Input id="email-input" color="default" placeholder="name@example.com" />
</div>
```

**With Size:**
*(Note: The `size` prop applies to the input field.)*

```html
<div>
    <Label for="large-input">Large input</Label>
    <Input id="large-input" size="lg" />
</div>

<div>
    <Label for="base-input">Base input</Label>
    <Input id="base-input" size="base" />
</div>

<div>
    <Label for="small-input">Small input</Label>
    <Input id="small-input" size="sm" />
</div>
```

**With Helper Text:**
*(Use the `HelperText` component below the `Input` for additional guidance.)*

```html
<div>
  <Label for="input-with-helper">Your name</Label>
  <Input id="input-with-helper" placeholder="Bonnie Green" />
  <HelperText>This is a helper text for your input.</HelperText>
</div>
```

#### Select

Standard dropdown select fields.

**Available Colors:** `default`, `green`, `red`
**Available Sizes:** `sm`, `base`, `lg` (`base` is default)

**Basic Usage (with Label):**

```html
<div>
    <Label for="select-example">Choose an option</Label>
    <Select id="select-example">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </Select>
</div>
```

**With Color:**

```html
<div>
    <Label for="select-success">Success State</Label>
    <Select id="select-success" color="green">
        <option>Option 1</option>
        <option>Option 2</option>
    </Select>
</div>

<div>
    <Label for="select-error">Error State</Label>
    <Select id="select-error" color="red">
        <option>Option 1</option>
        <option>Option 2</option>
    </Select>
</div>
```

**With Size:**

```html
<div>
    <Label for="select-small">Small Select</Label>
    <Select id="select-small" size="sm">
        <option>Option 1</option>
        <option>Option 2</option>
    </Select>
</div>

<div>
    <Label for="select-large">Large Select</Label>
    <Select id="select-large" size="lg">
        <option>Option 1</option>
        <option>Option 2</option>
    </Select>
</div>
```

#### Textarea

Multi-line text input fields.

**Available Colors:** `default`, `green`, `red`

**Basic Usage (with Label):**

```html
<div>
    <Label for="textarea-example">Your message</Label>
    <Textarea id="textarea-example" placeholder="Leave a comment..." rows={4} />
</div>
```

**With Color:**

```html
<div>
    <Label for="textarea-success">Success State</Label>
    <Textarea id="textarea-success" color="green" placeholder="Success message..." />
</div>

<div>
    <Label for="textarea-error">Error State</Label>
    <Textarea id="textarea-error" color="red" placeholder="Error message..." />
</div>
```

#### Checkbox

Standard checkbox input.

**Available Colors:** `default`, `green`, `red`

**Basic Usage (with Label and Color):**

```html
<div class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
        <Checkbox id="checkbox-default" />
        <Label for="checkbox-default">Default checkbox</Label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox id="checkbox-green" color="green" />
        <Label for="checkbox-green">Green checkbox</Label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox id="checkbox-red" color="red" />
        <Label for="checkbox-red">Red checkbox</Label>
    </div>
</div>
```

#### Radio

Standard radio button input. Requires `name` prop to group related options.

**Available Colors:** `default`, `green`, `red`

**Basic Usage (with Label and Color):**

```html
<fieldset class="flex flex-col gap-2">
  <legend class="mb-2">Choose one option:</legend>
  <div class="flex items-center gap-2">
    <Radio id="radio-option-1" name="radio-group-example" value="option1" checked />
    <Label for="radio-option-1">Default radio</Label>
  </div>
  <div class="flex items-center gap-2">
    <Radio id="radio-option-2" name="radio-group-example" value="option2" color="green" />
    <Label for="radio-option-2">Green radio</Label>
  </div>
  <div class="flex items-center gap-2">
    <Radio id="radio-option-3" name="radio-group-example" value="option3" color="red" />
    <Label for="radio-option-3">Red radio</Label>
  </div>
</fieldset>
```

#### Toggle

Standard toggle switch input (visually similar to a checkbox). Requires Flowbite's JavaScript.

**Available Colors:** `default` (blue), `green`, `red`, `yellow`
**Available Sizes:** `sm`, `base`, `lg` (`base` is default)


**Basic Usage (with Label):**

```html
<div class="flex items-center gap-2">
  <Toggle id="toggle-example" />
  <Label for="toggle-example">Toggle me</Label>
</div>
```

**With Color and Size:**

```html
<div class="flex flex-col gap-3">
    <div class="flex items-center gap-2">
        <Toggle id="toggle-green-sm" color="green" size="sm"/>
        <Label for="toggle-green-sm">Small Green Toggle</Label>
    </div>
    <div class="flex items-center gap-2">
        <Toggle id="toggle-red-base" color="red" size="base"/>
        <Label for="toggle-red-base">Base Red Toggle</Label>
    </div>
    <div class="flex items-center gap-2">
        <Toggle id="toggle-yellow-lg" color="yellow" size="lg"/>
        <Label for="toggle-yellow-lg">Large Yellow Toggle</Label>
    </div>
</div>
```

#### Sidebar

Provides a vertical navigation sidebar structure. Requires Flowbite's JavaScript for collapse functionality.

**Sub-components:**
* `<Sidebar>`: The main container.
* `<SidebarLogo>`: Displays a logo at the top (optional). Requires `href` and `src` props.
* `<SidebarItems>`: Container for the navigation items.
* `<SidebarItem>`: A single navigation link. Requires `href`. Can contain text or icons.
* `<SidebarCollapse>`: A collapsible group of items. Requires `label`. Contains nested `<SidebarItem>`s.

**Basic Usage Example:**

```html
<Sidebar aria-label="Main navigation sidebar">
    <SidebarLogo href="/" src="[https://flowbite.com/docs/images/logo.svg](https://flowbite.com/docs/images/logo.svg)" alt="Flowbite Logo">
        Flowbite TSX
    </SidebarLogo>
    <SidebarItems>
        <SidebarItem href="/dashboard" icon={/* Optional icon component */}>
            Dashboard
        </SidebarItem>
        <SidebarCollapse label="E-commerce" icon={/* Optional icon component */}>
            <SidebarItem href="/products">Products</SidebarItem>
            <SidebarItem href="/orders">Orders</SidebarItem>
            <SidebarItem href="/customers">Customers</SidebarItem>
        </SidebarCollapse>
        <SidebarItem href="/users" icon={/* Optional icon component */}>
            Users
        </SidebarItem>
        <SidebarItem href="/login" icon={/* Optional icon component */}>
            Sign In
        </SidebarItem>
    </SidebarItems>
</Sidebar>
```

#### Navbar

Provides a basic container for a navigation header.

**Sub-components (Currently Available):**
* `<Navbar>`: The main container. Can accept `fluid` (boolean) and `rounded` (boolean) props.
* `<NavbarLogo>`: Displays a logo image directly within the Navbar. Requires `src`, `alt`, and `href`.

**Basic Usage Example:**

```html
<Navbar fluid={true} rounded={true}>
  <NavbarLogo href="/" src="[https://flowbite.com/docs/images/logo.svg](https://flowbite.com/docs/images/logo.svg)" alt="Flowbite Logo">
      Flowbite TSX
  </NavbarLogo>
  {/* Other Navbar components like Toggle and Collapse will be added later */}
</Navbar>
```

## Roadmap

The following components are planned for **v1.0.0**:

* Tables
* Pagination
