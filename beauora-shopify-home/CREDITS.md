# Credits and flags (beauora-shopify-home, v2 conversion build)

## DEMO-ONLY
- **Reviews are DEMO.** The 4 reviews are sample text written for layout (credited "Sample review", tagged "Demo"), starred individually, no aggregate rating. The page shows the label "Demo reviews, replace with real customer reviews." beauora.co has no reviews. Same label is in the Liquid section settings and SHOPIFY-DEPLOY.md.
- Lifestyle photos are **representative stock** (labelled on the page), not Beauora's.

## Images
- Real, from beauora.co product pages / homepage, shown for demo preview (belong to Beauora; resized): img/stain.webp, oil.webp, blush.webp (product cards) and img/logo.png. Beauora's site has no other photos (the other CDN files are favicon/logo).
- Representative stock from Pexels (free licence, not used in other demos; checked against all other CREDITS.md/pages):
  - look-lipstick.webp: Pexels 34967330, Guillermo Berlin (https://www.pexels.com/photo/woman-applying-pink-lipstick-close-up-portrait-34967330/)
  - look-gloss.webp: Pexels 31141638, photographer name not captured (https://www.pexels.com/photo/close-up-of-lipstick-application-on-woman-s-lips-31141638/)
  - look-blush.webp: Pexels 6713324, Alex Reedson (https://www.pexels.com/photo/a-woman-applying-blush-on-6713324/)
  - story-blush.webp: Pexels 6874132, Pavel Danilyuk (https://www.pexels.com/photo/a-woman-putting-a-blush-on-6874132/)
  - flatlay-pink.webp: Pexels 5492849, Boris Pavlikovsky (https://www.pexels.com/photo/flatlay-of-beauty-items-5492849/)
  - gloss-dark.webp: Pexels 37195158, Jelena Cvetkovic (https://www.pexels.com/photo/pink-lip-gloss-with-applicator-on-minimalist-background-37195158/)
- No AI images.
Data: /workspace/batch10/data.md (public pages only; re-fetched Oct 19, 2026, unchanged; nothing logged into).

## Real vs demo-only
Real (from beauora.co): brand, hero copy, 3 products with names/shades/prices, USP lines, About copy, 6 FAQ answers, shipping $9.99 / free over $50 / 8-14 days, express $29.99 / 7-12 days, 30-day returns for unused products, hello@beauora.co, Instagram, "10% off your first order" offer and GLOW10, tagline.
Our own wording: headings such as "One look, in three steps", "Ready for your one look?", "Clear up front.", "What customers could say here"; step descriptions only rearrange real product copy; "3 products from $29.37" is the lowest of the shown prices.
Demo-only: the 4 sample reviews, stock photos, preview-only newsletter JS.

## Flags
- The store has NO product pages: /collections/all is empty, /products.json is {"products":[]}, /products/<guess> 404. "Add to Bag" buttons therefore link to the real https://beauora.co/collections/all (not to the store's custom add-to-cart code).
- No product descriptions exist; none shown beyond About-page copy.
- Prices ($31.24, $34.36, $29.37) as on the homepage; unverified for checkout.
- Shipping/returns only exist in the FAQ text; no shipping, refund or terms policy pages (only privacy). FAQ wording differs slightly between home and /pages/faq (we use /pages/faq).
- "Vegan, cruelty-free, made in North America", delivery times and the offer are the store's own claims, unverified.
- Announcement bar: real shipping/returns info replaces the earlier 10% line (the 10% offer remains in the newsletter as shown on the store).
- The original site shows no hero photo; hero is an arch composition of the real product shots. USP icons are our own line icons.
- Pexels 31141638 photographer name not captured.
- Sticky mobile bar and CTA bands are our additions (conversion structure).
- Liquid not tested in a live Shopify theme (schemas JSON-validated only).
