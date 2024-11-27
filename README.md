# Watt UI Components

> Where Industrial Clarity Meets Operational Safety

A collection of Web Components built with Lit.js following ISA 101 standards for industrial environments.

## Prerequisites

- Node.js 18 or higher
- pnpm 8 or higher (`npm install -g pnpm`)
- Modern browser supporting Web Components

## Features

- 🏭 Built for industrial environments
- 🔒 Follows ISA 101 HMI guidelines
- 🎨 Consistent design patterns
- ♿ Accessible components
- 🌐 Framework agnostic
- 📱 Touch-friendly with PPE support

## Installation

```bash
pnpm add @watt-ui/components
```

## Usage

### Import styles

```js
import '@watt-ui/components/theme.css';
```

### Use components

```html
<!-- Button Component -->
<watt-button variant="primary">Start Process</watt-button>

<!-- Icon Component --> 
<watt-icon name="valve" active></watt-icon>
```

## Components

### Button

Standard button component with industrial-focused variants.

```html
<!-- Default button -->
<watt-button>Default Action</watt-button>

<!-- Primary button -->
<watt-button variant="primary">Main Action</watt-button>

<!-- Danger button -->
<watt-button variant="danger">Critical Action</watt-button>

<!-- Dashed button -->
<watt-button variant="dashed">Expandable Action</watt-button>

<!-- Plain button -->
<watt-button variant="plain">Subtle Action</watt-button>

<!-- Loading state -->
<watt-button loading>Processing...</watt-button>

<!-- Disabled state -->
<watt-button disabled>Unavailable</watt-button>
```

Properties:
- `variant`: "default" | "primary" | "danger" | "dashed" | "plain"
- `disabled`: boolean
- `loading`: boolean

Events:
- `watt-click`: Emitted on button click

### Icon

Industrial process icons following ISA standards.

```html
<!-- Basic usage -->
<watt-icon name="valve"></watt-icon>

<!-- Active state -->
<watt-icon name="pump1" active></watt-icon>

<!-- Custom size -->
<watt-icon name="motor" style="--watt-icon-size: 48px;"></watt-icon>
```

Available icons:
- Process Equipment: valve, pump1, pump2, motor, actuator
- Flow Indicators: arrow, arrowLong, flow
- Status: circle, triangle, triangleWarning, diamondWarning
- Measurement: measurePoint, measurer

Properties:
- `name`: IconName (see type definition for all options)
- `active`: boolean

CSS Custom Properties:
- `--watt-icon-size`: Icon size (default: 24px)
- `--watt-icon-color`: Icon color (default: currentColor)

## Design System

Watt UI follows specific design principles for industrial environments:

1. **Design for the Environment**: Optimized for both plant floor and control room
2. **Information Over Decoration**: Focus on operational value
3. **Support Critical Decision Making**: Clear status visibility
4. **Respect Environmental Constraints**: PPE and lighting conditions
5. **Prioritize Operator Safety**: Prevent accidental activation
6. **Reduce Cognitive Load**: Consistent patterns and grouping
7. **Ensure System Performance**: Quick feedback and loading

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build
```

## Browser Support

- Chrome (and Chromium based browsers)
- Firefox
- Safari
- Edge

## Contributing

We welcome contributions! Please see our contributing guide for details.

## License

MIT © Watt UI

## Acknowledgments

Built following ISA 101 standards for Human Machine Interfaces in industrial automation.