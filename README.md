# Resolute Senior Advocates (rsaus.com)

Plain static site, hosted on Netlify. No build step.

- `site/` holds everything that gets published: one HTML file per page, `style.css`, `images/`.
- `netlify.toml` tells Netlify to publish `site/` as-is.
- `site/_redirects` and `site/_headers` handle HTTPS redirects and security headers.

To preview locally: `cd site && python3 -m http.server 8000`, then open http://localhost:8000
(use `/services.html` etc. locally; Netlify serves them at `/services`).

When adding a page, also add it to the nav in every page and to `site/sitemap.xml`.
