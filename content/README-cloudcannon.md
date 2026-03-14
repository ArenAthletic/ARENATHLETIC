# CloudCannon Refactor Notes

## Why editable regions were not detected
CloudCannon was not detecting editable regions because the theme stored nearly all content directly inside Shopify JSON templates and Liquid section settings. Those values are editable in Shopify's customizer, but CloudCannon does not infer structured editor controls from Shopify schema alone.

## What changed
- Added `data/site/site.json` for global navigation/footer content.
- Added `data/pages/*.json` for page-level content.
- Added `cloudcannon.config.yml` to define editable data files and array fields.
- Updated theme rendering to prefer data from `shop.metafields.cloudcannon.*` when present, while preserving current Shopify defaults.
- Added `snippets/cc-page-data.liquid` to expose current page data in the DOM for visual tooling/debugging.

## Deployment flow
1. Commit and push these files to the repo connected to CloudCannon.
2. In CloudCannon, sync the repo and confirm `cloudcannon.config.yml` is detected.
3. Edit JSON content under `data/site/` and `data/pages/` in the data editor.
4. Mirror those JSON values into Shopify metafields namespace/key structure:
   - `cloudcannon.site`
   - `cloudcannon.pages.home`
   - `cloudcannon.pages.about`
   - `cloudcannon.pages.training`
   - `cloudcannon.pages.services`
   - `cloudcannon.pages.street-miles`
   - `cloudcannon.pages.contact`
   - `cloudcannon.pages.product`
   - `cloudcannon.pages.collection`
5. Publish the Shopify theme.

## Important implementation detail
This refactor preserves the current site appearance by keeping all existing CSS, HTML structure, section names, and templates intact. The new data layer only overrides content values.
