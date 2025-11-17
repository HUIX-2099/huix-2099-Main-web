# Design Inspiration

A concise style reference for the project: serious, document-forward, modular. Inspired by industrial typography, editorial systems, and numbered series layouts.

## Core Principles
- **Document-first**: content-led pages with clear typographic hierarchy and generous negative space.
- **Industrial modern**: utilitarian, grid‑driven, with mono/tech display accents.
- **Series + Numbering**: prominent numeric markers (01, 02, 03…) to segment content.
- **Strict rhythm**: consistent spacing, thin rules, and subtle separators.
- **High contrast**: foreground text on neutral backgrounds; sparing accent color usage.
- **Motion = clarity**: minimal micro‑animations for entrance/hover, no flourish.

## Typography
- **Display**: bold, condensed or technical sans for large numerals/headlines.
- **Text**: legible modern sans for body copy; comfortable line-height.
- **Mono accent**: use monospace only for metadata, small labels, or UI numerals.
- **Tracking**: slight positive letter‑spacing for uppercase labels and meta.
- **Hierarchy**: H1 (xl, bold) → H2 (lg) → H3 (md) → small uppercase meta.

## Layout System
- **Header block**: left-aligned big series number + title; right-aligned meta line.
- **Rules**: hairline borders for section dividers; no heavy boxes.
- **Grids**: 12-col responsive; 1–3 col content spans depending on density.
- **Whitespace**: pad sections (top/bottom) generously to breathe.

## Components
- **Series Header**
  - Large numeral (e.g., `01`), title, subtitle/meta.
  - Thin bottom border; optional right meta like `Series / 01 · v1`.
- **Project Card (Rail)**
  - Image with subtle hover scale.
  - Top-left chip for category.
  - Meta row: `Project` label + index number.
  - Title, 2–3 line description, compact tags.
  - Clickable whole card → detail page.
- **Filters**
  - Pills for Category, Type (Major/Minor), Relation (Related/Unrelated).
  - Clear selected state: inverted foreground/background.
- **Detail Page**
  - Mirrors list header: numeral, title, meta line.
  - Hero image; 2‑column content with sidebar meta and tech tags.

## Color & Tone
- **Background**: paper‑like neutral.
- **Foreground**: near‑black text.
- **Borders**: low‑contrast hairlines for structure.
- **Accents**: used sparingly (e.g., links, active pills).

## Motion Guidelines
- **Entrance**: subtle translate/opacity (`y: 12–20px`, `opacity 0→1`, 120–300ms).
- **Hover**: image scale up to 1.03–1.05; underline/opacity shifts for links.
- **Stagger**: small delays per card (60–120ms) for rails.

## Content Model (Projects)
- `id`: slug
- `title`: string
- `category`: string
- `type`: "Major" | "Minor"
- `relation`: "Related" | "Unrelated"
- `desc`: short string
- `details`: long string
- `technologies`: string[]
- `image`: url/path

## Writing Style
- **Short, neutral**, informative. Avoid marketing superlatives.
- **Labels** in uppercase small text. **Headlines** are concise.

## Assets
- Prefer high‑res, high‑contrast imagery; center of interest visible in 16:9 and 3:2 crops.
- Keep placeholder assets minimal; replace asap.

## To Evolve
- Introduce a display font token for numerals/headlines.
- Add print‑like page furniture (running heads, folios) when appropriate.
- Build a reusable `SeriesHeader` and `ProjectCard` component in `/components`.

---
This guide encodes the aesthetic you liked: numbered editorial systems, industrial signage cues, and clean monochrome UI. Adjust tokens and scales as the library matures.
