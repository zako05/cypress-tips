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

## Cypress._

Cypress comes up with bundled [lodash](https://lodash.com/) in. We can use `Cypress._.'any_lodash_function'`

## Cypress Error Messages

link: https://docs.cypress.io/guides/references/error-messages

# Day 1: How to load any library and make it available in all specs

## Cypress.R(amda)

link: https://cypresstips.substack.com/p/cypressramda

Bundled libraries in Cypress global object, like `Cypress._`, `Cypress.Promise`, `Cypress.$` etc.

```javascript
// cypress/support/index.js
import * as R from ‘ramda’
Cypress.R = R
// from any spec file use Cypress.R.* functions
```

# Day 2: Add unit test(s) to sanity tests for 3rd party dependencies

# Day 3: What is the value you want to yield

video: https://www.youtube.com/watch?v=9AF-lcvh1dk&t=221s&ab_channel=glebbahmutov

error: `Cypress detected that you invoked one or more cy commands in a custom command but returned a different value`

link https://docs.cypress.io/guides/references/error-messages#Cypress-detected-that-you-invoked-one-or-more-cy-commands-in-a-custom-command-but-returned-a-different-value
