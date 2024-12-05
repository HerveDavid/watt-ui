---
title: Tab
description: The Tab component implements ISA-101 navigation guidelines for organizing process views and equipment controls in industrial interfaces.
status: Ready
preview_component: './../../previews/Tab.svelte'
---

# Tab
The Tab component follows ISA-101 standards for interface organization, providing clear navigation between different views and control panels in industrial systems.

## Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| selected | `boolean` | `false` | Active state |

## CSS Custom Properties
| Property | Description | Default |
|----------|-------------|---------|
| --w-font-family | Text font | System font stack |
| --w-font-size-m | Text size | `14px` |
| --w-font-weight | Normal weight | `400` |
| --w-font-weight-active | Selected weight | `500` |
| --w-space-s | Minimal padding | `8px` |
| --w-space-m | Standard padding | `16px` |
| --w-color-text | Active color | Text color |
| --w-color-text-weak | Inactive color | Weak text |
| --w-color-accent | Indicator color | Accent color |
| --w-transition-slowly | Animation speed | `0.2s` |

## Usage
```html
<!-- Basic tabs -->
<watt-tab>Overview</watt-tab>
<watt-tab selected>Controls</watt-tab>
<watt-tab>Settings</watt-tab>

<!-- Process views -->
<watt-tab>Status</watt-tab>
<watt-tab>Parameters</watt-tab>
<watt-tab>Alarms</watt-tab>

<!-- Equipment controls -->
<watt-tab>Operation</watt-tab>
<watt-tab>Maintenance</watt-tab>
<watt-tab>History</watt-tab>

<!-- System configuration -->
<watt-tab>Configuration</watt-tab>
<watt-tab>Diagnostics</watt-tab>
<watt-tab>Documentation</watt-tab>
```

## Guidelines
Do:
- Use clear, descriptive labels
- Group related functions
- Maintain consistent order
- Show active state clearly
- Consider touch interaction

Don't:
- Create deep tab hierarchies
- Hide critical functions in tabs
- Mix different tab styles
- Overload with too many tabs
- Use for primary navigation

## Events
| Name | Detail | Description |
|------|--------|-------------|
| watt-tab-select | `{ tab: HTMLElement }` | Tab selection changed |

## States
The tab supports:
- Default: Unselected state
- Selected: Active state
- Hover: Interactive feedback
- Touch: Enlarged touch targets
- Focus: Keyboard navigation

## Accessibility
The component:
- Uses semantic roles
- Supports keyboard control
- Shows clear selection
- Maintains focus states
- Works with screen readers

## Best Practices
For industrial interfaces:
- Follow equipment hierarchy
- Group process controls logically
- Maintain alarm visibility
- Consider operator workflow
- Match plant documentation

## Animations
The tab includes:
- Smooth color transitions
- Selection indicator animation
- Hover state feedback
- Touch interaction scaling
- Performance optimization
