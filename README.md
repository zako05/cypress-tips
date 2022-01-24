# Advent Cypress Tips by Gleb

## @bahmutov/cly

link: https://www.npmjs.com/package/@bahmutov/cly

A prototype of Cypress CLI for quicker project scaffolding

```zsh
npx @bahmutov/cly init
```

scaffold bare minimum for Cypress tests (e.g. no fixtures, support, plugins)

```zsh
npx @bahmutov/cly init -t
```

# Day 1: Cypress.R(amda)

link: https://cypresstips.substack.com/p/cypressramda

Bundled libraries in Cypress global object, like `Cypress._`, `Cypress.Promise`, `Cypress.$` etc.

```javascript
// cypress/support/index.js
import * as R from ‘ramda’
Cypress.R = R
// from any spec file use Cypress.R.* functions
```
