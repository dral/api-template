---
sidebar_position: 4
---

# Test guidelines and tooling

:::tip
## Test functionality not implementation

Implementation should change, tests should warn you when the functionality is broken.
:::

## Tooling

- jest
- code coverage
- supertest

## Test setup

See `jest.config.ts` for test settings.

Test configuration options are defined in `config/test.yaml` and can be optionally overriden in `config/local-test.yaml`.

## Coverage and Qualimetry

Coverage report is generated when running tests and it's available under the `coverage` folder (see `coverage/lcov-report/index.html` for a comprehensive report)

TODO setup sonarqube