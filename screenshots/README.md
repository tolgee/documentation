# Documentation screenshots

Cypress specs under `specs/` capture product screenshots against a Tolgee image that bundles the
`app/` module. That module seeds one canonical dataset (organization Acme Corp, project Acme Shop,
users Olivia Martin, Noah Clark, Emma Lee) through `GET /internal/e2e-data/docs/generate-standard`.
Every spec cleans and regenerates it, pins the server and browser clock to 2026-01-15, and logs in
as the owner unless `loginAs` says otherwise.

## Run locally

Needs a sibling `tolgee-platform` checkout (the feature worktree layout gives you that) with its
`e2e/` dependencies installed (`npm ci` in `tolgee-platform/e2e`).

    (cd ../../tolgee-platform && ./gradlew tagDockerLocal)   # image with the docs module
    npm ci
    npm run backend:up
    npm run refresh          # capture + write changed webps into ../static
    npm run backend:down

Do not commit webps produced on macOS: text rendering differs from the Ubuntu runner that produces
the committed baseline. Use the local run to check the capture, then trigger the
`Refresh documentation screenshots` workflow, which opens a PR with the regenerated files.

To iterate on a spec against a dev backend started with the `e2e` profile and the dev frontend on
8202, run `CYPRESS_HOST=http://localhost:8202 CYPRESS_API_URL=http://localhost:8201 npm run open`.

## Add a screenshot

Add an entry to the spec for the documented feature (or a new `specs/<feature>.screenshots.ts`):

    defineScreenshots([{
      src: '/img/docs/platform/<page>/<name>.webp',   // exactly the src used in the MDX
      viewport: { width: 1512, height: 768 },         // optional, this is the default
      clip: 'some-data-cy',                           // optional: screenshot only that element
      highlight: ['other-data-cy'],                   // optional: red outline before capture
      loginAs: 'noah@acme.test',                      // optional: default is the owner
      capture: (data) => { cy.visit(...); cy.gcy('...').should('be.visible'); },
    }]);

If the standard dataset cannot show what the page documents, add a modifier: a controller in
`app/` at `internal/e2e-data/docs-<name>` whose `testData` is `DocsTestData` plus the additions,
and use `generateTestDataObject('docs-<name>')` in the spec.
