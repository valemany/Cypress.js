/// <reference types="cypress" />

class Homepage {
  headerElements = {
    polyworkBrandLink: () => cy.get('.nav_container a[href="/"].nav_brand'),
    pricingLink: () => cy.get('.nav_menu-items-inner a[href="/pricing"]'),
    blogLink: () => cy.get('.nav_menu-items-inner a[href*="blog"]'),
    signInLink: () => cy.getByData('sign-in-button'),
    signUpBtn: () => cy.get('.nav_menu-items-inner a[href*="/modals/iframe?iframe_path=%2Fregistration"]')
  }

  verifyLoggedOutHeaderComponentsVisibility () {
    this.headerElements.polyworkBrandLink().should('be.visible')
    this.headerElements.pricingLink().should('be.visible')
    this.headerElements.blogLink().should('be.visible')
    this.headerElements.signInLink().should('be.visible')
    this.headerElements.signUpBtn().should('be.visible')
    return this
  }

  clickHeaderSignUpBtn () {
    this.headerElements.signUpBtn().click()
    return this
  }

  clickHeaderSignInLink () {
    this.headerElements.signInLink().click()
    return this
  }

  elements = {
    flowSection: () => cy.get('.section_hp-flow'),
    featuresContainer: () => cy.get('.hp-features_container'),
    leadersContainer: () => cy.get('.hp-leaders_container'),
    tweetsContainer: () => cy.get('.hp-tweets_container'),
    plansContainer: () => cy.get('.hp-plans_container'),
    heroTitle: () => cy.getByData('homepage-title-text'),
    getStartedBtnHeroSection: () => cy.get('.section_hp-hero-title a[href*="/modals/iframe?iframe_path=%2Fregistration"]'),
    getStartedBtnFreePlan: () => cy.get('.plans_card-button-wrap a[href*="/modals/iframe?iframe_path=%2Fregistration"]').first(),
    getStartedBtnPremiumPlan: () => cy.get('.plans_card-button-wrap a[href*="/modals/iframe?iframe_path=%2Fregistration"]').last(),
    premiumPlanToggle: () => cy.get('#w-tabs-0-data-w-tab-1'),
    premiumCardPriceActive: () => cy.get('.plans_card-tabs-content .w--tab-active')
  }

  verifyHomepageComponentsVisibility () {
    this.elements.flowSection().should('be.visible')
    this.elements.featuresContainer().should('be.visible')
    this.elements.leadersContainer().should('be.visible')
    this.elements.tweetsContainer().should('be.visible')
    this.elements.plansContainer().should('be.visible')
    this.elements.getStartedBtnHeroSection().should('be.visible')
    this.elements.getStartedBtnFreePlan().should('exist')
    this.elements.getStartedBtnPremiumPlan().should('exist')
    return this
  }

  clickOnGetStartedBtnHeroSection () {
    this.elements.getStartedBtnHeroSection().click()
    return this
  }

  clickOnGetStartedBtnFreePlan () {
    this.elements.getStartedBtnFreePlan().click()
    return this
  }

  clickOnGetStartedBtnPremiumPlan () {
    this.elements.getStartedBtnPremiumPlan().click()
    return this
  }

  clickOnPremimCardToggle () {
    this.elements.premiumPlanToggle().click()
  }

  footerElements = {
    twitterLink: () => cy.get('.footer_links a[href*="twitter"]'),
    linkedInLink: () => cy.get('.footer_links a[href*="linkedin"]'),
    instagramLink: () => cy.get('.footer_links a[href*="instagram"]'),
    facebookLink: () => cy.get('.footer_links a[href*="facebook"]'),
    polyworkBrandLink: () => cy.get('.footer_container a .img-brand'),
    logInLink: () => cy.get('.footer_links a[href*="/users/sign_in?modal=false"]'),
    careersLink: () => cy.get('.footer_links a[href*="wellfound.com/company/polywork/jobs"]'),
    helpCenterLink: () => cy.get('.footer_links a[href*="support.polywork"]'),
    blogLink: () => cy.get('.footer_links a[href*="blog.polywork.com"]'),
    privacyLink: () => cy.get('.footer_links a[href*="/privacy"]'),
    termslink: () => cy.get('.footer_links a[href*="/terms"]')
  }

  verifyFooterComponentsVisibility () {
    cy.scrollTo('bottom')
    this.footerElements.twitterLink().should('be.visible')
    this.footerElements.linkedInLink().should('be.visible')
    this.footerElements.instagramLink().should('be.visible')
    this.footerElements.facebookLink().should('be.visible')
    this.footerElements.polyworkBrandLink().should('be.visible')
    this.footerElements.logInLink().should('be.visible')
    this.footerElements.careersLink().should('be.visible')
    this.footerElements.helpCenterLink().should('be.visible')
    this.footerElements.blogLink().should('be.visible')
    this.footerElements.privacyLink().should('be.visible')
    this.footerElements.termslink().should('be.visible')
    cy.scrollTo('top')
    return this
  }

  visit () {
    cy.visit('/').wait(1000) // homepage path
    this.elements.getStartedBtnHeroSection().should('be.visible')
    return this // return page object to start chainable commands
  }
}

export default new Homepage()
