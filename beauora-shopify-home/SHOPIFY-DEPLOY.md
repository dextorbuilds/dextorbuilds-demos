# Beauora home sections for Shopify (Dextor Builds package)

Plain Liquid + CSS, no apps, no build step. Sections are prefixed `dextor-` and styled by `assets/dextor-home.css` (classes prefixed `dx-`), so they will not clash with an existing theme. Built for Online Store 2.0 themes (Dawn, Horizon and similar).

## What is in the package
```
sections/dextor-announcement.liquid   announcement bar (header group)
sections/dextor-header.liquid         centered-logo header (header group)
sections/dextor-hero.liquid           hero + three arch product shots
sections/dextor-featured-collection.liquid   exactly 3 products (product pickers)
sections/dextor-usp.liquid            benefits row (blocks)
sections/dextor-brand-story.liquid    dark brand story
sections/dextor-faq.liquid            FAQ accordion (blocks)
sections/dextor-newsletter.liquid     newsletter (Shopify customer form)
sections/dextor-footer.liquid         footer (footer group)
templates/index.json                  wires hero, featured, usp, story, faq, newsletter
assets/dextor-home.css                all styles
assets/stain.webp oil.webp blush.webp logo.png   demo images used as fallbacks
examples/header-group.example.json, footer-group.example.json   reference for the groups
```
Every section has a `{% schema %}` with settings (and blocks where it makes sense), so it is editable in the theme editor (Customize).

## Install (option A: upload in the code editor)
1. Online Store > Themes > the theme (duplicate it first) > ... > Edit code.
2. Assets > Add a new asset: upload `dextor-home.css` and the four images.
3. Sections > Add a new section: for each file create `dextor-xxx` (without `.liquid`) and paste the contents. (Or use Shopify CLI: copy the folders into the theme and `shopify theme push`.)
4. Templates: if your theme already has `templates/index.json`, keep a copy, then replace its contents with ours (or add the six section entries to yours). Sections can also simply be added in the editor via "Add section" > Dextor ...
5. Header and footer: in the editor, open the header group, add "Dextor announcement" and "Dextor header" (remove the theme's own), and in the footer group add "Dextor footer". `examples/` shows the JSON equivalent; do NOT upload those example files as `header-group.json`/`footer-group.json` over the theme's without merging.
6. Fonts: add to `layout/theme.liquid` before `</head>`:
   `<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Public+Sans:wght@400;600&display=swap" rel="stylesheet">`
   (or add the fonts in the theme settings). Each section loads `dextor-home.css` itself.

## Option B: paste only
You can paste each `.liquid` file into a new section in Edit code and upload only `dextor-home.css`. Then add the sections in Customize on the Home page.

## Map the 3 products
1. In Customize > Home page > "Dextor featured 3": click Product 1, 2, 3 and pick the products (Matte Lip Stain, Hydrating Lip Oil, Liquid Blush). The card shows image, title, first variant title (shown as the shade, e.g. Twilight), `{{ product.price | money }}` and an Add to Bag form.
2. In "Dextor hero": pick the same 3 products for the arches (cut-out photos on a white background look best; the `mix-blend-mode: multiply` removes the white). If left empty, the bundled demo images are used.
3. The live store currently has no collection or product pages exposed (`/collections/all` is empty, `/products.json` is empty), while the homepage sells three items through custom code. Create the products (and put them in a collection) before using the pickers.

## What to adjust
- Text, colors and links are editable in the theme editor; palette variables are at the top of `dextor-home.css` (`--dx-rose`, `--dx-ink`, `--dx-blush`).
- Remove the old custom homepage blocks (the store's hard-coded product cards, popup and FAQ) so content is not duplicated.
- Newsletter: uses Shopify's `customer` form with tag `newsletter` (marketing consent settings are in Shopify Admin > Settings > Customer accounts / Checkout). The discount code GLOW10 is mentioned only in the FAQ; the discount itself must exist in Shopify Admin > Discounts.
- Reviews: none included because the store shows no real reviews. Add a reviews section only with real ones.
- Shipping/returns text is copied from the store's FAQ page ("Standard: 8-14 business days ($9.99, free over $50). Express: 7-12 business days ($29.99)"); verify against real policies before launch.
- Test on a duplicated theme and preview before publishing.

## Source and flags
Content comes from public pages of beauora.co (see `/workspace/batch10/data.md`). The three product photos are from beauora.co (homepage product cards), shown for demo preview. See CREDITS.md in the demo folder for flags.
