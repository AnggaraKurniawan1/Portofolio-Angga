# DESIGN.md — Anggara Kurniawan Portfolio
> Open Design Pattern · Visual Brand Contract

---

## Visual Theme & Atmosphere

**Aesthetic:** Linear-inspired — dark-first, clean, minimal, developer-grade  
**Tone:** Professional, modern, trustworthy, technically precise  
**Style Family:** Monochromatic dark base with brand purple-blue accent  

---

## Color System

| Token                   | Light Mode  | Dark Mode   | Usage                        |
|-------------------------|-------------|-------------|------------------------------|
| `--color-brand`         | `#5E6AD2`   | `#5E6AD2`   | Primary CTA, links, accents  |
| `--color-brand-light`   | `#8B95E0`   | `#8B95E0`   | Hover states, dark mode text |
| `--color-brand-dark`    | `#4B56B5`   | `#4B56B5`   | Pressed/active states        |
| `--color-accent` (green)| `#10B981`   | `#10B981`   | Status online, success       |
| `--color-accent-amber`  | `#F59E0B`   | `#F59E0B`   | Awards, achievements, GPA    |
| `--color-accent-purple` | `#A78BFA`   | `#A78BFA`   | Secondary tags, gradients    |
| `--color-bg`            | `#F8FAFC`   | `#0E0F14`   | Page background              |
| `--color-bg-alt`        | `#F1F5F9`   | `#13141A`   | Alternate section background |
| `--color-surface`       | `#FFFFFF`   | `#16181F`   | Card/component background    |
| `--color-surface-raised`| `#F8FAFC`   | `#1C1E28`   | Nested/inner areas           |
| `--color-border`        | `#E2E8F0`   | `#272A35`   | Card borders, dividers       |
| `--color-text-primary`  | `#0F172A`   | `#F1F5F9`   | Headings, labels             |
| `--color-text-secondary`| `#475569`   | `#94A3B8`   | Body copy, descriptions      |
| `--color-text-muted`    | `#94A3B8`   | `#4B5563`   | Timestamps, meta info        |

---

## Typography

- **Font Family:** Inter, Plus Jakarta Sans, system-ui
- **Mono Font:** JetBrains Mono, Fira Code (for code snippets)
- **Heading Scale:** `font-extrabold tracking-tight`, sizes 7xl→3xl
- **Body:** `text-sm` or `text-base`, `leading-relaxed`
- **Labels/Meta:** `text-xs font-semibold uppercase tracking-wider`

---

## Spacing & Layout

- **Max Content Width:** `max-w-7xl mx-auto` with `px-4 sm:px-6 lg:px-8`
- **Section Vertical Padding:** `py-20 md:py-28`
- **Card Internal Padding:** `p-5 sm:p-6` or `p-6 sm:p-7`
- **Grid Gaps:** `gap-5` or `gap-6 lg:gap-7`

---

## Border Radius

| Token          | Value  | Usage                        |
|----------------|--------|------------------------------|
| `--radius-sm`  | `6px`  | Inner chips, tech badges     |
| `--radius-base`| `10px` | Buttons, inputs, pills       |
| `--radius-md`  | `14px` | Icon containers, small cards |
| `--radius-lg`  | `20px` | Main cards (od-surface)      |
| `--radius-xl`  | `28px` | Hero sections, big cards     |

---

## Component Library

### `od-surface`
Main card container. Uses `--color-surface`, `--color-border`, `--shadow-sm`.  
On hover: border shifts to `rgba(94,106,210,0.4)`.

### `od-pill`
Small label badge. Text `11px`, uppercase, tracking-wide. Variants:
- `od-pill-brand` — purple-blue
- `od-pill-success` — emerald green  
- `od-pill-amber` — amber/gold

### `od-btn-primary`
Brand CTA. `background: var(--color-brand)`, white text, `shadow-od-brand`.

### `od-btn-secondary`
Ghost/outline button. `var(--color-surface)` background, `var(--color-border)` border.

### `od-section-label`
Section header chip. Brand color, uppercase, 11px.

### `od-skill-chip`
Inline skill tag. Surface-raised background, 12px.

### `od-grid-bg`
Subtle dot/line grid background for Hero section.

---

## ✅ Do

- Use CSS variables from `tokens.css` — never hardcode hex values in JSX
- Apply `od-surface` class to all cards
- Use `od-section-label` for every section header
- Use `od-pill` variants for all badge/tag elements
- Maintain left-aligned text in Hero section
- Keep all skills labeled as "Advanced"

## ❌ Avoid

- Hardcoding Tailwind colors like `bg-blue-600` for semantic decisions
- Using `rounded-3xl` — prefer `rounded-od-lg` (`var(--radius-lg)`)
- Mixing `glassmorphism` classes with `od-surface` on the same element
- Centering the Hero content block
- Adding IoT-related content

---

## Sections Map

| Section      | Background         | Key Component     |
|--------------|--------------------|-------------------|
| Hero         | `--color-bg` + grid| Left-aligned, glow blobs |
| Stats        | `--color-bg`       | Horizontal metric bar |
| About        | `--color-bg`       | 2-col: pillars + edu card |
| Skills       | `--color-bg-alt`   | Filtered 2-col card grid |
| Projects     | `--color-bg`       | Filtered 3-col card grid |
| Experience   | `--color-bg-alt`   | Timeline with connector line |
| Achievements | `--color-bg`       | 2-col: awards + certs |
| Contact      | `--color-bg-alt`   | 2-col: quick links + form |
| Footer       | `--color-surface`  | 3-col: brand, credit, actions |
