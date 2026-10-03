# DaeyoM

English company website for Jiangxi Dayue Microfiber New Materials Co., Ltd. (江西大越超纤新材料有限公司). The English company name is a descriptive translation; a registered English name has not been verified. Built with plain HTML, CSS, and JavaScript, with no build step, runtime dependencies, or external font requests. The layout supports desktop and mobile screens.

## Local preview

From the repository directory, run:

```sh
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Website content

- Brand introduction and company overview
- Waterborne microfiber synthetic leather and the process described in the project filing
- Application tabs for footwear, bags, automotive interiors, and living and apparel
- Project plans with links to public government sources
- Company address and reserved contact fields

The mobile menu closes with Escape. Application tabs support the arrow keys, Home, and End. The page includes visible keyboard focus, a skip link, and support for reduced-motion preferences.

## Files to update

- `index.html`: Website copy, project figures, address, and contact details. At the company's request, phone, email, and WeChat remain blank and appear as dashes. No invented contact information or inquiry form is used.
- `styles.css`: Responsive layout and the black, white, and orange brand palette.
- `script.js`: Mobile navigation, application tabs, and the footer year.
- `SOURCES.md`: Company sources, limits of the project data, and information that has not been verified.
- `assets/daeyom-brand-source.png`: Original logo image supplied by the user. An SVG viewBox displays the logo area without redrawing the mark.
- `assets/material-hero.jpg`: AI-generated material concept image, not a photograph of the factory or an actual product. The generation record is in `assets/ASSETS.md`.
- `CNAME`: Custom domain for GitHub Pages, currently `daeyom.com`.

## Language branches

- `main`: English website used for deployment.
- `chinese`: Preserved Chinese website at commit `a30a49a`, before the English translation.

To preview the preserved Chinese version, first commit or set aside any local changes, then run:

```sh
git switch chinese
python3 -m http.server 8080
```

Return to the English version with `git switch main`. The branches are separate website versions; there is no language switcher on the deployed page.

## Validation

Check JavaScript syntax with:

```sh
node --check script.js
```

In a browser, check the desktop and mobile layouts, navigation links, mobile menu, all four application tabs, and keyboard controls. Confirm that the English text fits, the source links work, the original logo is intact, and the contact fields remain blank. This static site has no build or dependency-installation step.

## Deployment

GitHub Pages serves the `main` branch from `/ (root)`, with the custom domain set to `daeyom.com` in `CNAME`. Keep that domain file when updating the site. Assets use relative paths and also work under a GitHub Pages project subdirectory.

Project figures describe filed plans, not confirmed operating capacity or completed production facilities. Application areas indicate intended directions, not proof of product testing or industry certification. Use company-verified information before adding business contacts, sample specifications, certificates, or factory photographs.
