Cypress Allure Plugin Usage Example
----

In this repository, you can find [DEMO](https://ebazhanov.github.io/allure-cypress-cucumber/) of how to use cypress-allure-plugin.

![Img](AllureReport.png)

### How to run locally:

- `$ yarn && yarn cy:run`
- `$ clear previous output yarn allure:clear`
- `$ generate allure report: yarn allure:report`
- `$ open report: allure open`

### Pre-requirements:
- install `Allure` for MacOS e.g. `brew install allure` or `npm install -g allure-commandline --save-dev`

### What happens in github-actions:
- run tests
- restore history of previos run
- create and publish result in gh-pages branch
- [DEMO](https://ebazhanov.github.io/allure-cypress-cucumber/)

### Credits to:

- [@Shelex/cypress-allure-plugin]([https://github.com/Shelex/cypress-allure-plugin])
