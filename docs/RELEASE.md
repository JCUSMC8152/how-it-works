# How It Works — release qualification

Product: How It Works — See inside. Understand more.
Owner: Crawford Group Holdings, LLC, under CGH Chief of Staff.
Release date: October 22, 2026 (America/New_York).

## Scope and architecture

Fifty distinct original SVG lessons with stable integer IDs and descriptive routes. Each has an objective, whole-system introduction, guided stages, play/pause/restart/step controls, a mechanism-specific activity, reset, persistent in-page mode state, glossary, misconception, source review date and model limits. Five catalog subject filters contain ten lessons each. Search/filter state is shareable through query parameters. Related lessons and six verified What If links are included. No accounts, paid APIs, added analytics or advertising.

The platform is independent of What If. What If source and deployment were inspected but not changed. Existing CGH shield artwork was downloaded from the corporate site and resized without redesign. Static HTML gives each route its own title, canonical and social metadata. Only a selected lesson's JSON is fetched. Shared JS has no runtime dependencies. The homepage loads no simulation code.

## Models and boundaries

All diagrams are schematic, not engineering forecasts or anatomical scale drawings. Several activities use finite predefined states to make causal distinctions visible. Numeric examples are deterministic and expose assumptions. The QR activity is explicitly a non-decodable teaching symbol with predefined damage outcomes; it is not a QR decoder. AI token selection is hand-authored, not inference or hidden reasoning. Wind output uses an invented normalized curve. Medical topics are general education; financial figures are fictional US examples.

Primary/institutional documentation is linked on each page. Source URL checks and editorial evidence are in source-audit.json. Source snapshots were temporary research material and are excluded from the repository. Some providers can return different content or block automated requests; link checks alone do not establish completeness of a source.

## Verification

Model/registry suite: 54 checks pass. It covers all activity states and diagram generation, stable IDs and routes, and independent force/travel, gear, circuit, inventory and paycheck arithmetic checks.

All 100 core browser journeys passed: all 50 lessons at desktop 1440×1000 and phone 393×852. Each activity option, reset, stepping, play/pause, mode persistence, deep loading, catalog search/filter and browser history was exercised. Sixteen automated axe scans (five representative lessons in all three modes plus catalog) reported no violations. Bounds checks of every activity-state SVG found no clipped text. Browser qualification and production results are recorded in separate JSON evidence. Desktop 1440×1000 and phone 393×852 are emulations, not a physical Samsung/TalkBack test. Automated accessibility scans supplement keyboard, reduced-motion, responsive and text-alternative checks. They do not certify WCAG conformance.

## Hosting and rollback

Cloudflare account: existing owner account.
Pages project: cgh-how-it-works (new, separate static project).
Hostname: howitworks.crawfordgroupholdings.com (new CNAME to cgh-how-it-works.pages.dev).
Repository: https://github.com/JCUSMC8152/how-it-works
CGHMain working folder: C:\Users\crawf\Documents\HowItWorks
Qualification deployment: 98b1c7e5-4567-464d-9546-1c935a3e7de3.

Production commit, deployment and public verification are added after qualification. Upload success alone is not production acceptance. Future releases should retain the prior verified production deployment and use Pages rollback if needed. For this first launch, removing only its new CNAME and custom-domain mapping reverses public launch without changing other applications.

## Remaining limits

Physical phone and screen reader testing, independent accessibility review and independent subject-matter review have not been performed. Simulations remain deliberately simplified as documented at every activity. The platform does not claim certification or endorsement by referenced institutions.

Production verification identified zone email obfuscation rewriting the HTML and injecting a decoding script. The app now sends Cache-Control: no-transform to preserve the qualified response body. This response header is scoped to this Pages application and does not change other CGH websites.
