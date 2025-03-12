# Search Input

## Overview

**Search Input** is a minimal, stylish search input component designed with modern web standards. This component provides a clean, user-centric interface for search operations with real-time text transformation. Built entirely with vanilla HTML, CSS, and JavaScript—no dependencies required—it delivers a lightweight solution for integrating search functionality into web applications with professional aesthetics and seamless interaction patterns.

The component combines a responsive design with dark-themed aesthetics, featuring automatic text capitalization for standardized input formatting.

## Preview

![Search Input Preview](https://github.com/mihaiapostol14/search-input/blob/0cda7c711b78003a55b9020de006b69c1824b802/assets/preview.png)

## Tech Stack

- **HTML5** – Semantic markup structure with Font Awesome icon integration
- **CSS3** – Modern styling with flexbox layout, dark theme, and responsive design
- **JavaScript (ES6+)** – Event-driven input processing with real-time text transformation
- **Font Awesome 6.7.2** – Icon library for search button visual representation

## Installation

```bash
git clone https://github.com/mihaiapostol14/search-input.git
cd search-input
```

## Detailed Features

### 1. **Semantic Input Component**
   - Clean HTML5 structure with accessible form elements
   - Text input field with customizable placeholder text
   - Submit button with integrated Font Awesome magnifying glass icon
   - Lightweight footprint with zero external JavaScript dependencies

### 2. **Real-Time Text Capitalization**
   - Automatic text transformation on user input
   - First character converted to uppercase; remaining characters to lowercase
   - Implemented via the `handleInputFormatting` function
   - Non-intrusive event listener pattern using native DOM APIs
   - Enhances UX by enforcing consistent text formatting

### 3. **Modern Dark Theme Design**
   - Sophisticated dark palette: Deep charcoal background (#13141F) with elevated container (#252856)
   - High-contrast white text (#fff) for accessibility compliance
   - Flexbox-based layout ensuring perfect centering and responsiveness
   - Minimal visual footprint with clean borders and rounded corners (5px radius)

### 4. **Interactive Visual States**
   - Borderless input and button design for minimalist aesthetics
   - Cursor pointer on button hover for clear call-to-action indication
   - Placeholder text styling with text-transform capitalization
   - Responsive container with max-width constraint (300px) and flexible width scaling

### 5. **Responsive Layout Architecture**
   - Viewport-aware meta tags for mobile device optimization
   - CSS grid and flexbox implementation for cross-device consistency
   - Full viewport height utilization with centered content positioning
   - Maintains visual integrity across all screen sizes

## Project Structure

```
search-input/
├── html/
│   └── index.html        # Main component markup
├── css/
│   └── style.css         # Styling and theme definitions
├── js/
│   └── script.js         # Input transformation logic
├── assets/
│   └── preview.png       # Component preview image
└── README.md
```

## Language Composition

- **HTML**: 36.8%
- **CSS**: 33.7%
- **JavaScript**: 29.5%

## Usage

Open `html/index.html` in your web browser to interact with the search input component. Begin typing to observe real-time text capitalization in action.

### Example Interaction
1. User types: `hello`
2. Component displays: `Hello`
3. User continues: `hello world`
4. Component displays: `Hello world`

## Author

[Mihai Apostol](https://github.com/mihaiapostol14)