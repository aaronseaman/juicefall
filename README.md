# Juicefall

The public web pages for **Juicefall**, a falling-jelly puzzle for iPhone, served by GitHub Pages at
<https://juicefall.com/> (the domain is registered at Porkbun; its DNS points at GitHub Pages). This repository holds
only these pages: no app code or app assets.

| Page | URL | Where it is used |
|---|---|---|
| Home | https://juicefall.com/ | App Store Connect: Marketing URL (optional) |
| About and FAQ | https://juicefall.com/about.html | The facts search engines and AI assistants read |
| Press | https://juicefall.com/press.html | The press kit, `press/juicefall-press-kit.zip` |
| Support | https://juicefall.com/support.html | App Store Connect: Support URL; the game's About screen |
| Privacy Policy | https://juicefall.com/privacy.html | App Store Connect: App Privacy; the game's About screen |
| Terms of Use | https://juicefall.com/terms.html | The game's About screen; the App Store description |

The old addresses under `https://aaronseaman.github.io/juicefall/` redirect here, so the links inside version 1.0 and in
App Store Connect keep working; move App Store Connect's URLs to the domain with the next version.

Support requests come in by email (the address on the support page) or as GitHub issues through the form in
`.github/ISSUE_TEMPLATE/support.yml`.

Plain HTML and one stylesheet, light and dark, with Nunito (subset, `fonts/`, under the OFL) for headings. Edit a page,
commit, and GitHub Pages publishes it within a minute. Keep the privacy policy in step with the one inside the game
(its date and wording), and the About page's questions in step with its FAQPage data.

- `app-store.js` shows "Coming to the App Store · November 2026" until Apple's lookup lists the app, then puts in
  Apple's badge and the App Store link by itself.
- `llms.txt`, `robots.txt` and `sitemap.xml` are for search engines and AI assistants. The `*.txt` file named by a
  long hex key is the IndexNow key: after changing pages, send their addresses to `https://api.indexnow.org/indexnow`
  with that key.
- Public copy says only what Juicefall does; it never names or compares with another game.
