---
title: Stack
description: A Stack component that helps with creating one dimensional layouts with equal spacing between items.
status: Ready
preview_component: './../../previews/Stack.svelte'
---

# Stack

## Preview

A Stack component that helps with creating one dimensional layouts with equal spacing between items.

## Features

- Vertical or horizontal layout orientation
- Configurable gaps using theme spacing tokens
- Flexible alignment and justification options
- Optional wrapping behavior

## Usage

```html
<watt-stack gap="m">
	<div>Stack item 1</div>
	<div>Stack item 2</div>
	<div>Stack item 3</div>
</watt-stack>
```

## Properties

| Property         | Type                                                                                                | Default      | Description            |
| ---------------- | --------------------------------------------------------------------------------------------------- | ------------ | ---------------------- |
| `gap`            | `"none" \| "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl"`                                              | `"m"`        | Space between items    |
| `direction`      | `"vertical" \| "horizontal"`                                                                        | `"vertical"` | Stack orientation      |
| `alignItems`     | `"center" \| "start" \| "end" \| "stretch"`                                                         | `"stretch"`  | Cross-axis alignment   |
| `wrap`           | `boolean`                                                                                           | `false`      | Enable item wrapping   |
| `justifyContent` | `"center" \| "start" \| "end" \| "baseline" \| "space-between" \| "space-around" \| "space-evenly"` | `undefined`  | Main axis distribution |

## CSS Properties

| Property        | Description              | Default            |
| --------------- | ------------------------ | ------------------ |
| `--w-stack-gap` | Custom gap between items | `var(--w-space-m)` |

## Examples

### Basic Stack

```html
<watt-stack gap="m">
	<div>Item 1</div>
	<div>Item 2</div>
	<div>Item 3</div>
</watt-stack>
```

### Horizontal Stack with Alignment

```html
<watt-stack direction="horizontal" align-items="center" gap="l">
	<div>Left aligned</div>
	<div>Center aligned</div>
	<div>Right aligned</div>
</watt-stack>
```

### Wrapping Stack with Distribution

```html
<watt-stack direction="horizontal" wrap="{true}" justify-content="space-between" gap="s">
	<div>Item 1</div>
	<div>Item 2</div>
	<div>Item 3</div>
</watt-stack>
```

## Best Practices

- Use the Stack component for creating consistent one-dimensional layouts
- Select gap sizes from theme spacing tokens for consistency
- Leverage wrapping for responsive layouts
- Consider cross-axis alignment when items have different sizes
- Use justify-content for distributing space between items

## Accessibility

The Stack component uses flexbox layout with semantic HTML, providing predictable spacing and alignment that works with browser zoom and text scaling.

## Technical Details

Built using CSS Flexbox with LitElement. Integrates with application theme using CSS custom properties.
