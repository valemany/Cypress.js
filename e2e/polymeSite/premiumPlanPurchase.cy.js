import billingPage from '../../pageObjects/polyMeSite/billingPage'
import editorPage from '../../pageObjects/polyMeSite/editorPage'
import upgradeToPremiumPage from '../../pageObjects/polyMeSite/upgradeToPremiumPage'

describe('Upgrade to premium subscription', { tags: ['premium', 'all', 'CI'] }, () => {
  beforeEach(() => {
    cy.signup('testName1', 'testLastname1', 'password123')
  })

  afterEach(() => {
    cy.logout()
  })

  context('Upgrade to premium plan flow', () => {
    it('should be able to purchase a premium plan using the default annual option', () => {
      editorPage.layoutPreviewElements.upgradeToPremiumBtn()
        .should('be.visible')
      editorPage
        .verifyEditorPageComponentsVisibility()
        .clickOnEditorPreviewUpgradeToPremiumBtn()
      upgradeToPremiumPage
        .verifyUpgradeToPremiumModalComponentsVisibility()
        .clickOnUpgradeToPremiumBtn()
        .verifyPremiumCheckoutModalComponents()
        .fillPremiumCheckoutPaymentDetails()
        .fillPremiumCheckoutNameAndAddressDetails()
      upgradeToPremiumPage.premiumCheckoutModal.price()
        .should('have.text', '$96.00')
      upgradeToPremiumPage
        .clickOnSubscribeAndPayBtn()
        .premiumCheckoutModal.modalContent()
        .should('not.exist')
      editorPage.layoutPreviewElements.upgradeToPremiumBtn()
        .should('not.exist')
      billingPage.visit().elements.manageSubscriptionButton()
        .should('be.visible')
      billingPage.visit().elements.premiumSubscriptionDescription()
        .contains('Your annual subscription will renew at $96.00')
    })

    it('should be able to purchase a premium plan using a coupon code in dark mode', () => {
      cy.switchToDarkMode()
      editorPage.layoutPreviewElements.upgradeToPremiumBtn()
        .should('be.visible')
      editorPage
        .verifyEditorPageComponentsVisibility()
        .clickOnEditorPreviewUpgradeToPremiumBtn()
      upgradeToPremiumPage
        .verifyUpgradeToPremiumModalComponentsVisibility()
        .clickOnUpgradeToPremiumBtn()
        .verifyPremiumCheckoutModalComponents()
        .addCouponCode('20off')
        .fillPremiumCheckoutPaymentDetails()
        .fillPremiumCheckoutNameAndAddressDetails()
      upgradeToPremiumPage.premiumCheckoutModal.discountAppliedText()
        .should('be.visible')
      upgradeToPremiumPage.premiumCheckoutModal.price()
        .should('have.text', '$76.80')
      upgradeToPremiumPage.premiumCheckoutModal.discountAmount()
        .should('have.text', '$19.20')
      upgradeToPremiumPage
        .clickOnSubscribeAndPayBtn()
        .premiumCheckoutModal.modalContent()
        .should('not.exist')
      editorPage.layoutPreviewElements.upgradeToPremiumBtn()
        .should('not.exist')
      billingPage.visit().elements.manageSubscriptionButton()
        .should('be.visible')
      billingPage.visit().elements.premiumSubscriptionDescription()
        .contains('Your annual subscription will renew at $76.80')
    })

    it('should be able to purchase a premium plan using the monthly option', () => {
      editorPage.layoutPreviewElements.upgradeToPremiumBtn()
        .should('be.visible')
      editorPage
        .verifyEditorPageComponentsVisibility()
        .clickOnEditorPreviewUpgradeToPremiumBtn()
      upgradeToPremiumPage
        .verifyUpgradeToPremiumModalComponentsVisibility()
        .selectMonthlySubscriptionOption()
        .clickOnUpgradeToPremiumBtn()
        .verifyPremiumCheckoutModalComponents()
        .fillPremiumCheckoutPaymentDetails()
        .fillPremiumCheckoutNameAndAddressDetails()
      upgradeToPremiumPage.premiumCheckoutModal.price()
        .should('have.text', '$10.00')
      upgradeToPremiumPage
        .clickOnSubscribeAndPayBtn()
        .premiumCheckoutModal.modalContent()
        .should('not.exist')
      editorPage.layoutPreviewElements.upgradeToPremiumBtn()
        .should('not.exist')
      billingPage.visit().elements.manageSubscriptionButton()
        .should('be.visible')
      billingPage.visit().elements.premiumSubscriptionDescription()
        .contains('Your monthly subscription will renew at $10.00')
    })
  })
})
