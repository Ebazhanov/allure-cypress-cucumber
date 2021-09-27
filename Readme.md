Cypress Allure Plugin Usage Example
----

This repository contains [DEMO](https://ebazhanov.github.io/allure-cypress-cucumber/) 
- how to publish Allure report in `gh-pages`
- more details here [.github/workflows/main.yml](.github/workflows/main.yml)

![Img](AllureReport.png)

### How to run locally:

- `$ yarn && yarn cy:run`
- `$ clear previous output yarn allure:clear`
- `$ generate allure report: yarn allure:report`
- `$ open report: allure open`

### Pre-requirements:
- install `Allure` for MacOS e.g. `brew install allure` or `npm install -g allure-commandline --save-dev`

### What **GitHub Actions** is doing after you do Push or Merge:
- run tests inside docker container
- store test results
- generate and publish Allure report in gh-pages branch
- [DEMO](https://ebazhanov.github.io/allure-cypress-cucumber/)
- read more about how to configure [gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

### Credits to:

- [@Shelex/cypress-allure-plugin](https://github.com/Shelex/cypress-allure-plugin)
