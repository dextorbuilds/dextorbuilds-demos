# Beauora home sections for Shopify (Dextor Builds package, v2 conversion build)

Plain Liquid + CSS, no apps, no build step. Sections are prefixed `dextor-` and styled by `assets/dextor-home.css` (classes prefixed `dx-`), so they will not clash with an existing theme. Built for Online Store 2.0 themes (Dawn, Horizon and similar).

## DEMO-ONLY items (read first)
- **Reviews are DEMO.** `dextor-reviews` ships with 4 sample reviews labelled "Sample review / Demo" and a visible banner "Demo reviews, replace with real customer reviews." beauora.co shows no reviews. Replace each review block with real customer text and names (or use a reviews app), then clear the "Demo label" and "Demo note" settings. Each review shows its own stars only; there is no aggregate rating.
- **Stock photos are representative only** (Pexels, not Beauora, labelled on the page). Replace them via the image pickers in the sections, then clear the "photo label" settings and the footer credit note.
- Everything else (names, prices, shades, copy, FAQ, shipping/returns, newsletter offer) comes from beauora.co public pages; verify before launch.

## What is in the package
```
sections/dextor-announcement.liquid   announcement bar (header group). Default: free standard shipping over $50, 30-day returns
sections/dextor-header.liquid         centered-logo header + Shop button (header group)
sections/dextor-hero.liquid           value proposition, primary + secondary CTA, reassurance line, arch trio
sections/dextor-trust.liquid          trust strip (blocks: icon + text)
sections/dextor-featured-collection.liquid   exactly 3 products (product pickers), Add to Bag
sections/dextor-steps.liquid          how it works: 3 steps from the real product steps (blocks, image pickers)
sections/dextor-cta-band.liquid       reusable CTA band with background photo (used twice)
sections/dextor-why.liquid            why choose us: checklist of real facts + feature cards (blocks)
sections/dextor-brand-story.liquid    brand story with photo
sections/dextor-reviews.liquid        DEMO reviews (blocks: stars, text, author, tag)
sections/dextor-shipping.liquid       shipping and returns cards (blocks)
sections/dextor-faq.liquid            FAQ accordion (blocks, 6 real Q&As)
sections/dextor-newsletter.liquid     newsletter (Shopify customer form)
sections/dextor-footer.liquid         footer (footer group)
sections/dextor-sticky-bar.liquid     sticky mobile shop bar
templates/index.json                  wires 13 sections in order (hero, trust, featured, steps, cta1, why, story, reviews, shipping, faq, cta2, newsletter, sticky)
assets/dextor-home.css                all styles
assets/*.webp, logo.png               product shots (from beauora.co) and representative stock photos, used as fallbacks
examples/header-group.example.json, footer-group.example.json   reference for the groups
```
Every section has a `{% schema %}` with settings (and blocks where it makes sense), so it is editable in the theme editor (Customize).

## Install (option A: upload in the code editor)
1. Online Store > Themes > the theme (duplicate it first) > ... > Edit code.
2. Assets > Add a new asset: upload `dextor-home.css` and every image in `assets/`.
3. Sections > Add a new section: for each file create `dextor-xxx` (without `.liquid`) and paste the contents. (Or use Shopify CLI: copy the folders into the theme and `shopify theme push`.)
4. Templates: if your theme already has `templates/index.json`, keep a copy, then replace its contents with ours (or add the entries to yours). Sections can also be added in the editor via "Add section" > Dextor ...
5. Header and footer: in the editor, open the header group, add "Dextor announcement" and "Dextor header" (remove the theme's own), and in the footer group add "Dextor footer". `examples/` shows the JSON equivalent; do NOT upload those example files as `header-group.json`/`footer-group.json` over the theme's without merging.
6. Fonts: add to `layout/theme.liquid` before `</head>`:
   `<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Public+Sans:wght@400;600&display=swap" rel="stylesheet">`
   Each section loads `dextor-home.css` itself.

## Option B: paste only
Paste each `.liquid` file into a new section in Edit code and upload only `dextor-home.css` and the images. Then add the sections in Customize on the Home page.

## Map the 3 products
1. Customize > Home page > "Dextor featured 3": click Product 1, 2, 3 and pick Matte Lip Stain, Hydrating Lip Oil, Liquid Blush. The card shows image, title, first variant title (the shade, e.g. Twilight), price and an Add to Bag form that posts to the cart.
2. "Dextor hero": pick the same 3 products for the arches (cut-out shots on white work best; `mix-blend-mode: multiply` removes the white). Empty = bundled images.
3. The live store currently exposes no collection or product pages (`/collections/all` is empty, `/products.json` is empty) while the homepage sells three items via custom code. Create the products (and a collection) before using the pickers.

## What to adjust
- Text, colors, links, images are editable in the theme editor; palette variables sit at the top of `dextor-home.css` (`--dx-rose`, `--dx-ink`, `--dx-blush`).
- Remove the old custom homepage blocks (hard-coded product cards, popup, FAQ) so content is not duplicated.
- Announcement, trust strip, hero line, shipping cards and FAQ reuse the shipping/returns terms from the store FAQ ("Standard: 8-14 business days ($9.99, free over $50). Express: 7-12 business days ($29.99)", "30 days from delivery for unused products"). The store has no shipping/refund policy pages; verify and publish them in Settings > Policies.
- Newsletter: uses Shopify's `customer` form with tag `newsletter`. The offer text "10% off your first order" and code GLOW10 are as on beauora.co; the discount must exist in Shopify Admin > Discounts.
- "Made in North America", vegan and cruelty-free are the store's own claims; confirm before launch.
- Sticky bar: shows on mobile only after scrolling, hides over the newsletter. Remove the section to disable.
- Test on a duplicated theme and preview before publishing.

## Source and flags
Content from public pages of beauora.co. Product photos are from beauora.co product cards, shown for demo preview. Lifestyle photos are representative Pexels stock (see CREDITS.md). Liquid was validated as JSON schemas only, not run in a live theme.
