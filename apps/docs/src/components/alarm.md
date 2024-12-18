---
title: Alarm
description: Alarm component displays industrial process alerts following ISA-101 standards, with priority-based visual indicators and status information.
status: Ready
preview: <watt-alarm priority="1" value="480.1" unit="psi" blinking></watt-alarm>
---

# Alarm
The Alarm component provides a standardized way to display process alerts in industrial interfaces, following ISA-101 design guidelines for consistent visual presentation across control room and plant floor environments.

## Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| priority | `0 \| 1 \| 2 \| 3 \| 4` | `0` | Alarm priority level from lowest (0) to highest (4) |
| value | `number` | `undefined` | Optional measurement value to display |
| unit | `string` | `undefined` | Optional unit for the measurement value |
| suppressed | `boolean` | `false` | Whether the alarm is suppressed |
| blinking | `boolean` | `false` | Whether the alarm indicator should blink |

## CSS Custom Properties
| Property | Description | Default |
|----------|-------------|---------|
| --alarm-size | Size of the alarm indicator | `48px` |
| --w-color-status-danger | Highest priority alarm color | `rgb(226, 32, 40)` |
| --w-color-status-warning | High priority alarm color | `rgb(245, 225, 27)` |
| --w-color-status-highlight | Low priority alarm color | `rgb(145, 106, 173)` |
| --w-color-status-info | Diagnostic alarm color | `rgb(71, 92, 167)` |
| --w-color-text | Value text color | `rgb(63, 63, 63)` |
| --w-color-text-weak | Unit text color | `rgb(145, 145, 145)` |
| --w-font-family | Font for value display | `System font stack` |
| --w-font-size-s | Value text size | `0.75rem` |
| --w-font-size-xs | Unit text size | `0.6875rem` |
| --w-space-xs | Spacing between elements | `4px` |

## Usage
```html
<!-- Basic alarm indicator -->
<watt-alarm priority="4"></watt-alarm>

<!-- Alarm with measurement value -->
<watt-alarm 
  priority="3" 
  value="450.3"
  unit="psi">
</watt-alarm>

<!-- Suppressed alarm -->
<watt-alarm 
  priority="2" 
  suppressed>
</watt-alarm>

<!-- Blinking alarm -->
<watt-alarm 
  priority="1" 
  blinking>
</watt-alarm>
```

## Guidelines
Do:
- Use consistent alarm priorities within the same system
- Display relevant measurement values when applicable
- Follow ISA-101 color coding conventions
- Use blinking indicators sparingly for critical situations
- Provide clear visual hierarchy through priority levels

Don't:
- Mix different alarm shapes within the same priority level
- Use custom colors outside the ISA-101 specification
- Overuse blinking indicators
- Leave priority undefined
- Ignore color contrast for value display

## Priority Levels
The alarm supports five priority levels with associated shapes and colors:

- Priority 1 (Square, Red): Highest priority, urgent alarms
- Priority 2 (Triangle, Yellow): High priority alarms
- Priority 3 (Circle, Orange): Normal priority alarms
- Priority 4 (Triangle, Magenta): Low priority alarms
- Priority 0 (Diamond, Blue): Diagnostic events

## States
The component supports several states:
- Normal: Solid color fill with priority-specific shape
- Suppressed: White background with colored border
- Blinking: Animated opacity for urgent attention
- With Value: Additional measurement display

## Value Display
The component:
- Shows optional numeric values
- Supports unit display
- Uses proper typography scaling
- Maintains clear visual hierarchy
- Ensures optimal readability

## Accessibility
The alarm component:
- Uses semantic HTML structure
- Maintains sufficient color contrast
- Supports screen reader announcements
- Provides clear visual states
- Follows WCAG guidelines for animation