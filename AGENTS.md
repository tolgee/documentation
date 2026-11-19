# Notes for agents

## Screenshots

Create and update screenshots with the automated screenshot system, not by hand.
[`screenshots/README.md`](screenshots/README.md) says how to run it and how to add a screenshot.

- Do not commit images captured on macOS. The `Refresh documentation screenshots` workflow
  produces the committed images. You can dispatch it on a branch, and set `tolgee_platform_ref`
  to the platform ref the pages describe.
- The runner treats a capture that differs from the committed image in less than 0.5% of its
  pixels as unchanged (`MAX_CHANGED_RATIO` in `screenshots/runner/diff-and-write.mts`). For a
  small change, such as a new highlight, delete the image first so the runner creates it again.

## Review

If you review a change with the unscrew review system, include the reviewers in the `docs`
category. When the change touches the screenshot code under `screenshots/`, include code reviewers
too: the screenshot-taking code needs code review. Leave out reviewers for end-to-end tests:
screenshot specs are not tests.
