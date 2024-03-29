# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.1.0 (2020-09-26)

### Features

- add all [@pragmatics](https://github.com/pragmatics) packages ([79f1876](https://github.com/pvds/stylelint-config/commit/79f1876cad523fed10a84d34f9d5ca1043460caa))

# Changelog - [@pragmatics/stylelint-config]

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.2]

### Fixed

- set correct sonarcloud project name

## [2.0.1]

### Fixed

- set correct test file paths
- bump package dependencies

## [2.0.0]

### Changed

- repo name from `stylelint-config-pragmatic` to `stylelint-config`
- package from `stylelint-config-pragmatic` to `@pragmatics/stylelint-config`
- eslint config to use `@pragmatics/eslint-config`
- stylelint config to use `@pragmatics/stylelint-config-order`
- release workflow to publish scoped package as public

## [1.5.0]

### Added

- Github pull request template

### Fixed

- [Readme](README.md) cleanup and fixed typos

## [1.4.0]

### Changed

- [Contribution guidelines](CONTRIBUTING.md) vision link
- [Readme](README.md) vision section
- updated dependencies

## [1.3.0]

### Added

- [Code of conduct](CODE_OF_CONDUCT.md)
- [Contribution guidelines](CONTRIBUTING.md)
- Github issue templates

### Changed

- [License extension to markdown](LICENSE.md)
- [Readme](README.md)

## [1.2.4]

### Fixed

- badge indexing by adding '.svg' suffix to badge image urls

## [1.2.3]

### Fixed

- readme
  - badges not indexed by npms.io
  - correct json format for stylelint extends

## [1.2.2]

### Fixed

- empty .prettierignore removed
- update dependencies
- cleanup test file

## [1.2.1]

### Fixed

- remove yarn caching from release workflow;  
  `action/cache` only supports `push` and `pull_request` events
- .gitattributes
  - mark lock files as binary
  - remove test scss files from Github statistics
- system test

## [1.2.0]

### Added

- caching to ci workflow

### Changed

- setup-node to v2-beta
- updated lock file
- readme badges and sources

### Removed

- publish to GPR from release workflow

## [1.1.5]

### Fixed

- run NPM and GPR release as separate jobs

## [1.1.4]

### Fixed

- set GPR registry for yarn publish explicitly

## [1.1.3]

### Fixed

- GPR package scope

## [1.1.2]

### Fixed

- Use npm instead of yarn for GPR publish

## [1.1.1]

### Fixed

- changelog package name link
- GPR package scope

## [1.1.0]

### Added

- sonarcloud analysis
- badges to readme

## [1.0.0]

### Added

- stylelint rules
- workflows
  - ci
  - release
- linters
  - eslint
  - prettier
- tests
- readme
- license

[2.0.2]: https://github.com/pvds/stylelint-config/tree/2.0.2
[2.0.1]: https://github.com/pvds/stylelint-config/tree/2.0.1
[2.0.0]: https://github.com/pvds/stylelint-config/tree/2.0.0
[1.5.0]: https://github.com/pvds/stylelint-config/tree/1.5.0
[1.4.0]: https://github.com/pvds/stylelint-config/tree/1.4.0
[1.3.0]: https://github.com/pvds/stylelint-config/tree/1.3.0
[1.2.4]: https://github.com/pvds/stylelint-config/tree/1.2.4
[1.2.3]: https://github.com/pvds/stylelint-config/tree/1.2.3
[1.2.2]: https://github.com/pvds/stylelint-config/tree/1.2.2
[1.2.1]: https://github.com/pvds/stylelint-config/tree/1.2.1
[1.2.0]: https://github.com/pvds/stylelint-config/tree/1.2.0
[1.1.5]: https://github.com/pvds/stylelint-config/tree/1.1.5
[1.1.4]: https://github.com/pvds/stylelint-config/tree/1.1.4
[1.1.3]: https://github.com/pvds/stylelint-config/tree/1.1.3
[1.1.2]: https://github.com/pvds/stylelint-config/tree/1.1.2
[1.1.1]: https://github.com/pvds/stylelint-config/tree/1.1.1
[1.1.0]: https://github.com/pvds/stylelint-config/tree/1.1.0
[1.0.0]: https://github.com/pvds/stylelint-config/tree/1.0.0
[stylelint config pragmatic]: https://github.com/pvds/stylelint-config
