# Abdul Khaliq React Portfolio

A standalone React/Vite version of the portfolio. The original HTML portfolio in the parent folder remains unchanged. The app includes Home, About, Skills, Projects, Journey, and Contact pages.

## Publish this React portfolio to GitHub Pages

The `react-portfolio` folder is the repository root for this version. Open this folder itself in VS Code (not its parent folder), then:

1. Sign in to GitHub in VS Code.
2. Open **Source Control** and choose **Publish to GitHub**. Create a new repository; a public repository is the simplest option for a public portfolio.
3. Wait for the initial push to finish. The included GitHub Actions workflow builds and deploys the site whenever you push to the `main` branch.
4. On GitHub, open the repository's **Settings > Pages** and set **Build and deployment > Source** to **GitHub Actions**.
5. Open the Pages URL shown in **Settings > Pages** after the deployment workflow finishes.

After setup, edit the files in this folder and use **Source Control > Commit** and **Sync Changes** in VS Code to publish updates. The older HTML portfolio outside this folder is not included in this React repository.

## Run locally

From this folder, run:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. Use the navigation to move between pages. The app uses hash-based routes and relative asset paths so it works under a GitHub Pages repository URL (for example, `https://username.github.io/repository/#/projects`). To create a production build, run `npm run build`; use `npm run preview` to preview that build locally.

## Included interactions

- Separate responsive pages with active navigation states
- Page transitions, scroll-triggered section/card reveals, and coordinated hover animations across the site
- Project search and category filtering
- Project screenshot galleries with large homepage cover previews, animated scroll/swipe transitions, zoom/pan, and thumbnails
- Project details dialogs (close with Escape or click outside)
- Animated custom cursor enabled by default on desktop, with an interactive hover state and system-cursor toggle
- Copy-email action and Formspree contact form
- Social links on the Home and Contact pages, plus subtle CRT scanlines and hover glitch effects
- Motion respects the visitor's reduced-motion accessibility preference
- WebP-compressed portfolio images, lazy-loaded page code, and deferred offscreen screenshots
- Darker near-black page atmosphere with restrained maroon highlights

Optimized portfolio images are stored in `public/Img` so this app can be built independently of the original site; the original portfolio images in the parent `Img` folder are unchanged.

The social link destinations are copied from the original HTML portfolio. Its LinkedIn and TikTok links point to their general platform homepages; the Instagram link points to the `@aaliiiqq_` profile.

## Add project screenshots

Project galleries can have different numbers of screenshots: UniReserve includes public pages and signed-in student views, while Student Hub has four. To add or replace a screenshot:

1. Put the screenshot file in `public/Img` (for example, `public/Img/UniReserve-dashboard.png`).
2. In `src/Pages.jsx`, find that project's `gallery` array and add it with `publicAsset('Img/UniReserve-dashboard.png')`.
3. Update the slot's `label` to describe the screen.

Each project card features one large homepage preview inside a browser-inspired frame. Select it to open the screenshot carousel, where the current screen is centered between angled previews of its neighboring screens. Scroll over the framed image or swipe horizontally to slide through the gallery, or select a neighboring preview or thumbnail to jump to a screen. Use the zoom buttons to adjust magnification and drag a zoomed image to pan. The UniReserve gallery has 12 screenshots: five public pages (homepage, availability, facilities, equipment, and booking steps) and seven signed-in student views (dashboard, booking overview, calendar, booking selection, facilities, issue reporting, and contact). Signed-in views were captured using a synthetic demo account; account/profile details are excluded.
