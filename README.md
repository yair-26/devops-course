# DevOps Portfolio Website

A matrix-themed DevOps portfolio website with modular JavaScript and organized CSS architecture.

## Project Structure

```
Devops-course-1/
├── index.html                 # Main HTML file
├── styles.css                 # Legacy CSS (kept for backward compatibility)
├── css/
│   ├── global.css            # Global styles and base styles
│   ├── components.css        # Reusable components (buttons, cards, tags)
│   ├── sections.css          # Section-specific styles (navbar, hero, about, etc.)
│   ├── animations.css        # Keyframe animations and animation utilities
│   └── responsive.css        # Media queries and responsive design
└── js/
    └── main.js               # Business logic and interactive features
```

## CSS Architecture

### `global.css`
- Global resets and base styles
- Root HTML/body styling
- Scrollbar customization
- Selection and general element styles

### `components.css`
- Reusable UI components
- `.btn` button styles and variants
- `.tag` tag component
- `.card` card component
- Form elements (`.form-group`, `.success-message`, `.error-message`)
- Utility classes (`.flex-center`, `.grid`, `.loading`)

### `sections.css`
- Navbar styling
- Hero section
- About section
- Skills section and skill cards
- Projects section and project cards
- Contact section and form
- Footer styling

### `animations.css`
- Keyframe animations: `glitch`, `slideIn`, `fadeIn`, `slideUp`, `glow`, `pulse`
- Animation trigger class `.animate-in`
- Animation utility classes: `.glow-effect`, `.pulse-effect`

### `responsive.css`
- Mobile-first breakpoints
- Tablet breakpoints (768px and below)
- Mobile breakpoints (480px and below)
- Landscape mode
- High DPI displays
- Accessibility: reduced motion preferences

## JavaScript Business Logic

### `main.js` Classes

#### `MatrixRain`
- Canvas-based matrix rain animation
- Automatic canvas resizing
- Configurable characters and font size
- Methods: `draw()`, `handleResize()`, `stop()`

#### `SmoothScroll`
- Smooth scrolling navigation for anchor links
- PreventDefault default scroll behavior
- Smooth scroll-into-view with customizable behavior

#### `ContactForm`
- Form validation (email, required fields)
- Email validation using regex
- Form submission handling
- Success message display
- Automatic form reset after submission

#### `AnimationTrigger`
- Intersection Observer for element visibility
- Triggers CSS animations on scroll
- Applies `.animate-in` class to elements when they become visible
- Works with `.project-card` and `.skill-card` elements

### Auto-Initialization
All modules are automatically initialized on `DOMContentLoaded` event.

## Features

✨ **Modular CSS**: Separated CSS into logical, maintainable files
📱 **Responsive Design**: Mobile, tablet, and desktop optimizations
🎬 **Animations**: Smooth transitions and keyframe animations
🔧 **Business Logic**: Reusable JavaScript classes for common functionality
📝 **Contact Form**: Built-in form validation and submission handling
♿ **Accessibility**: Reduced motion preferences, keyboard navigation support
🔗 **Smooth Navigation**: SPA-like smooth scrolling between sections

## How to Use

1. **Include in HTML**: All CSS files and JS are already linked in `index.html`
2. **Add Components**: Use component classes from `components.css` for new UI elements
3. **Create New Sections**: Add section-specific styles to `sections.css`
4. **Add Animations**: Define new animations in `animations.css`
5. **Extend JS**: Add new classes to `main.js` for additional functionality

## Responsive Breakpoints

- **Large Screens**: 1200px+
- **Tablets**: 768px and below
- **Mobile**: 480px and below
- **Landscape**: Height < 600px with landscape orientation

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with ES6 support

## Performance Optimizations

- CSS animations use GPU acceleration
- RequestAnimationFrame for smooth canvas animation
- Intersection Observer for efficient element visibility detection
- Minimal JavaScript footprint with class-based organization

## Future Enhancements

- Dark/Light theme toggle
- Additional form fields and backend integration
- Project filtering by technology
- Skill level indicators
- Blog section with markdown support
