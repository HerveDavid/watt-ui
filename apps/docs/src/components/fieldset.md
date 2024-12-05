---
title: Fieldset
description: The Fieldset component groups related form fields together, creating a visual and logical structure aligned with ISA-101 guidelines for industrial interfaces.
status: Ready
preview_component: './../../previews/Fieldset.svelte'
---

# Fieldset
The Fieldset component implements ISA-101 form organization guidelines, providing clear visual grouping and structure for related control parameters and configuration fields in industrial interfaces.

## Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | `''` | Group heading text |
| hint | `string` | `undefined` | Helper text below content |
| error | `string` | `undefined` | Error message |
| required | `boolean` | `false` | Shows required indicator |
| hideRequired | `boolean` | `false` | Hides required indicator |
| hideLabel | `boolean` | `false` | Visually hides label |
| size | `'s' \| 'm'` | `'m'` | Controls label size |

## CSS Custom Properties
| Property | Description | Default |
|----------|-------------|---------|
| --w-font-family | Text font | System font stack |
| --w-font-size-m | Default text size | `14px` |
| --w-font-size-s | Small text size | `12px` |
| --w-space-m | Content padding | `16px` |
| --w-space-xs | Label padding | `4px` |
| --w-border-radius | Corner radius | `3px` |
| --w-line-height | Text line height | `1.5` |

## Usage
```html
<!-- Basic fieldset -->
<watt-fieldset label="Control Parameters">
  <!-- Form fields -->
</watt-fieldset>

<!-- With hint text -->
<watt-fieldset 
  label="Pressure Settings"
  hint="Enter values in PSI">
  <!-- Form fields -->
</watt-fieldset>

<!-- With error state -->
<watt-fieldset 
  label="Temperature Limits"
  error="Maximum value exceeded">
  <!-- Form fields -->
</watt-fieldset>

<!-- Required group -->
<watt-fieldset 
  label="Critical Settings" 
  required>
  <!-- Form fields -->
</watt-fieldset>

<!-- Small size -->
<watt-fieldset 
  label="Additional Options" 
  size="s">
  <!-- Form fields -->
</watt-fieldset>
```

## Guidelines
Do:
- Group logically related fields together
- Use clear, descriptive labels
- Provide helpful hint text when needed
- Indicate required field groups
- Maintain consistent sizing within forms

Don't:
- Create deeply nested fieldsets
- Hide labels without good reason
- Mix different sizes in the same form
- Overuse required indicators
- Leave error messages unclear

## States
The fieldset supports these states:
- Default: Standard appearance
- Error: Highlighted border with message
- Required: Shows required indicator
- Hidden Label: Visually hidden but accessible
- Small: Compact label size

## Accessibility
The component:
- Uses semantic fieldset/legend structure
- Maintains ARIA attributes
- Supports keyboard navigation
- Announces error messages
- Preserves screen reader context

## Best Practices
For industrial interfaces:
- Group parameters by function
- Align with process control hierarchy
- Use consistent terminology
- Consider operator workflows
- Follow plant naming conventions