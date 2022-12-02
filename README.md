# Using Task in Config

Repro to determine if `cy.task` can be called in the `cypress.config` file.

There are two branches:
- [works]() - downloads basic extension as expected
- [doesNotWork]() - uses cy.task in `setupNodeEvents`

## How to reproduce

Install dependencies

```
yarn
```

Run cypress

```
yarn cy:open
```

