# TSX Flowbite

A simple library providing TSX components for easy integration with the Flowbite CSS framework in server-side rendering environments. This package, in our case, is used to render tsx from backend in a project that uses kitaJS for rendering tsx. The goal of this package is to be used with htmx or unpoly, and keep rendering on the server-side to keep projects simple and typed.

## Roadmap

The following components are planned for **v1.0.0**:

* V0.1.0 - Inputs
* V0.2.0 - Sidebar
* V0.3.0 - Tables
* V0.3.0 - Pagination

## Installation (Example)

### Requirement
You have to install tailwind on your project, and if necessary add the following line to your main CSS file. This will allow Tailwind to scan the components for classes:

```css
@source "../../node_modules/flowbite-tsx";
```

```bash
npm install tsx-flowbite # or yarn add tsx-flowbite
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
