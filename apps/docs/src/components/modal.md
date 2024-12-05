---
title: Modal
description: The Modal component implements ISA-101 standards for overlay dialogs in industrial interfaces, providing focused interaction for critical operations and confirmations.
status: Ready
preview_component: './../../previews/Modal.svelte'
---

# Modal
The Modal component follows ISA-101 guidelines for modal dialogs in industrial control systems, ensuring clear focus on important operations while maintaining context and accessibility.

## Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| open | `boolean` | `false` | Controls modal visibility |
| size | `'s' \| 'm' \| 'l' \| 'xl'` | `'m'` | Modal width preset |
| returnValue | `string` | `''` | Dialog return data |
| scrollable | `boolean` | `false` | Enable content scrolling |

## CSS Custom Properties
| Property | Description | Default |
|----------|-------------|---------|
| --w-font-family | Text font | System font stack |
| --w-space-m | Standard padding | `16px` |
| --w-space-s | Footer gap | `8px` |
| --w-space-xs | Close button padding | `4px` |
| --w-space-xl | Max height offset | `36px` |
| --w-border-radius | Corner radius | `3px` |
| --w-color-overlay | Backdrop color | Overlay color |
| --w-box-shadow-modal | Modal shadow | Modal shadow |
| --w-transition-slowly | Animation duration | `0.2s` |
| --w-index-modal | Stack order | `1000` |

## Usage
```html
<!-- Basic modal -->
<watt-modal>
  <div slot="header">Confirm Operation</div>
  <p>Do you want to proceed?</p>
  <div slot="footer">
    <watt-button @click="${() => modal.close()}">Cancel</watt-button>
    <watt-button variant="primary">Confirm</watt-button>
  </div>
</watt-modal>

<!-- Different sizes -->
<watt-modal size="l">
  <div slot="header">Equipment Details</div>
  <!-- Content -->
</watt-modal>

<!-- Scrollable content -->
<watt-modal scrollable>
  <div slot="header">Process History</div>
  <!-- Long content -->
</watt-modal>

<!-- With return value -->
<watt-modal @close="${(e) => console.log(e.target.returnValue)}">
  <!-- Content -->
</watt-modal>
```

## Guidelines
Do:
- Use for critical operations
- Provide clear headers
- Include confirmation actions
- Keep content focused
- Preserve process context

Don't:
- Nest multiple modals
- Use for routine tasks
- Hide essential information
- Block emergency actions
- Overload with content

## Events
| Name | Detail | Description |
|------|--------|-------------|
| close | `undefined` | Modal was closed |
| cancel | `undefined` | Close was triggered |

## Slots
| Name | Description |
|------|-------------|
| header | Modal title area |
| default | Main content |
| footer | Action buttons area |

## States
The modal supports:
- Open: Visible state
- Closed: Hidden state
- Scrollable: Content overflow
- Different sizes: Width presets
- Animated: Enter/exit transitions

## Accessibility
The component:
- Traps keyboard focus
- Supports escape key
- Uses ARIA attributes
- Manages focus restoration
- Provides backdrop click

## Best Practices
For industrial interfaces:
- Use for critical confirmations
- Maintain alarm visibility
- Consider control room workflow 
- Follow plant procedures
- Keep emergency access clear