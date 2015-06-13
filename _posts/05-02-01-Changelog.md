---
title:   Changelog
isChild: true
anchor:  changelog
---

## Changelog {#changelog_title}

### v0.3.4 ([commit](https://github.com/sourcescript/alt-notify/commit/210ad01f9ad5a9876de8bebb53da6104a973a812))

- Fixed build.

### v0.3.2 ([commit](https://github.com/sourcescript/alt-notify/commit/2b5708be21c37eaa3b3a360f686f75478cc3fe3a))

- Fixed `package.json` not pointing to the recently added build files.

### v0.3.1 ([commit](https://github.com/sourcescript/alt-notify/commit/1c86d0effb8aab60f5d962577185b91a865bf9e8))

- Prepped up for **npm**. 
- Added build files.

### v0.3 ([commit](https://github.com/sourcescript/alt-notify/commit/a6b00ed35dd1dc4382138b6b75c5f3d1b671ef35))

- Added autoremoval of items (our duration sarting to make sense here).
- Stabilized the properties received from the `Drawer` (this was unclear in `v0.2`). Unnecessary properties received from the `Drawer` *component* are no longer exposed (`id`, `duration`, etc.). Add items through the `data` property, e.g., `NotifyActions.add({ data: 'Hey', type: 'alert' });`.

### v0.2.1

- Fixed `config` export to be undefined. [commit](https://github.com/sourcescript/alt-notify/commit/8a51d49a2ccf042708d22d4e8c9a1c14af521045).

### v0.2

\* <sup>Tag was removed due to **npm** accepts `0.2.0` but not `0.2` (which was the one written in the file).</sup>

- Slightly changed `config` export for testability (I couldn't stub it without having to do so). Bumped in case somebody imports `config` in an unnecessary fashion. `config` is now imported as how `export default` or `module.exports` is *imported*, `import config from 'alt-notify/config'` instead of `import * as config from 'alt-notify/config'`. [commit](https://github.com/sourcescript/alt-notify/commit/6aba11aabd603932fab6c3fd18f268ea32cba986).

### v0.1.1

- Version bump due to v0.1 tag being pushed without bumping `package.json` version [commit](https://github.com/sourcescript/alt-notify/commit/879c8b43aff72d10077686143762204b16cebddd).

### v0.1

- Initial functional release.
