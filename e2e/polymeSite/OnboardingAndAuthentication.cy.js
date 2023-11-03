import homePage from '../../pageObjects/polyMeSite/homePage'
import commonPageComponents from '../../pageObjects/polyMeSite/commonPageComponents'
import onboardingPage from '../../pageObjects/polyMeSite/onboardingPage'
import editorPage from '../../pageObjects/polyMeSite/editorPage'
import { generateRandomEmail } from '../../support/helper'
let email

describe('Onboarding and Authentication functionality', { tags: ['onboarding', 'all', 'CI'] }, () => {
  before(() => {
    homePage.visit()
  })

  afterEach(() => {
    cy.clearAllCookies()
  })

  context('Onboarding process - Sign up with email', () => {
    it('should be able to sign up with email as a professional', () => {
      email = generateRandomEmail('stripe.com')
      homePage
        .visit()
        .clickHeaderSignUpBtn()
      onboardingPage
        .verifySignUpModalComponentsVisibility()
        .fillEmailandPassword(email, 'password123')
        .clickOnSignUpBtn()
        .verifyBasicInformationModalComponentsVisibility()
        .fillBasicInfoFirstAndLastName('John', 'Smith')
        .clickOnSideIncomeOption()
        .clickOnSourceOfTruthOption()
        .clickOnBasicInfoNextBtn()
        .verifyWorkInfoModalComponentsVisibility()
        .fillWorkInfo('Stripe', 'Manager', '08/2015')
        .clickOnWorkInfoMdalNextBtn()
        .verifyBadgesModalComponentsVisibility()
        .clickOnTravelerBadge()
        .searchForBadge('Saas Founder')
        .clickOnFirstBadgeFromSearchResults()
        .clickOnBadgeModalNextBtn()
        .verifyConnectionsModalComponentsVisibility('peers are using Polywork for their websites')
        .clickOnConnectionsModalNextBtn()
        .verifyCollaborationPreferencesModalComponentsVisibility()
        .searchForActivity('Volunteering')
        .checkVolunteeringCheckbox()
        .clickOnCollaborationPreferenceFinishBtn()
      editorPage.verifyEditorPageComponentsVisibility()
      cy.location('pathname').should('eq', '/editor')
    })
  })

  context('Authentication - Logout and Login functionality', () => {
    it('should be able to logout', () => {
      commonPageComponents
        .clickOnProfileAvatar()
        .clickOnProfileAvatarLogOutLink()
      commonPageComponents.verifyLoginModalComponentsVisibility()
    })

    it('should be able to login', () => {
      cy.visit('/users/sign_in')
      commonPageComponents.logInWith(email, 'password123')
      editorPage.headerElements.postBtn().should('be.visible')
      editorPage.layoutPreviewElements.mainContent().should('be.visible')
      cy.location('pathname').should('eq', '/editor')
    })
  })
})
