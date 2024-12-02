---
title: Button
description: Buttons trigger interface actions. Use primary style once per section for main action, with secondary styles for additional options.
status: Ready
preview_type: html 
preview: <watt-button>Button</watt-button>
---

# Button Component

The Button component follows ISA-101 design standards for industrial controls, providing clear visual feedback and touch-optimized interactions.

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'primary' \| 'danger' \| 'plain'` | `'default'` | Button style variant |
| disabled | `boolean` | `false` | Disables button interactions |
| loading | `boolean` | `false` | Shows loading spinner |
| type | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |

## CSS Properties

| Property | Description | Default |
|----------|-------------|---------|
| --button-min-height | Button height | `40px` |
| --button-min-width | Button width | `40px` |
| --button-spacing | Internal padding | `10px` |

## Usage

```svelte
<script>
  import Button from './Button.svelte';
</script>

<!-- Primary action -->
<Button variant="primary">Save Changes</Button>

<!-- Secondary action -->
<Button variant="default">Cancel</Button>

<!-- Danger action -->
<Button variant="danger">Delete</Button>
```

## Guidelines

Do:
- Use one primary button per section
- Position primary actions on the right
- Maintain consistent spacing between buttons
- Use touch-optimized sizing (minimum 40x40px)

Don't:
- Use multiple primary buttons in one section
- Disable buttons without explanation
- Use button groups for unrelated actions