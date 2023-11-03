/// <reference types="cypress" />

class BillingPage {
  elements = {
    manageSubscriptionButton: () => cy.getByData('billing-manage-button'),
    premiumSubscriptionDescription: () => cy.getByData('premium-subscription-description')
  }

  visit () {
    cy.visit('/settings#billing-settings-content') // billing page path
    return this // return page object to start chainable commands
  }
}

export default new BillingPage()
