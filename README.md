# Using Task in Config

Repro to determine if `cy.task` can be called in the `cypress.config` file.

There are two branches:
- [works](https://github.com/conversaShawn/taskInConfig/tree/works) - downloads basic extension as expected
- [doesNotWork](https://github.com/conversaShawn/taskInConfig/tree/doesNotWork) - uses cy.task in `setupNodeEvents`

## How to reproduce

Install dependencies

```
yarn
```

Run cypress

```
yarn cy:open
```

