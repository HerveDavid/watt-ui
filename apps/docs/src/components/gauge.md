---
title: Gauge
description: The Gauge component displays process variable measurements according to ISA-101 standards, with thresholds and real-time value indicators.
status: Ready
preview_component: './../../previews/Gauge.svelte'
---

# Gauge
The Gauge component implements ISA-101 visualization guidelines for process measurements, providing clear visual indication of current values, setpoints, and operating ranges in industrial control systems.

## Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | `number` | `0` | Current value to display |
| min | `number` | `0` | Minimum scale value |
| max | `number` | `100` | Maximum scale value |
| markerValue | `number` | `50` | Setpoint or threshold marker |
| unit | `string` | `''` | Engineering unit label |

## CSS Custom Properties
| Property | Description | Default |
|----------|-------------|---------|
| --gauge-width | Gauge width | `40px` |
| --gauge-height | Gauge height | `200px` |
| --w-font-family | Text font | System font stack |
| --w-font-size-s | Value text size | `12px` |
| --w-color-surface | Background color | Surface color |
| --w-color-border | Border color | Border color |
| --w-color-text | Text/marker color | Text color |
| --w-transition-slowly | Value transition | `0.2s` |

## Usage
```html
<!-- Basic gauge -->
<watt-gauge 
  value="75"
  min="0" 
  max="100">
</watt-gauge>

<!-- With setpoint and units -->
<watt-gauge 
  value="125"
  min="0"
  max="200"
  markerValue="150"
  unit="PSI">
</watt-gauge>

<!-- Process temperature -->
<watt-gauge 
  value="82.5"
  min="50"
  max="150"
  markerValue="85"
  unit="°C">
</watt-gauge>

<!-- Level indicator -->
<watt-gauge 
  value="65"
  min="0"
  max="100"
  markerValue="75"
  unit="%">
</watt-gauge>
```

## Guidelines
Do:
- Use consistent scales within process areas
- Show clear setpoint/threshold markers
- Display appropriate engineering units
- Size gauges for viewing distance
- Maintain visual alignment in groups

Don't:
- Mix different unit systems
- Overcrowd displays with gauges
- Use unnecessarily wide ranges
- Hide critical threshold markers
- Neglect proper scale labeling

## States
The gauge displays these visual elements:
- Fill bar: Current value indication
- Marker line: Setpoint/threshold
- Value indicator: Current value pointer
- Scale labels: Value and setpoint
- Unit label: Engineering units

## Accessibility
The component:
- Provides numeric value display
- Uses sufficient contrast ratios
- Supports keyboard focus
- Maintains readability at scale
- Works with screen readers

## Best Practices
For industrial interfaces:
- Group related measurements
- Align with process flow
- Use consistent ranges per unit type
- Consider control room visibility
- Match plant engineering standards