// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Import cypress grep for tagging test and filtering test runs
import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Delete this once we fix our app bugs
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  console.log(err)
  return false
})

// Global hooks
before(() => {
  cy.clearAllCookies()
  cy.log('Running tests from ' + Cypress.config().baseUrl + ' with viewport set to 1440 x 900')
})

after(() => {
  cy.clearAllCookies()
})
