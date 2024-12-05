---
title: Input
description: The Input component provides a standardized text field following ISA-101 guidelines for data entry in industrial control systems.
status: Ready
preview_component: './../../previews/Input.svelte'
---

# Input
The Input component implements ISA-101 standards for data entry fields in industrial interfaces, providing consistent validation, feedback, and interaction patterns suitable for both control room and plant floor environments.

## Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | `'text' \| 'email' \| 'password' \| 'tel' \| 'url' \| 'search' \| 'number' \| 'unit' \| 'button'` | `'text'` | Input type |
| label | `string` | `''` | Field label |
| value | `string` | `''` | Input value |
| placeholder | `string` | `''` | Placeholder text |
| name | `string` | `''` | Input name |
| size | `'s' \| 'm' \| 'l'` | `'m'` | Input size |
| expand | `boolean` | `false` | Full width mode |
| disallowPattern | `string` | `undefined` | Disallowed characters pattern |
| hideLabel | `boolean` | `false` | Hide label visually |
| hint | `string` | `undefined` | Helper text |
| error | `string` | `undefined` | Error message |
| required | `boolean` | `false` | Required field |
| hideRequired | `boolean` | `false` | Hide required indicator |
| autocomplete | `string` | `'off'` | Autocomplete behavior |
| readonly | `boolean` | `false` | Read-only state |
| disabled | `boolean` | `false` | Disabled state |

## CSS Custom Properties
| Property | Description | Default |
|----------|-------------|---------|
| --w-font-family | Text font | System font stack |
| --w-font-size-s | Small text size | `12px` |
| --w-font-size-m | Medium text size | `14px` |
| --w-font-size-l | Large text size | `16px` |
| --w-space-xs | Minimal spacing | `4px` |
| --w-space-s | Small spacing | `8px` |
| --w-space-m | Medium spacing | `16px` |
| --w-border-radius | Corner radius | `3px` |
| --w-line-height-form | Input line height | `20px` |
| --w-transition-slowly | State transitions | `0.2s` |

## Usage
```html
<!-- Basic input -->
<watt-input 
  label="Flow Rate"
  type="number">
</watt-input>

<!-- With placeholder and hint -->
<watt-input 
  label="Pressure" 
  placeholder="Enter pressure value"
  hint="Value in PSI">
</watt-input>

<!-- Required field -->
<watt-input 
  label="Temperature" 
  required
  type="number">
</watt-input>

<!-- With error state -->
<watt-input 
  label="pH Level"
  error="Value out of range">
</watt-input>

<!-- Read-only display -->
<watt-input 
  label="Current Status"
  value="Running"
  readonly>
</watt-input>
```

## Guidelines
Do:
- Use clear, descriptive labels
- Provide meaningful placeholders
- Include appropriate units in labels
- Show validation feedback
- Consider input precision needs

Don't:
- Hide critical field labels
- Use placeholder as label
- Disable without explanation
- Mix different sizes in a form
- Omit required field indicators

## Methods
| Name | Parameters | Description |
|------|------------|-------------|
| select | `()` | Selects all input text |
| setSelectionRange | `(start: number, end: number, direction?: string)` | Sets text selection |
| setRangeText | `(text: string, start?: number, end?: number, mode?: string)` | Replaces text range |
| getNativeElement | `()` | Returns native input element |
| focus | `(options?: FocusOptions)` | Sets focus to input |
| blur | `()` | Removes focus from input |

## Events
| Name | Detail | Description |
|------|--------|-------------|
| watt-input | `{ value: string, originalEvent: Event }` | Fired on input |
| watt-change | `{ value: string, originalEvent: Event }` | Fired on change |
| select | `{ originalEvent: Event }` | Fired on text selection |

## States
The input supports these states:
- Default: Normal interactive state
- Focus: Active input with highlight
- Error: Invalid input indication
- Disabled: Non-interactive state
- Read-only: Display-only mode
- Required: Mandatory field indicator

## Accessibility
The component:
- Uses semantic form structure
- Provides label associations
- Supports keyboard navigation
- Shows validation states
- Works with screen readers

## Best Practices
For industrial interfaces:
- Match field precision to process needs
- Use consistent units across forms
- Provide clear validation rules
- Consider operator workflow
- Follow plant naming conventions