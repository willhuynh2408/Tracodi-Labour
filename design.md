# Design System Document
 
## 1. Overview & Creative North Star: "The Structural Monolith"
 
This design system is engineered to reflect the precision, scale, and unwavering stability of a Labour infrastructure leader. Moving away from the cluttered, text-heavy patterns of traditional corporate portals, we adopt a **"Structural Monolith"** philosophy. 
 
This approach treats the interface as a physical architectural site. We utilize intentional asymmetry to guide the eye, expansive white space to denote scale, and high-contrast editorial typography to convey authority. By layering surfaces rather than boxing content, we create a digital experience that feels as grounded and permanent as a skyscraper.
 
---
 
## 2. Colors
 
The palette is a sophisticated interplay between the energetic corporate Red (`primary`) and a deep, reliable Blue (`secondary`), grounded by a complex range of tectonic greys.
 
### Color Tokens (Material Design Convention)
- **Primary (`#b90014`):** The "Pulse." Used for high-impact CTAs and critical brand highlights.
- **Secondary (`#0c5fae`):** The "Support." Used for professional accents, links, and secondary visual anchors.
- **Surface Scale:** 
    - `surface`: `#fbf9f9` (The foundational canvas)
    - `surface-container-low`: `#f5f3f3`
    - `surface-container-high`: `#e9e8e7`
    - `surface-container-highest`: `#e3e2e2`
 
### Visual Principles
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Structural definition must be achieved through background color shifts. For example, a content block using `surface-container-low` should sit directly against a `surface` background to define its boundaries.
*   **Surface Hierarchy & Nesting:** Treat the UI as layers of fine paper. An inner card (`surface-container-lowest`) should feel "lifted" by being placed on a slightly darker background (`surface-container-low`).
*   **The "Glass & Gradient" Rule:** To provide "soul" to the infrastructure theme, use a subtle linear gradient for primary actions (transitioning from `primary` to `primary_container`). For floating navigation bars or overlays, use Glassmorphism (20px backdrop-blur) with a semi-transparent `surface` tint.
 
---
 
## 3. Typography
 
The system utilizes a dual-font strategy to balance industrial strength with modern readability.
 
*   **Display & Headlines (Plus Jakarta Sans):** A geometric sans-serif that feels engineered and contemporary. 
    - **Display-LG (3.5rem):** Used for "Hero" statements that command attention.
    - **Headline-MD (1.75rem):** Used for section titles, providing a clear, authoritative entry point.
*   **Body & Labels (Inter):** A highly legible typeface for technical and corporate data.
    - **Body-LG (1rem):** Standard reading size for high-value copy.
    - **Label-MD (0.75rem):** Used for metadata, figure captions, and small industrial markers.
 
**Editorial Hierarchy:** Utilize high contrast in scale. A `Display-LG` title should sit near `Body-MD` text to create a sophisticated, asymmetrical tension that feels more like a high-end magazine than a generic website.
 
---
 
## 4. Elevation & Depth
 
We eschew "flat" design in favor of **Tonal Layering**. Depth is a functional tool to signify importance.
 
*   **The Layering Principle:** Depth is "stacked." High-priority components (like a project inquiry card) should utilize `surface-container-lowest` (pure white) to visually pop against the `surface-container-low` (pale grey) background of a page section.
*   **Ambient Shadows:** For elements that truly float (modals/dropdowns), use "Atmospheric Shadows."
    - `Blur: 40px | Spread: 0 | Opacity: 6% | Color: on-surface`
    - This mimics the natural diffusion of light in a wide-open construction environment.
*   **The "Ghost Border" Fallback:** If a container requires a border for accessibility (e.g., in a high-density data table), use `outline-variant` at 15% opacity. Never use a 100% opaque border.
 
---
 
## 5. Components
 
### Buttons
- **Primary:** High-contrast `primary` background with `on-primary` text. Use `radius-sm` (0.125rem) to maintain a sharp, industrial feel.
- **Secondary:** Use a "Ghost" style—`outline-variant` at 20% opacity with `secondary` text.
- **State Transition:** On hover, primary buttons should shift toward the `primary_container` color with a subtle 2px vertical lift.
 
### Cards & Sections
- **Construction:** Cards must never use dividers. Separate content using the Spacing Scale (minimum 2rem padding).
- **Image Integration:** Images of construction sites should use a subtle `primary` color overlay at 5% to unify photography with the brand palette.
 
### Input Fields
- **Styling:** Use `surface-container-high` for the field background with a `radius-none` or `radius-sm`. 
- **States:** The active state is signaled by a 2px `primary` bottom-border only, reinforcing the "grounded" aesthetic.
 
### Signature Component: The "Stat Block"
For an infrastructure firm, data is king. Create a component for "Years of Growth" or "Kilometers Built" using `display-lg` primary-colored numbers paired with `label-md` uppercase text, set against a `surface-container-highest` background.
 
---
 
## 6. Do's and Don'ts
 
### Do
*   **DO** use extreme vertical margins (4rem+) between sections to allow the brand "room to breathe."
*   **DO** use full-bleed imagery to showcase the scale of infrastructure projects.
*   **DO** align text to a rigid left-axis to emphasize structural reliability.
 
### Don't
*   **DON'T** use 1px solid black or grey lines to separate content; it looks dated and "boxed-in."
*   **DON'T** use rounded corners above `radius-md` (0.375rem). The brand should feel sharp, precise, and architectural, not "bubbly."
*   **DON'T** use generic stock photography. Ensure all imagery has a consistent high-contrast, professional grade.