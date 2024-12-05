---
title: Message
description: The Message component displays process notifications and alerts following ISA-101 guidelines for industrial control systems.
status: Ready
preview_component: './../../previews/Message.svelte'
---

# Message
The Message component implements ISA-101 standards for displaying process notifications, alerts, and status messages in industrial interfaces, ensuring clear communication of system events and conditions.

## Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| href | `string` | `undefined` | Optional navigation link |
| highlight | `boolean` | `false` | Temporary highlight effect |
| unread | `boolean` | `false` | Unread message indicator |

## CSS Custom Properties
| Property | Description | Default |
|----------|-------------|---------|
| --w-font-family | Text font | System font stack |
| --w-font-size-m | Message text size | `14px` |
| --w-font-size-s | Footer text size | `12px` |
| --w-space-s | Vertical padding | `8px` |
| --w-space-m | Horizontal padding | `16px` |
| --w-space-xs | Element spacing | `4px` |
| --w-line-height | Text line height | `1.5` |
| --w-color-border | Border color | Border color |
| --w-color-surface-raised | Highlight color | Surface color |

## Usage
```html
<!-- Basic message -->
<watt-message>
  Process started: Batch #12345
</watt-message>

<!-- Unread alert -->
<watt-message unread>
  Warning: Pressure approaching limit
</watt-message>

<!-- With footer info -->
<watt-message>
  Maintenance completed: Pump #2
  <span slot="footer">Timestamp: 14:30:25</span>
</watt-message>

<!-- With link -->
<watt-message href="/details">
  New alarm condition detected
</watt-message>

<!-- Highlighted message -->
<watt-message highlight>
  Emergency shutdown initiated
</watt-message>
```

## Guidelines
Do:
- Use clear, concise message text
- Include relevant timestamps
- Prioritize critical notifications
- Group related messages
- Maintain consistent message structure

Don't:
- Mix different message styles
- Overuse highlighting
- Hide important status details
- Omit essential context
- Use overly technical language

## Methods
| Name | Parameters | Description |
|------|------------|-------------|
| focus | `(options?: FocusOptions)` | Sets focus to message |
| blur | `()` | Removes focus |
| click | `()` | Triggers click action |

## States
The message supports these states:
- Default: Standard appearance
- Unread: With indicator dot
- Highlight: Temporary emphasis
- Hover: Interactive feedback
- Focus: Keyboard navigation
- Link: Clickable navigation

## Accessibility
The component:
- Uses semantic HTML structure
- Supports keyboard navigation
- Provides focus indicators
- Preserves link behavior
- Works with screen readers

## Best Practices
For industrial interfaces:
- Follow alarm hierarchy
- Include process context
- Use consistent terminology
- Consider message priority
- Integrate with logging systems

## Slots
| Name | Description |
|------|-------------|
| default | Main message content |
| footer | Additional information |