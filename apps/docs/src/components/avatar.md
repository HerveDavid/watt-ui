---
title: Avatar
description: Avatar displays a compact visual identifier for users or entities, defaulting to initials when no image is provided.
status: Ready
preview: <watt-avatar name="Laura Williams" size="xl"></watt-avatar>
---

# Avatar
The Avatar component provides a standardized way to display user or entity identifiers in industrial interfaces, following ISA-101 design guidelines for consistent visual presentation across control room and plant floor environments.

## Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | `string` | `''` | Full name to display or generate initials from |
| src | `string` | `''` | URL of the avatar image |
| size | `'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'xxl'` | `'m'` | Avatar size variant |

## CSS Custom Properties
| Property | Description | Default |
|----------|-------------|---------|
| --w-border-radius-circle | Border radius for circular shape | `50%` |
| --w-color-surface-lowered | Background color when no image | `rgb(216, 216, 216)` |
| --w-color-text | Text color for initials | `rgb(63, 63, 63)` |
| --w-font-family | Font for initials | System font stack |
| --w-font-weight | Font weight for initials | `400` |
| --w-size-icon-xs | Extra small size | `10px` |
| --w-size-icon-s | Small size | `12px` |
| --w-size-icon-m | Medium size | `16px` |
| --w-size-icon-l | Large size | `24px` |
| --w-size-icon-xl | Extra large size | `36px` |
| --w-size-icon-xxl | Double extra large size | `72px` |

## Usage
```html
<!-- Basic avatar with initials -->
<watt-avatar name="John Smith"></watt-avatar>

<!-- Avatar with image -->
<watt-avatar 
  name="Jane Wilson"
  src="/images/jane.jpg">
</watt-avatar>

<!-- Different sizes -->
<watt-avatar name="Alex Brown" size="xs"></watt-avatar>
<watt-avatar name="Alex Brown" size="s"></watt-avatar>
<watt-avatar name="Alex Brown" size="m"></watt-avatar>
<watt-avatar name="Alex Brown" size="l"></watt-avatar>
<watt-avatar name="Alex Brown" size="xl"></watt-avatar>
<watt-avatar name="Alex Brown" size="xxl"></watt-avatar>
```

## Guidelines
Do:

Use consistent avatar sizes within the same context
Provide alt text through the name property for accessibility
Use appropriately sized and optimized images
Consider the viewing distance when selecting avatar size
Ensure sufficient contrast for initials against the background

Don't:

Mix different avatar sizes in the same list or group
Use very small sizes (xs, s) in touch interfaces
Leave the name property empty
Load overly large images for small avatars
Use non-square aspect ratio images

## Size Variants
The avatar supports six size variants optimized for different use cases:

xs (10px): Compact lists, dense information displays
s (12px): Secondary identification in tables
m (16px): Default size for most interfaces
l (24px): Primary identification in lists
xl (36px): Featured user displays
xxl (72px): Profile headers, prominent displays

## Image Handling
The component:

Maintains a 1:1 aspect ratio for all sizes
Crops images to fill circular container
Uses CSS object-fit for proper image scaling
Falls back gracefully to initials when image fails
Supports standard image formats (jpg, png, webp)

## Accessibility
The avatar component:

Provides semantic role="img" for screen readers
Uses aria-label with full name for accessibility
Maintains sufficient contrast for initials
Ensures images have proper alt text
Scales appropriately for different display densities