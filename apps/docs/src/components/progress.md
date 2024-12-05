---
title: Progress
description: The Progress component implements ISA-101 guidelines for displaying process progression and batch operation status in industrial control systems.
status: Ready
preview: <watt-progress-bar label="Chargement en cours..."></watt-progress-bar>
---

# Progress
The Progress component follows ISA-101 standards for visualizing process advancement, providing clear feedback on operation status in industrial interfaces.

## Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | `number` | `undefined` | Current progress value |
| max | `number` | `100` | Maximum progress value |
| label | `string` | `'Current progress'` | Accessible description |

## CSS Custom Properties
| Property | Description | Default |
|----------|-------------|---------|
| --w-font-family | Text font | System font stack |
| --w-color-surface-lowered | Track color | Surface color |
| --w-color-accent | Progress color | Accent color |
| --w-border-radius-pill | Corner radius | `999px` |
| --w-transition-slowly | Animation speed | `0.2s` |

## Usage
```html
<!-- Basic progress -->
<watt-progress-bar 
  value="75"
  label="Operation progress">
</watt-progress-bar>

<!-- Custom maximum -->
<watt-progress-bar 
  value="45"
  max="200"
  label="Temperature ramp">
</watt-progress-bar>

<!-- Indeterminate state -->
<watt-progress-bar 
  label="System initializing">
</watt-progress-bar>

<!-- Batch progress -->
<watt-progress-bar 
  value="80"
  label="Batch completion">
</watt-progress-bar>
```

## Guidelines
Do:
- Provide clear progress labels
- Use consistent scales
- Show operation context
- Indicate indeterminate states
- Match process timing

Don't:
- Mix different progress scales
- Leave progress unlabeled
- Use for instant operations
- Hide essential status info
- Mislead about completion

## Methods
| Name | Parameters | Description |
|------|------------|-------------|
| focus | `(options?: FocusOptions)` | Sets focus to progress |
| blur | `()` | Removes focus |
| click | `()` | Triggers click event |

## States
The progress bar supports:
- Determinate: Known progress
- Indeterminate: Unknown duration
- Empty: 0% complete
- Partial: In progress
- Complete: 100% done

## Accessibility
The component:
- Uses ARIA progressbar role
- Provides value updates
- Includes descriptive labels
- Supports keyboard focus
- Announces status changes

## Best Practices
For industrial interfaces:
- Indicate batch progression
- Show process phase status
- Match operation timelines
- Consider control room visibility
- Update at appropriate intervals

## Animation
The progress bar includes:
- Smooth value transitions
- Indeterminate animation
- Visual feedback states
- Consistent motion
- Performance optimization