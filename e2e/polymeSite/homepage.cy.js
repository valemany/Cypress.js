import homePage from '../../pageObjects/polyMeSite/homePage'
import onboardingPage from '../../pageObjects/polyMeSite/onboardingPage'
import commonPageComponents from '../../pageObjects/polyMeSite/commonPageComponents'

describe('Homepage components verification', { tags: ['homepage', 'all', 'CI'] }, () => {
  before(() => {
    homePage.visit()
  })

  context('Logged out Header Section', () => {
    it('should display all expected components in the header', () => {
      homePage.verifyLoggedOutHeaderComponentsVisibility()
    })

    it('should display correct texts for links and buttons in the header', () => {
      homePage.headerElements.signInLink().contains('Sign In')
      homePage.headerElements.signUpBtn().contains('Sign Up')
    })

    it('should display the sign up modal after clicking the SignUp button', () => {
      homePage.clickHeaderSignUpBtn()
      onboardingPage.verifySignUpModalComponentsVisibility()
    })

    it('should display the login modal after clicking the Sign In link', () => {
      homePage
        .visit()
        .clickHeaderSignInLink()
      commonPageComponents.loginModal.iframe().should('be.visible')
    })
  })

  context('Homepage main content and footer', () => {
    it('should display the page title on the main content with a Get Started button', () => {
      homePage.visit()
      homePage.elements.heroTitle().invoke('attr', 'data-test')
        .should('contain', 'homepage-title-text')
      homePage.elements.getStartedBtnHeroSection().should('be.visible')
    })

    it('should display all expected body and footer components', () => {
      homePage
        .visit()
        .verifyHomepageComponentsVisibility()
        .verifyFooterComponentsVisibility()
    })

    it('should display the sign up modal when user clicks on the Get started btn in the hero section', () => {
      homePage
        .verifyHomepageComponentsVisibility()
        .clickOnGetStartedBtnHeroSection()
      onboardingPage.verifySignUpModalComponentsVisibility()
    })

    it('should display the sign up modal when user clicks on the Get started btn in the free plan card', () => {
      homePage
        .visit()
        .clickOnGetStartedBtnFreePlan()
      onboardingPage.verifySignUpModalComponentsVisibility()
    })

    it('should display the sign up modal when user clicks on the Get started btn in the premium plan card', () => {
      homePage
        .visit()
        .clickOnGetStartedBtnPremiumPlan()
      onboardingPage.verifySignUpModalComponentsVisibility()
    })

    it('should display the correct default price in the premium Card', () => {
      homePage.visit()
      homePage.elements.premiumCardPriceActive().contains('10/month')
    })

    it('should provide a discounted price when changing plan to a yearly subscription', () => {
      homePage.clickOnPremimCardToggle()
      homePage.elements.premiumCardPriceActive().should('contain', '96/year')
        .and('contain', 'Save 20%')
    })
  })
})
