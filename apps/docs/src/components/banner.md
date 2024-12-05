---
title: Banner
description: Banner displays prominent messages to highlight important interface updates or conditions in industrial control systems.
status: Ready
preview_component: './../../previews/Banner.svelte'
---

# Banner
The Banner component implements ISA-101 guidelines for displaying prominent messages and alerts in industrial interfaces, ensuring clear communication of system status and important notifications.

## Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'info' \| 'danger' \| 'warning' \| 'success'` | `'info'` | Visual style variant |

## CSS Custom Properties
| Property | Description | Default |
|----------|-------------|---------|
| --w-font-family | Banner text font | System font stack |
| --w-font-size-m | Text size | `14px` |
| --w-line-height | Text line height | `1.5` |
| --w-space-m | Padding and margin | `16px` |
| --w-banner-border-radius | Corner radius | `5px` |
| --w-banner-box-shadow | Box shadow | Card shadow |
| --w-transition-quickly | Link hover transition | `0.05s` |

## Usage
```html
<!-- Info banner -->
<watt-banner>
  System maintenance scheduled for tonight.
</watt-banner>

<!-- Warning notification -->
<watt-banner variant="warning">
  Temperature approaching upper limit.
</watt-banner>

<!-- Critical alert -->
<watt-banner variant="danger">
  Emergency shutdown initiated.
</watt-banner>

<!-- Success message -->
<watt-banner variant="success">
  Calibration completed successfully.
</watt-banner>

<!-- With link -->
<watt-banner variant="info">
  New firmware available. <a href="#">Update now</a>
</watt-banner>
```

## Guidelines
Do:
- Use appropriate variants for message severity
- Keep messages clear and concise
- Position banners prominently in the interface
- Include actionable information when relevant
- Maintain consistent placement across screens

Don't:
- Display multiple banners simultaneously
- Use for non-critical information
- Place in cluttered interface areas
- Hide essential system status details
- Mix different message styles

## States
The banner provides these visual variants:
- Info: General system notifications
- Warning: Caution or alert conditions
- Danger: Critical system alerts
- Success: Confirmation messages

Each variant uses distinct colors and styling aligned with ISA standards.

## Accessibility
The component:
- Uses semantic HTML structure
- Provides sufficient color contrast
- Supports keyboard navigation for links
- Works with screen readers
- Scales appropriately for readability

## Best Practices
For industrial interfaces:
- Reserve danger variant for critical system alerts
- Ensure visibility in various lighting conditions
- Consider control room viewing distances
- Coordinate with alarm management systems
- Follow plant-specific notification protocols