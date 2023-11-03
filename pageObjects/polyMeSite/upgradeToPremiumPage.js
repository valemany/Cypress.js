/// <reference types="cypress" />

const paymentDetailsIframe = 'iframe[name*="Stripe"][src*="inner-payment"]'
const addressDetailsIframe = 'iframe[name*="StripeFrame"][src*="inner-address"]'
const testdata = require('../../fixtures/upgradeToPremiumData.json')

class UpgradeToPremium {
  // elements and actions for the upgrade to premium modal
  upgradeToPremiumModal = {
    self: () => cy.getByData('subscriptions-polywork-premium-show-modal'),
    modalContent: () => cy.get('#modal_content'),
    premiumMonthlyBillingOption: () => cy.getByData('polywork_premium_monthly_billing'),
    premiumAnnualBillingOption: () => cy.getByData('polywork_premium_annual_billing'),
    upgradeToPremiumBtn: () => cy.getByData('polywork-premium-pricing-form-submit-button')
  }

  verifyUpgradeToPremiumModalComponentsVisibility () {
    this.upgradeToPremiumModal.self().should('be.visible')
    this.upgradeToPremiumModal.modalContent().should('be.visible')
    this.upgradeToPremiumModal.premiumMonthlyBillingOption().should('not.be.checked')
    this.upgradeToPremiumModal.premiumAnnualBillingOption().should('be.checked')
    this.upgradeToPremiumModal.upgradeToPremiumBtn().should('be.visible')
    return this
  }

  selectMonthlySubscriptionOption () {
    this.upgradeToPremiumModal.premiumMonthlyBillingOption()
      .should('not.be.checked')
      .check({ force: true })
    return this
  }

  clickOnUpgradeToPremiumBtn () {
    this.upgradeToPremiumModal.upgradeToPremiumBtn().click().wait(1000)
    return this
  }

  // elements and actions for the premium checkout modal
  premiumCheckoutModal = {
    paymentDetails: {
      cardNumberField: () => '#Field-numberInput',
      expirationField: () => '#Field-expiryInput',
      cvcField: () => '#Field-cvcInput'
    },
    addressDetails: {
      fullNameInput: () => '#Field-nameInput',
      countryOrRegionDropdown: () => 'select#Field-countryInput',
      addressField: () => '#Field-addressLine1Input',
      addressLine2Field: () => '#Field-addressLine2Input',
      cityField: () => '#Field-localityInput',
      stateDropdown: () => 'select#Field-administrativeAreaInput',
      zipCodeField: () => '#Field-postalCodeInput',
      phoneNumberField: () => '#Field-phoneInput'
    },
    modalContent: () => cy.get('#modal_content'),
    closeBtn: () => cy.getByData('close-modal-button'),
    billSummarySection: () => cy.get('#checkout_summary'),
    price: () => cy.get('#checkout_summary div.ml-2 > strong'),
    tosLink: () => cy.get('#checkout_summary a[href*="/terms"]').first(),
    privacyLink: () => cy.get('#checkout_summary a[href*="/privacy"]'),
    addDiscountCodeField: () => cy.getByData('add-discount-code-field'),
    applyCouponButton: () => cy.getByData('apply-coupon-button'),
    discountAppliedText: () => cy.getByData('discount-applied-text'),
    discountAmount: () => cy.getByData('discount-amount'),
    subscribeAndPayBtn: () => cy.get('button[data-card-details-target="submitButton"]')
  }

  verifyPremiumCheckoutModalComponents () {
    this.premiumCheckoutModal.modalContent().should('be.visible')
    this.premiumCheckoutModal.closeBtn().should('be.visible')
    this.premiumCheckoutModal.billSummarySection().should('be.visible')
    this.premiumCheckoutModal.tosLink().should('be.visible')
    this.premiumCheckoutModal.privacyLink().should('be.visible')
    this.premiumCheckoutModal.subscribeAndPayBtn().should('not.be.enabled')

    return this
  }

  fillPremiumCheckoutPaymentDetails () {
    cy.enter(paymentDetailsIframe).then(getBody => {
      getBody().find(this.premiumCheckoutModal.paymentDetails.cardNumberField())
        .should('be.visible').type(testdata.cardNumber)
    })
    cy.enter(paymentDetailsIframe).then(getBody => {
      getBody().find(this.premiumCheckoutModal.paymentDetails.expirationField())
        .should('be.visible').type(testdata.expirationDate)
    })
    cy.enter(paymentDetailsIframe).then(getBody => {
      getBody().find(this.premiumCheckoutModal.paymentDetails.cvcField())
        .should('be.visible').type(testdata.cvc)
    })
    return this
  }

  fillPremiumCheckoutNameAndAddressDetails () {
    cy.enter(addressDetailsIframe).then(getBody => {
      getBody().find(this.premiumCheckoutModal.addressDetails.fullNameInput())
        .should('be.visible').type(testdata.fullName)
    })
    cy.enter(addressDetailsIframe).then(getBody => {
      getBody().find(this.premiumCheckoutModal.addressDetails.addressField())
        .should('be.visible').type(testdata.address)
    })
    cy.enter(addressDetailsIframe).then(getBody => {
      getBody().find(this.premiumCheckoutModal.addressDetails.cityField())
        .should('be.visible').type(testdata.city)
    })
    cy.enter(addressDetailsIframe).then(getBody => {
      getBody().find(this.premiumCheckoutModal.addressDetails.stateDropdown())
        .should('be.visible').select(testdata.state)
    })
    cy.enter(addressDetailsIframe).then(getBody => {
      getBody().find(this.premiumCheckoutModal.addressDetails.zipCodeField())
        .should('be.visible').type(testdata.zipCode)
    })
    cy.enter(addressDetailsIframe).then(getBody => {
      getBody().find(this.premiumCheckoutModal.addressDetails.phoneNumberField())
        .should('be.visible').type(testdata.phoneNumber)
    })
    return this
  }

  addCouponCode (code) {
    this.premiumCheckoutModal.addDiscountCodeField()
      .should('be.exist').click({ force: true })
    this.premiumCheckoutModal.addDiscountCodeField()
      .type(code, { force: true })
    this.premiumCheckoutModal.applyCouponButton()
      .should('be.exist').click({ force: true })
    return this
  }

  clickOnSubscribeAndPayBtn () {
    this.premiumCheckoutModal.subscribeAndPayBtn()
      .should('be.enabled')
      .click()
      .should('be.disabled')
    return this
  }
}

export default new UpgradeToPremium()
