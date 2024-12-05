---
title: Breadcrumb
description: Breadcrumbs show the user's location within a process hierarchy and allow easy navigation through industrial control systems.
status: Ready
preview_component: './../../previews/Breadcrumb.svelte'
---

# Breadcrumb
The Breadcrumb component implements ISA-101 navigation guidelines for industrial interfaces, providing clear hierarchical context and efficient navigation between process areas and equipment views.

## Properties
### WattBreadcrumb
No properties - container component for breadcrumb items

### WattBreadcrumbItem
| Name | Type | Default | Description |
|------|------|---------|-------------|
| href | `string` | `undefined` | Navigation URL for the item |

## CSS Custom Properties
| Property | Description | Default |
|----------|-------------|---------|
| --w-font-family | Text font | System font stack |
| --w-font-size-m | Text size | `14px` |
| --w-space-xs | Separator spacing | `4px` |
| --w-color-text | Current location color | Text color |
| --w-color-text-link | Link color | Link color |
| --w-color-text-weak | Separator color | Muted color |
| --w-transition-quickly | Hover transition | `0.05s` |

## Usage
```html
<!-- Basic breadcrumb -->
<watt-breadcrumb>
  <watt-breadcrumb-item>Plant Overview</watt-breadcrumb-item>
  <watt-breadcrumb-item>Process Area 1</watt-breadcrumb-item>
  <watt-breadcrumb-item>Tank Farm</watt-breadcrumb-item>
</watt-breadcrumb>

<!-- With navigation links -->
<watt-breadcrumb>
  <watt-breadcrumb-item href="/overview">Plant Overview</watt-breadcrumb-item>
  <watt-breadcrumb-item href="/area-1">Process Area 1</watt-breadcrumb-item>
  <watt-breadcrumb-item>Current Location</watt-breadcrumb-item>
</watt-breadcrumb>

<!-- Equipment hierarchy -->
<watt-breadcrumb>
  <watt-breadcrumb-item>Process Area</watt-breadcrumb-item>
  <watt-breadcrumb-item>Equipment Group</watt-breadcrumb-item>
  <watt-breadcrumb-item>Specific Device</watt-breadcrumb-item>
</watt-breadcrumb>
```

## Guidelines
Do:
- Show complete path hierarchy
- Use consistent naming conventions
- Keep labels concise and clear
- Maintain logical process hierarchies
- Position breadcrumbs prominently

Don't:
- Skip hierarchy levels
- Use inconsistent terminology
- Make paths too deep (>4 levels)
- Hide essential navigation context
- Use for non-hierarchical navigation

## States
Breadcrumb items have these states:
- Current: Last item showing current location
- Interactive: Previous items with hover effects
- Default: Standard appearance for navigation
- Focus: Visual indication for keyboard navigation

## Accessibility
The component:
- Uses semantic navigation markup
- Supports keyboard navigation
- Provides clear focus indicators
- Maintains sufficient contrast
- Works with screen readers

## Best Practices
For industrial interfaces:
- Align with process control hierarchy
- Match plant area organization
- Use consistent naming with P&IDs
- Consider operator navigation patterns
- Integrate with alarm navigation