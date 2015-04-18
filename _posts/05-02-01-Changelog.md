---
title:   Changelog
isChild: true
anchor:  changelog
---

## Changelog {#changelog_title}

### v0.2.1

- Fixed `config` export to be undefined. [commit](https://github.com/sourcescript/alt-notify/commit/8a51d49a2ccf042708d22d4e8c9a1c14af521045).

### v0.2

- Slightly changed `config` export, bumped in case somebody imports `config` in an unnecessary fashion. `config` is now imported as how `export default` or `module.exports` is *imported*, `import config from 'alt-notify/config'` instead of `import * as config from 'alt-notify/config'`. [commit](https://github.com/sourcescript/alt-notify/commit/6aba11aabd603932fab6c3fd18f268ea32cba986).

### v0.1.1

- Version bump due to v0.1 tag being pushed without bumping `package.json` version [commit](https://github.com/sourcescript/alt-notify/commit/879c8b43aff72d10077686143762204b16cebddd).

### v0.1

- Initial functional release.
