---
title: Badge
description: Badges are status indicators that highlight the state of items, typically used in industrial interfaces to show equipment or process status according to ISA-101 standards.
status: Ready
preview_type: html
preview: <watt-badge variant="warning"s>Badge</watt-badge>
---

# Badge
The Badge component implements ISA-101 design standards for status indication in industrial environments, providing clear visual state feedback optimized for both control room displays and plant floor interfaces.

## Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'neutral' \| 'warning' \| 'success' \| 'danger' \| 'highlight' \| 'info'` | `'neutral'` | Visual style variant |
| strong | `boolean` | `false` | Enables stronger visual emphasis |

## CSS Custom Properties
| Property | Description | Default |
|----------|-------------|---------|
| --w-font-family | Badge text font | System font stack |
| --w-font-size-s | Text size | `12px` |
| --w-space-xs | Vertical padding | `4px` |
| --w-space-s | Horizontal padding | `8px` |
| --w-line-height-caption | Text line height | `1.3` |
| --w-font-weight | Text weight | `400` |
| --w-border-radius-pill | Corner radius | `999px` |

## Usage
```html
<!-- Default/Neutral badge -->
<watt-badge>Idle</watt-badge>

<!-- Warning status -->
<watt-badge variant="warning">Warning</watt-badge>

<!-- Success/Normal status -->
<watt-badge variant="success">Running</watt-badge>

<!-- Critical/Danger status -->
<watt-badge variant="danger">Alarm</watt-badge>

<!-- Info status -->
<watt-badge variant="info">Maintenance</watt-badge>

<!-- Strong emphasis -->
<watt-badge variant="danger" strong>Critical</watt-badge>
```

## Guidelines
Do:
- Use consistent status colors across the interface
- Reserve red badges for critical/alarm conditions
- Ensure sufficient contrast in all lighting conditions
- Keep text content brief and clear
- Consider colorblind users by using both color and text

Don't:
- Use multiple variants to represent the same state
- Overuse strong emphasis which reduces impact
- Rely solely on color to convey status
- Use badges for interactive elements
- Mix different status color schemes

## States
The badge supports these visual variants:
- Neutral: Default state for general status
- Warning: Caution or warning conditions
- Success: Normal operating conditions
- Danger: Critical or alarm conditions
- Info: Informational states
- Highlight: Emphasized states

Each variant has a standard and strong emphasis version.

## Accessibility
The component:
- Uses WCAG 2.1 compliant contrast ratios
- Provides text labels with status colors
- Maintains legibility at various scales
- Works effectively in different lighting
- Supports screen readers

## Best Practices
For industrial interfaces:
- Group related status indicators together
- Position badges consistently in layouts  
- Use strong variants sparingly for emphasis
- Apply status colors according to plant standards
- Consider viewing distance when sizing badges