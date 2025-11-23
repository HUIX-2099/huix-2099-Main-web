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

## Additional Inspiration (Industrial Label Aesthetic)
- **Oversized display glyphs**: Use very large, blocky display letters or numerals as background anchors for sections (opacity 5–12%).
- **Mono metadata blocks**: Left or right aligned columns with monospaced text for specs like `TYPE`, `CAT NO`, `VOLUME`, `DATE`, `INDEX`.
- **Arrow and code marks**: Sparse directional arrows or short codes (e.g., `DE ➜`, `RK‑2`) to guide scanning; keep subtle and functional.
- **Tables/indices**: Compact lists with bracketed indices like `[01]`, `[02]` and right‑aligned page/route refs (e.g., `p. 12`).
- **Barcode/ID block (optional)**: A small, low‑contrast rectangle with faux barcode/UPC and short ID strings for a technical vibe.
- **Dot/diacritic accents**: Rare, geometric accents in headlines to echo industrial signage; do not reduce legibility.
- **Material feel**: Neutral paper‑like backgrounds with hairline rules; avoid heavy boxes.

## Practical UI Patterns To Add
- **Spec Panel**: A bordered mono block listing contact and system info.
  - Labels in uppercase mono, values in regular mono.
  - Example rows: `EMAIL`, `PHONE`, `LOCATION`, `HOURS`, `CAT NO`, `REV`.
- **Index List**: A two‑column compact list using bracketed indices and right‑aligned refs.
  - Ideal for site maps, FAQs, or quick jumps.
- **ID Footer Strip**: A thin bottom strip featuring year, site code, short hash, and a tiny arrow.

## Micro‑Typography Specs
- **Mono sizes**: 12–14px for metadata; 10–11px for footnotes.
- **Letter‑spacing**: +0.06em to +0.12em for uppercase labels.
- **Rules**: 1px hairlines; 2–4px spacing offset above/below for rhythm.
- **Big numerals**: 10–16rem depending on breakpoint; opacity 0.05–0.12.
- **Grids**: Use 12‑col with 1–3 col spans for metadata rails.

## Where To Apply Next
- **Contact page**: Add a Spec Panel with mono labels and values; optional small arrow marker and ID footer strip.
- **FAQ**: Use an Index List with `[01]…[07]` styling for the questions overview.
- **Projects**: Add a tiny barcode/ID block on detail pages; keep contrast low.
