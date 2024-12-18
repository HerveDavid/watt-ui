---
title: Indicator
description: Industrial indicator component following ISA-101 standards for displaying process values and alarm states in control room and plant floor environments.
status: Ready
preview: <watt-indicator type="emergency" value="34.8" unit="watt" label="Label"></watt-indicator>
---

# Indicator
The Indicator component provides a standardized way to display process values and alarm states in industrial interfaces, following ISA-101 design guidelines for consistent visual presentation across control room and plant floor environments.

## Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | `'emergency' \| 'high-priority' \| 'low-priority' \| 'diagnostic' \| 'suppressed' \| 'nominal'` | `'nominal'` | Type of indicator following ISA-101 alarm hierarchy |
| value | `number` | `0` | Numeric value to display |
| unit | `string` | `''` | Engineering unit to display after the value |
| label | `string` | `''` | Optional descriptor text after the indicator |

## CSS Custom Properties
| Property | Description | Default |
|----------|-------------|---------|
| --w-color-status-danger | Emergency background color | `rgb(226, 32, 40)` |
| --w-color-status-warning | High priority background color | `rgb(245, 225, 27)` |
| --w-color-status-highlight | Low priority background color | `rgb(145, 106, 173)` |
| --w-color-status-info | Diagnostic background color | `rgb(71, 92, 167)` |
| --w-color-status-neutral | Nominal background color | `rgb(240, 240, 240)` |
| --w-color-border-danger | Emergency border color | `rgb(226, 32, 40)` |
| --w-color-border-warning | High priority border color | `rgb(245, 225, 27)` |
| --w-color-border-highlight | Low priority border color | `rgb(145, 106, 173)` |
| --w-color-border-info | Diagnostic border color | `rgb(71, 92, 167)` |
| --w-color-border-neutral | Nominal/Suppressed border color | `rgb(192, 192, 192)` |
| --w-color-text-on-accent | Text color on colored backgrounds | `rgb(255, 255, 255)` |
| --w-color-text | Default text color | `rgb(63, 63, 63)` |
| --w-font-family | Font family | System font stack |
| --w-font-weight | Regular font weight | `400` |
| --w-font-weight-strong | Bold font weight for priority numbers | `670` |
| --w-space-xs | Small padding | `4px` |
| --w-space-s | Medium padding | `8px` |
| --w-border-radius-s | Border radius | `3px` |

## Usage
```html
<!-- Emergency indicator -->
<watt-indicator 
  type="emergency"
  value="34.8"
  unit="psig"
  label="Emergency">
</watt-indicator>

<!-- High priority indicator -->
<watt-indicator 
  type="high-priority"
  value="29.7"
  unit="psig"
  label="High Priority">
</watt-indicator>

<!-- Low priority indicator -->
<watt-indicator 
  type="low-priority"
  value="25.1"
  unit="psig"
  label="Low Priority">
</watt-indicator>

<!-- Diagnostic indicator -->
<watt-indicator 
  type="diagnostic"
  value="15.2"
  unit="psig"
  label="Diagnostic">
</watt-indicator>

<!-- Suppressed indicator -->
<watt-indicator 
  type="suppressed"
  value="0.1"
  unit="psig"
  label="Suppressed">
</watt-indicator>

<!-- Nominal indicator -->
<watt-indicator 
  type="nominal"
  value="14.7"
  unit="psig"
  label="Nominal">
</watt-indicator>
```

## Guidelines

Do:
- Use consistent indicator types within the same context
- Follow ISA-101 alarm hierarchy for type selection
- Always provide engineering units for process values
- Use appropriate type based on alarm severity
- Ensure sufficient contrast for text visibility
- Place related indicators close together for easy comparison

Don't:
- Mix different indicator styles in the same group
- Use emergency type for non-critical values
- Omit engineering units for process values
- Use custom colors outside the ISA-101 palette
- Place too many indicators in a single view
- Override the built-in priority numbering

## Type Hierarchy

The indicator supports six types following ISA-101 alarm hierarchy:

- emergency (1): Highest priority alarms requiring immediate action
- high-priority (2): Important process deviations needing attention
- low-priority (3): Minor process deviations 
- diagnostic (4): Information and system status
- suppressed (8): Acknowledged or disabled alarms
- nominal: Normal operating conditions

## Value Formatting

The component:
- Displays one decimal place precision
- Right-aligns numeric values
- Separates units with appropriate spacing
- Uses consistent font size for readability
- Maintains fixed width for stable layout
- Supports positive and negative values

## Accessibility

The indicator component:
- Provides semantic role="status" for alarm states
- Uses aria-label with priority numbers
- Maintains sufficient color contrast
- Includes visible text labels
- Follows WCAG 2.1 guidelines
- Supports keyboard navigation

## Industrial Environment Considerations

The component is designed for:
- Control room displays with multiple monitors
- Plant floor HMI panels
- Various lighting conditions
- Touch and non-touch interfaces
- Extended viewing periods
- Critical process monitoring