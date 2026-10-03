# DaeyoM

Bilingual company website for Jiangxi Dayue Microfiber New Materials Co., Ltd. (江西大越超纤新材料有限公司). The English company name is a descriptive translation; a registered English name has not been verified. Built with plain HTML, CSS, and JavaScript, with no build step, runtime dependencies, or external font requests. The layout supports desktop and mobile screens.

## Local preview

From the repository directory, run:

```sh
python3 -m http.server 8080
```

Open the [English homepage](http://localhost:8080/index.html) or the [Chinese homepage](http://localhost:8080/zh.html).

The header's **EN / 中文** links switch between these stable URLs and preserve the current section hash. Refreshing or bookmarking either page keeps its language. There is no automatic language redirect or `localStorage` preference.

## Website content

- Brand introduction and company overview
- Waterborne microfiber synthetic leather and the process described in the project filing
- Application tabs for footwear, bags, automotive interiors, and living and apparel
- Project plans with links to public government sources
- Company address and reserved contact fields

The mobile menu closes with Escape. Application tabs support the arrow keys, Home, and End. The page includes visible keyboard focus, a skip link, and support for reduced-motion preferences.

## Files to update

- `index.html`: English website copy, project figures, address, and contact details.
- `zh.html`: Chinese version with matching section anchors. Keep factual content and source links consistent across both pages. At the company's request, phone, email, and WeChat remain blank and appear as dashes in both languages. No invented contact information or inquiry form is used.
- `styles.css`: Shared responsive layout, language links, and the black, white, and orange brand palette.
- `script.js`: Shared mobile navigation, application tabs, language-link section preservation, and the footer year. Mobile-menu ARIA labels follow each document's `lang` attribute.
- `SOURCES.md`: Company sources, limits of the project data, and information that has not been verified.
- `assets/daeyom-brand-source.png`: Original logo image supplied by the user. An SVG viewBox displays the logo area without redrawing the mark.
- `assets/material-hero.jpg`: AI-generated material concept image, not a photograph of the factory or an actual product. The generation record is in `assets/ASSETS.md`.
- `CNAME`: Custom domain for GitHub Pages, currently `daeyom.com`.

## Language branches

- `main`: Bilingual website used for deployment, with English in `index.html` and Chinese in `zh.html`.
- `chinese`: Historical Chinese website preserved at commit `a30a49a`, before the English translation. This branch remains unchanged; maintain the current Chinese page on `main`.

To preview the preserved Chinese version, first commit or set aside any local changes, then run:

```sh
git switch chinese
python3 -m http.server 8080
```

Return to the current bilingual website with `git switch main`. The deployed language switcher links between the two pages on `main`; it does not switch branches.

## Validation

Check JavaScript syntax with:

```sh
node --check script.js
```

In a browser:

1. Open both `index.html` and `zh.html` and check the desktop and mobile layouts, navigation links, mobile menu, all four application tabs, and keyboard controls.
2. Use **EN / 中文** in each direction, including from a section anchor. Confirm that the destination keeps the same section hash and that refreshing retains the selected language.
3. Check the page language and the mobile menu's open/close ARIA labels in both languages. Confirm that Escape closes the menu and that arrow keys, Home, and End operate the application tabs.
4. Confirm that copy fits in both languages, source links work, the original logo is intact, and phone, email, and WeChat remain blank.
5. Confirm that `CNAME` still contains `daeyom.com` and that the `chinese` branch still points to `a30a49a`.

This static site has no build or dependency-installation step.

## Deployment

GitHub Pages serves the `main` branch from `/ (root)`, with the custom domain set to `daeyom.com` in `CNAME`. Keep that domain file when updating the site. Assets use relative paths and also work under a GitHub Pages project subdirectory.

Project figures describe filed plans, not confirmed operating capacity or completed production facilities. Application areas indicate intended directions, not proof of product testing or industry certification. Use company-verified information before adding business contacts, sample specifications, certificates, or factory photographs.
