# How It Works

**See inside. Understand more.**

Free educational platform by Crawford Group Holdings, LLC. One hundred original SVG teaching models across mechanical systems, energy, computing, the body and everyday systems. Each lesson has guided playback, a mechanism-specific virtual activity, and an extended explanation with terms, misconceptions, sources and limitations.

Production: https://howitworks.crawfordgroupholdings.com/

## Build and test

Python 3.10+ and Node 20+ are sufficient for the static build and model checks. No production dependencies, accounts, paid APIs or analytics.

```sh
python3 build.py
node --test tests/models.test.mjs
node tests/server.cjs
```

Optional browser qualification uses Playwright with Chromium (or installed Edge on Windows). Set `BASE_URL=http://127.0.0.1:4189`, `BROWSER_CHANNEL=msedge` on Windows, and optionally `PLAYWRIGHT_MODULE` to a shared Playwright installation, then run `node tests/browser.cjs`.

## Structure

- `src/lessons.json`: authoritative stable IDs, routes, instructional content, sources and controls.
- `src/models.js`: deterministic explanatory outcomes and illustrative calculations.
- `src/diagrams.js`: original, lesson-specific SVG cutaways and flow diagrams.
- `src/motion.js`: explicit schematic motion paths; motion respects pause and reduced-motion preferences.
- `src/app.js`: mode persistence, guided playback and catalog behavior.
- `build.py`: static HTML pages, individually fetched lesson data, metadata and sitemap.
- `docs/experience-manifest.json`: progress and release evidence.

Static public pages have independent direct URLs. The homepage loads no lesson JavaScript. Lesson data is fetched only for the selected experience. Shared renderer code is small and contains no external assets or dependencies.

## Publishing and rollback

Cloudflare Pages project `cgh-how-it-works`, production branch `main`, direct upload. Upload the built `dist` through the existing authorized Cloudflare connection or `wrangler pages deploy dist --project-name cgh-how-it-works`. Associate the exact source commit with deployment. The `_headers` file must be submitted as deployment configuration, not merely as a public asset. Verify custom-domain pages and source hashes after deployment.

Before replacing production, retain the current deployment ID. Roll back through Pages' deployment rollback API to that verified production deployment. For the experiences 51–100 expansion, the previous verified production deployment is `b0831b88-63d8-4668-a3ed-e2f17c33ca74`. Roll back the Pages deployment to that version if required. See `docs/DEPLOYMENT-100.json` and `docs/RELEASE-51-100.md` for this release’s evidence and source synchronization status.

All models are educational, with important limits stated beside the activity. QR decoding, AI token choice, biological responses and several operational processes are explicitly illustrative. No clinical, engineering, security or financial assessment is provided. Physical-device screen reader testing is recorded separately from automated browser testing.

Copyright 2026 Crawford Group Holdings, LLC. All rights reserved. Free access does not grant a license to redistribute the code or content.

## Experiences 51–100

The October 23 expansion adds 50 lessons (10 per subject) with four activity states each. `src/extended-data.js` holds explanatory outcomes; `src/extended-diagrams.js` contains original labeled SVG mechanisms and motion paths. `stageStates` explicitly pairs guided captions with the correct activity diagram. The complete execution prompt is in `docs/EXPERIENCES-51-100-PROMPT.md`.
