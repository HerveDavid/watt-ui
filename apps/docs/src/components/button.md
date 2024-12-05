---
title: Button
description: Buttons trigger interface actions. Use primary style once per section for main action, with secondary styles for additional options.
status: Ready
preview_type: html
preview: <watt-button>Button</watt-button>
---


# Button

The Button component implements ISA-101 design standards for industrial controls, providing consistent visual feedback and touch-optimized interactions suitable for both control room and plant floor environments.

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'primary' \| 'danger' \| 'dashed' \| 'plain'` | `'default'` | Button style variant |
| disabled | `boolean` | `false` | Disables button interactions |
| loading | `boolean` | `false` | Shows loading spinner |
| square | `boolean` | `false` | Forces square aspect ratio |

## CSS Custom Properties

| Property | Description | Default |
|----------|-------------|---------|
| --w-font-family | Button text font | System font stack |
| --w-space-xs | Minimum padding | `4px` |
| --w-space-s | Icon gap spacing | `8px` |
| --w-space-m | Horizontal padding | `16px` |
| --w-border-radius | Corner radius | `3px` |
| --w-font-size-m | Text size | `14px` |
| --w-line-height-form | Text line height | `20px` |
| --w-transition-slowly | Animation duration | `0.2s` |
| --w-size-icon-s | Loading spinner size | `12px` |
| --w-size-icon-l | Touch target base size | `24px` |

## Usage

```html
<!-- Default button -->
<watt-button>Cancel</watt-button>

<!-- Primary action -->
<watt-button variant="primary">Save Changes</watt-button>

<!-- Danger action -->
<watt-button variant="danger">Delete</watt-button>

<!-- Dashed style -->
<watt-button variant="dashed">Filter</watt-button>

<!-- Plain text style -->
<watt-button variant="plain">Learn More</watt-button>

<!-- Loading state -->
<watt-button loading>Processing...</watt-button>

<!-- Disabled state -->
<watt-button disabled>Unavailable</watt-button>
```

## Guidelines

Do:
- Use one primary button per section for the main action
- Position primary actions consistently (typically right-aligned)
- Maintain minimum touch target size of 40x40px for plant floor use
- Use loading state for actions that take time to complete
- Provide clear visual feedback for all button states

Don't:
- Place multiple primary buttons in one section
- Disable buttons without explanation or alternative path
- Use button styles inconsistently across similar actions
- Mix touch-optimized and standard-sized buttons in same interface

## States

The button supports the following visual states:

- Default: Normal interactive state
- Hover: Visual feedback on mouse hover
- Focus: Keyboard focus indication with shadow
- Loading: Shows spinner during processing
- Disabled: Indicates non-interactive state
- Active: Press/touch feedback

## Accessibility

The component:
- Supports keyboard navigation and focus
- Maintains sufficient contrast ratios
- Provides loading state announcement
- Scales appropriately for touch input
- Works with screen readers

## Events

| Name | Detail | Description |
|------|--------|-------------|
| watt-click | `{ originalEvent: MouseEvent }` | Fired on button click/tap |