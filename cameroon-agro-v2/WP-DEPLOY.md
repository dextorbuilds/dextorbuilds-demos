# Loading this site on WordPress

The site is plain static HTML, CSS and vanilla JS: `index.html`, `style.css`, `img/`. There is no build step and no framework. All asset paths are relative (`img/...`, `style.css?v=N`). The only external requests are Google Fonts (Anybody, JetBrains Mono) and the Google Maps embed/links.

## Option A: classic theme (full control, recommended)
1. Create `wp-content/themes/cameroon-agro-v2/` and copy in `style.css`, `img/` and the contents below.
2. Add a first-line theme header to `style.css`:
   `/* Theme Name: Cameroon Agro  Version: 1.0 */`
3. Create `index.php` from `index.html`:
   - Remove the `<link rel="stylesheet" href="style.css?v=3">` and `<link rel="preload" ... img/hero.webp>` lines; put `<?php wp_head(); ?>` before `</head>` and `<?php wp_footer(); ?>` before `</body>`.
   - Enqueue the CSS in `functions.php`: `wp_enqueue_style('ca', get_stylesheet_uri(), [], '1.0');`
   - Replace every `img/` with `<?php echo get_template_directory_uri(); ?>/img/`.
4. Activate the theme and set Settings > Reading > static front page if wanted.

## Option B: page template inside an existing theme
1. Copy `style.css` (rename `cameroon-agro.css`) and `img/` into `wp-content/themes/<your-theme>/cameroon-agro-v2/`.
2. Create `page-cameroon-agro.php` with `<?php /* Template Name: Cameroon Agro */ ?>` on top, paste the `<body>` markup, and enqueue `cameroon-agro.css` with `wp_enqueue_style` on that template only.
3. Change image paths to `<?php echo get_theme_file_uri('cameroon-agro-v2/img/'); ?>...`.
4. Create a Page, choose the "Cameroon Agro" template, publish.

## Option C: plain upload (no theme)
Upload the whole folder to `/cameroon-agro-v2/` on the server (or `wp-content/uploads/`) and link to it; relative paths work unchanged.

## Notes
- Asset paths to adjust: `style.css`, `img/*.webp` (hero preload and `<img>`, 6 product images, reach banner, 2 gallery images).
- Keep the inline `<script>` at the end of the body (fade-in on scroll; respects reduced motion). Also fine to move it to a `.js` file and enqueue it.
- Before going live, confirm the placeholder-looking contact details (see CREDITS.md flags) and swap the stock photos for the business's own.
