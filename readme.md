# Juice Shop

Repository containing Cypress tests of the Juice Shop application.

## Required

This project contains the Playwright tests for the application Juice Shop.
The application isn't included in the repository, but it's available on https://github.com/juice-shop/juice-shop.
Follow the instruction from the readme.md on https://github.com/juice-shop/juice-shop to run the app locally on http://localhost:3000. If your port is different, you will need to change baseUrl.

When the application is ready, you can run the project.
The project uses Node.js library and npm as a package manager.

## Installation

1. Make sure you've got Node.js installed
2. Run `npm install`
3. Run `npx playwright install` to open the tests or use the package.json scripts
4. Run tests

To run tests use `npx playwright test`. By default all tests run on 3 browsers: chromium, firefox and webkit.
To run tests only for one browser use the flag `--project=chromium` or `--project=firefox` or `--project=webkit`.

5. Happy testing! 😄

## Good practices used in the project:

1. DRY - Don't repeat yourself
2. YAGNI  - You ain't gonna need it
3. Page Object Pattern
4. KISS - Keep it simple stupid
5. Framework updates
6. Framework best practises
7. SCOUT
8. Prettier
9. Avoiding the pesticide paradox
10. FIRST
