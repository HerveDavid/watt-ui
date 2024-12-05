---
title: Icon
description: Icons supplement industrial interfaces with standardized visual indicators following ISA-101 guidelines for equipment, alarms, and process states.
status: Ready
preview: <watt-ion variant="square">icon</watt-ion>
---

# Icon
The Icon component implements ISA-101 standards for industrial symbology, providing consistent visual representation of equipment, states, and conditions in process control interfaces.

## Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | `string` | `''` | Icon identifier |
| size | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'xxl'` | `'m'` | Icon size preset |
| color | `string` | `undefined` | Custom color override |
| label | `string` | `undefined` | Accessibility label |

## CSS Custom Properties
| Property | Description | Default |
|----------|-------------|---------|
| --w-size-icon-xxs | XXSmall size | `8px` |
| --w-size-icon-xs | XSmall size | `10px` |
| --w-size-icon-s | Small size | `12px` |
| --w-size-icon-m | Medium size | `16px` |
| --w-size-icon-l | Large size | `24px` |
| --w-size-icon-xl | XLarge size | `36px` |
| --w-size-icon-xxl | XXLarge size | `72px` |
| --w-color-icon | Default color | Icon color |
| --w-color-icon-hover | Hover state color | Hover color |
| --w-transition-quickly | Hover transition | `0.05s` |

## Usage
```html
<!-- Basic icon -->
<watt-icon name="valve"></watt-icon>

<!-- Different sizes -->
<watt-icon name="pump" size="s"></watt-icon>
<watt-icon name="pump" size="l"></watt-icon>

<!-- With custom color -->
<watt-icon 
  name="warning" 
  color="var(--w-color-status-danger)">
</watt-icon>

<!-- With accessibility label -->
<watt-icon 
  name="motor" 
  label="Running motor">
</watt-icon>

<!-- Process symbols -->
<watt-icon name="tank"></watt-icon>
<watt-icon name="mixer"></watt-icon>
<watt-icon name="flow"></watt-icon>
```

## Guidelines
Do:
- Use consistent icon sizes within contexts
- Provide accessibility labels for meaningful icons
- Follow ISA standards for process symbols
- Maintain visual alignment in groups
- Use appropriate color coding for states

Don't:
- Mix different icon styles
- Use decorative icons unnecessarily 
- Override standard equipment symbols
- Scale icons beyond readable sizes
- Use inconsistent color coding

## States
Icons can display:
- Default: Normal state
- Hover: Interactive feedback
- Custom color: Status indication
- Different sizes: Context appropriate
- With label: Accessible description

## Accessibility
The component:
- Supports ARIA labels
- Provides role attributes
- Scales without pixelation
- Maintains sufficient contrast
- Works with screen readers

## Best Practices
For industrial interfaces:
- Follow ISA-5.1/5.2 standards
- Use consistent equipment symbols
- Match plant documentation symbols
- Consider control room viewing distance
- Align with alarm state colors

## Static Methods
| Name | Parameters | Description |
|------|------------|-------------|
| registerResolver | `(resolver: IconResolver) => void` | Register custom icon resolver |
| registerIcon | `(name: string, svg: string) => void` | Register new icon definition |
