# Documentation screenshots

Cypress specs under `specs/` capture product screenshots against a Tolgee image that bundles the
`app/` module. That module seeds one canonical dataset through
`GET /internal/e2e-data/docs/generate-standard` (see [Example data](#example-data)).
Every spec pins the server and browser clock to 2026-01-15, cleans and regenerates the data, and
logs in as the owner unless `loginAs` says otherwise.

## Run locally

Needs Chrome, Docker, and a sibling `tolgee-platform` checkout (the feature worktree layout gives
you that) with its `e2e/` dependencies installed (`npm ci` in `tolgee-platform/e2e`).

    (cd ../../tolgee-platform && ./gradlew tagDockerLocal)   # image with the docs module
    npm ci
    npm run backend:up
    npm run refresh          # capture + write changed webps into ../static
    npm run backend:down

In a feature worktree, source `tolgee-platform/worktree-env.sh` first: the container and Cypress
both use its `TOLGEE_E2E_PORT` (default 8201).

Do not commit webps produced on macOS: text rendering differs from the Ubuntu runner that produces
the committed baseline. Use the local run to check the capture, then trigger the
`Refresh documentation screenshots` workflow, which opens a PR with the regenerated files.

To iterate on a spec against a dev backend started with the `e2e` profile and the dev frontend on
8202, run `CYPRESS_HOST=http://localhost:8202 CYPRESS_API_URL=http://localhost:8201 npm run open`.
`npm run open` uses Chrome because Electron and Firefox capture at 1x.

On a dev backend, a spec pins the server clock (`PINNED_DATE` in `support/defineScreenshots.ts`)
and releases it when the spec ends; an interrupted run leaves it pinned until `DELETE
/internal/time`. Generating the docs data also force-enables all features until the next `clean`
or a restart, unless billing is enabled and provides the features itself.

## Add a screenshot

Add an entry to the spec for the documented feature (or a new `specs/<feature>.screenshots.ts`):

    import { getProjectByNameFromTestData } from 'tg.baseCommon/apiCalls/testData/testData';
    import { defineScreenshots, HOST } from '../support/defineScreenshots';

    defineScreenshots([{
      src: '/img/docs/platform/<page>/<name>.webp',   // exactly the src used in the MDX
      viewport: { width: 1512, height: 768 },         // optional, this is the default
      clip: 'some-data-cy',                           // optional: screenshot only that element
      highlight: ['other-data-cy'],                   // optional: red outline before capture
      loginAs: 'bob@whattopack.test',                 // optional: default is the owner
      prepare: (data) => {                            // open the page; the screenshot is taken after
        cy.visit(`${HOST}/projects/${getProjectByNameFromTestData(data, 'Demo project').id}/translations`);
        cy.gcy('...').should('be.visible');
      },
    }]);

`data` is the `TestDataStandardResponse` from the platform helpers. The dataset is generated once
per spec file, so `prepare` must not change data. Captures are 2x, so the default viewport
produces 3024x1536 images.

## Example data

Screenshots show the Demo project that Tolgee creates for every new user: the "What to pack"
packing list app in English, German and French. `DocsTestData` builds it from the platform's
`DemoProjectData`, so the keys, translations, tags and descriptions are the ones a reader sees in
their own account.

- Organization `What to pack`, project `Demo project`.
- Alice Smith (`alice@whattopack.test`, owner), Bob Johnson (`bob@whattopack.test`, can edit) and
  Charlie Brown (`charlie@whattopack.test`, can review).

When a page needs data the dataset lacks (prompts, tasks, glossary terms), add it to `DocsTestData`
and keep it about the packing list app: no new company, product or person names. Reuse the three
users and the existing keys before adding more, and prefer names the product itself would suggest
(`Prompt for German`, not `My prompt 1`).

Every spec uses the same `docs` dataset; there is no way to add page-specific data yet. When a page
needs it, add a controller at `internal/e2e-data/docs-<name>` that extends `DocsE2eDataController`
(so it keeps the forced features and the slug cleanup) with `DocsTestData` plus the additions as
`testData`, and give `defineScreenshots` a parameter for the dataset name it generates.
