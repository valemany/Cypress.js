/// <reference types="cypress" />
import { getIframe } from '../../support/helper'
const onboardingIframe = '.modal-iframe'

class Onboarding {
  // Sign Up Modal elements and Actions
  signUpModal = {
    self: () => '[data-test="registration-step-bootstrap-initiate"]',
    emailField: () => '#user_email',
    passwordField: () => '#user_password',
    signUpBtn: () => '[data-test="submit-button"]',
    twitterBtn: () => '[data-test="twitter-social-login-button"]',
    googleBtn: () => '[data-test="google_oauth2-social-login-button"]',
    appleBtn: () => '[data-test="apple-social-login-button"]',
    termsLink: () => '#modal_content .mb-4 a[href="/terms"]',
    privacyLink: () => '#modal_content .mb-4 a[href="/privacy"]',
    loginLink: () => '#modal_content .mb-4 a[href="/users/sign_in"]'
  }

  verifySignUpModalComponentsVisibility () {
    getIframe(onboardingIframe).find(this.signUpModal.self()).should('be.visible')
    getIframe(onboardingIframe).find(this.signUpModal.emailField()).should('be.visible')
    getIframe(onboardingIframe).find(this.signUpModal.passwordField()).should('be.visible')
    getIframe(onboardingIframe).find(this.signUpModal.signUpBtn()).should('be.visible')
    getIframe(onboardingIframe).find(this.signUpModal.twitterBtn()).should('be.visible')
    getIframe(onboardingIframe).find(this.signUpModal.googleBtn()).should('be.visible')
    getIframe(onboardingIframe).find(this.signUpModal.appleBtn()).should('be.visible')
    getIframe(onboardingIframe).find(this.signUpModal.termsLink()).should('be.visible')
    getIframe(onboardingIframe).find(this.signUpModal.privacyLink()).should('be.visible')
    getIframe(onboardingIframe).find(this.signUpModal.loginLink()).should('be.visible')
    return this
  }

  fillEmailandPassword (email, password) {
    getIframe(onboardingIframe)
      .find(this.signUpModal.emailField())
      .type(email)
    getIframe(onboardingIframe)
      .find(this.signUpModal.passwordField())
      .type(password)
    return this
  }

  clickOnSignUpBtn () {
    getIframe(onboardingIframe)
      .find(this.signUpModal.signUpBtn())
      .click()
    return this
  }

  // Basic Information Modal elements and Actions
  basicInformationModal = {
    self: () => '[data-test="registration-step-user-details"]',
    firstName: () => '[data-test="first-name-field"]',
    lastName: () => '[data-test="last-name-field"]',
    buildMyPersonalBrandOption: () => '[data-test="personal-brand-list-item"]',
    sideIncomeOption: () => '[data-test="side-income-list-item"]',
    sourceOfTruthOption: () => '[data-test="source-of-truth-list-item"]',
    unsureOption: () => '[data-test="unsure-list-item"]',
    nextBtn: () => '#modal_content > div.modal-footer > button'
  }

  verifyBasicInformationModalComponentsVisibility () {
    getIframe(onboardingIframe).find(this.basicInformationModal.self()).should('be.visible')
    getIframe(onboardingIframe).find(this.basicInformationModal.firstName()).should('be.visible')
    getIframe(onboardingIframe).find(this.basicInformationModal.lastName()).should('be.visible')
    getIframe(onboardingIframe).find(this.basicInformationModal.buildMyPersonalBrandOption()).should('be.visible')
    getIframe(onboardingIframe).find(this.basicInformationModal.sideIncomeOption()).should('be.visible')
    getIframe(onboardingIframe).find(this.basicInformationModal.sourceOfTruthOption()).should('be.visible')
    getIframe(onboardingIframe).find(this.basicInformationModal.unsureOption()).should('exist')
    getIframe(onboardingIframe).find(this.basicInformationModal.nextBtn()).should('be.visible')
    return this
  }

  clickOnBasicInfoNextBtn () {
    getIframe(onboardingIframe).find(this.basicInformationModal.nextBtn()).click().wait(500)
    return this
  }

  clickOnBuildMyPersonalBrandOption () {
    getIframe(onboardingIframe)
      .find(this.basicInformationModal.buildMyPersonalBrandOption())
      .click()
    return this
  }

  clickOnSideIncomeOption () {
    getIframe(onboardingIframe)
      .find(this.basicInformationModal.sideIncomeOption())
      .click()
    return this
  }

  clickOnSourceOfTruthOption () {
    getIframe(onboardingIframe)
      .find(this.basicInformationModal.sourceOfTruthOption())
      .click()
    return this
  }

  clickOnUnsureOption () {
    getIframe(onboardingIframe)
      .find(this.basicInformationModal.unsureOption())
      .click()
    return this
  }

  fillBasicInfoFirstAndLastName (firstname, lastname) {
    getIframe(onboardingIframe)
      .find(this.basicInformationModal.firstName())
      .type(firstname)
    getIframe(onboardingIframe)
      .find(this.basicInformationModal.lastName())
      .type(lastname)
    return this
  }

  // Which school did you attend modal elements and actions
  schoolAttendanceModal = {
    self: () => cy.getByData('registration-step-onboarding-position'),
    profileAvatar: () => cy.getByData('available-profile-avatar'),
    profileSummaryHeader: () => cy.get('#profile-summary-for-onboarding-modal-header'),
    modalTitle: () => cy.get('#modal_content > header.modal-sub-header h1'),
    schoolDropdown: () => cy.getByData('school-profile-item-1'),
    schoolSearchInput: () => cy.get('#position_form .choices__list--dropdown > input'),
    degreeField: () => cy.getByData('degree-field'),
    fieldOfStudyField: () => cy.getByData('field-of-study-field'),
    startDateField: () => cy.getByData('start-date-selector'),
    nextBtn: () => cy.getByData('submit-button'),
    skipBtn: () => cy.getByData('skip-button')
  }

  verifySchoolAttendanceModalComponentsVisibility () {
    this.schoolAttendanceModal.self().should('be.visible')
    this.schoolAttendanceModal.profileAvatar().should('be.visible')
    this.schoolAttendanceModal.profileSummaryHeader().should('be.visible')
    this.schoolAttendanceModal.modalTitle().contains('Which school do you attend?')
    this.schoolAttendanceModal.schoolDropdown().should('be.visible')
    this.schoolAttendanceModal.degreeField().should('be.visible')
    this.schoolAttendanceModal.fieldOfStudyField().should('be.visible')
    this.schoolAttendanceModal.startDateField().should('be.visible')
    this.schoolAttendanceModal.nextBtn().should('be.visible')
    this.schoolAttendanceModal.skipBtn().should('be.visible')
    return this
  }

  fillCollegeStudentInfo (school, degree, fieldOfStudy, startDate) {
    this.schoolAttendanceModal.schoolDropdown().click()
    this.schoolAttendanceModal.schoolSearchInput().type(school).wait(500).type('Cypress.io{enter}') // use enter key to submit the info of dropdown
    this.schoolAttendanceModal.degreeField().type(degree)
    this.schoolAttendanceModal.fieldOfStudyField().type(fieldOfStudy)
    this.schoolAttendanceModal.startDateField().type(startDate)
    return this
  }

  clickOnSchoolAttendanceModalNextBtn () {
    this.schoolAttendanceModal.nextBtn().click()
    return this
  }

  clickOnSchoolAttendanceModalSkipBtn () {
    this.schoolAttendanceModal.skipBtn().should('be.visible').click()
    return this
  }

  // what is the main thing you do modal elements and actions
  workInfoModal = {
    self: () => cy.getByData('registration-step-onboarding-position'),
    profileAvatar: () => cy.getByData('available-profile-avatar'),
    profileSummaryHeader: () => cy.get('#profile-summary-for-onboarding-modal-header'),
    modalTitle: () => cy.get('#modal_content > header.modal-sub-header h1'),
    titleField: () => cy.getByData('title-field'),
    organizationDropdown: () => cy.getByData('organisation-profile-item-1'),
    organizationSearchInput: () => cy.get('#position_form .choices__list--dropdown > input'),
    startDateField: () => cy.getByData('start-date-selector'),
    studentToggleBtn: () => cy.getByData('student-toggle'),
    nextBtn: () => cy.getByData('submit-button'),
    skipBtn: () => cy.getByData('skip-button')
  }

  verifyWorkInfoModalComponentsVisibility () {
    cy.reload() // reloads page to verify editor route is updated
    this.workInfoModal.self().should('be.visible')
    this.workInfoModal.profileAvatar().should('be.visible')
    this.workInfoModal.profileSummaryHeader().should('be.visible')
    this.workInfoModal.modalTitle().should('be.visible')
    this.workInfoModal.organizationDropdown().should('be.visible')
    this.workInfoModal.organizationSearchInput().should('exist')
    this.workInfoModal.startDateField().should('be.visible')
    this.workInfoModal.nextBtn().should('be.visible')
    this.workInfoModal.skipBtn().should('be.visible')
    return this
  }

  fillWorkInfo (organization, title, startDate) {
    this.workInfoModal.organizationDropdown().click()
    this.workInfoModal.organizationSearchInput().type(organization).wait(500).type('Cypress.io{enter}') // use enter key to submit the info of dropdown
    this.workInfoModal.titleField().type(title)
    this.workInfoModal.startDateField().type(startDate)
    return this
  }

  clickOnStudentToggleBtn () {
    this.workInfoModal.studentToggleBtn().click()
    return this
  }

  clickOnWorkInfoMdalNextBtn () {
    this.workInfoModal.nextBtn().click()
    return this
  }

  clickOnWorkInfoMdalSkipBtn () {
    this.workInfoModal.skipBtn().click()
    return this
  }

  // Badges modal elements and actions
  badgesModal = {
    self: () => cy.getByData('registration-step-onboarding-badges-body'),
    profileAvatar: () => cy.getByData('available-profile-avatar'),
    profileSummaryHeader: () => cy.get('#profile-summary-for-onboarding-modal-header'),
    modalTitle: () => cy.get('#modal_content > header.modal-sub-header.p-4 > h1'),
    modalDescription: () => cy.get('#modal_content > header.modal-sub-header.p-4 > div'),
    searchBadgesInput: () => cy.get('#q'),
    travelerBadge: () => cy.get('#badge-selection-pill-270'),
    disabledNextBtn: () => cy.getByData('submit-button-disabled'),
    enabledNextBtn: () => cy.getByData('submit-button-enabled'),
    firstBadgeFromSearchResult: () => cy.get('span > button > span:first-of-type') // Saas Founder used for searching
  }

  verifyBadgesModalComponentsVisibility () {
    this.badgesModal.profileAvatar().should('be.visible')
    this.badgesModal.profileSummaryHeader().should('be.visible')
    this.badgesModal.modalTitle().should('be.visible')
    this.badgesModal.modalDescription().should('be.visible')
    this.badgesModal.searchBadgesInput().should('be.visible')
    this.badgesModal.travelerBadge().should('be.visible')
    return this
  }

  searchForBadge (badge) {
    this.badgesModal.searchBadgesInput().type(badge)
    cy.wait(1000)
    return this
  }

  clickOnTravelerBadge () {
    this.badgesModal.travelerBadge().click()
    return this
  }

  clickOnFirstBadgeFromSearchResults () {
    cy.wait(1000)
    this.badgesModal.firstBadgeFromSearchResult().click()
    return this
  }

  clickOnBadgeModalNextBtn () {
    this.badgesModal.enabledNextBtn().click()
    return this
  }

  // Onboarding connections modal elements and actions
  connectionsModal = {
    self: () => cy.getByData('registration-step-onboarding-connections'),
    profileAvatar: () => cy.getByData('available-profile-avatar'),
    profileSummaryHeader: () => cy.get('#profile-summary-for-onboarding-modal-header'),
    modalTitle: () => cy.get('#modal_content > header.modal-sub-header.p-4 > h1'),
    modalDescription: () => cy.get('#modal_content h5.ml-2'),
    morePeopleListItem: () => cy.get('#modal_content div.list-group.list-group-separators.p-0 .ml-2.pl-1'),
    nextBtn: () => cy.getByData('next-button')
  }

  verifyConnectionsModalComponentsVisibility (text) {
    this.connectionsModal.self().should('be.visible')
    this.connectionsModal.profileAvatar().should('be.visible')
    this.connectionsModal.profileSummaryHeader().should('be.visible')
    this.connectionsModal.modalTitle().contains(text)
    this.connectionsModal.modalDescription().should('be.visible')
    this.connectionsModal.morePeopleListItem().should('be.visible')
    this.connectionsModal.nextBtn().should('be.visible')
    return this
  }

  clickOnConnectionsModalNextBtn () {
    this.connectionsModal.nextBtn().click()
    return this
  }

  // Collaboration preferences modal elements and actions
  collaborationPreferencesModal = {
    self: () => cy.getByData('registration-step-onboarding-collaboration-preferences'),
    profileAvatar: () => cy.getByData('available-profile-avatar'),
    profileUsername: () => cy.get('#profile-summary-for-onboarding-modal-header .d-inline-flex.text-nowrap'),
    profilePosition: () => cy.get('#profile-summary-for-onboarding-modal-header .text-muted'),
    profileSelectedActivities: () => ('#profile-summary-for-onboarding-modal-header .caption-1.ellipsable'),
    modalTitle: () => cy.get('#onboarding-collaboration-preferences-title'),
    collaborationSearchInput: () => cy.get('#collaborations_search'), // Participating in user research used as search input
    givingResumeFeedbackActitivyCheckbox: () => cy.get('#opportunity-preference-recommended-5'),
    participatingInUserResearchCheckbox: () => cy.get('#opportunity-preference-all-1'),
    volunteeringCheckbox: () => cy.get('#opportunity-preference-all-6'),
    openSourceContributionsCheckbox: () => cy.get('#opportunity-preference-all-4'),
    finishBtn: () => cy.getByData('submit-button-enabled')
  }

  verifyCollaborationPreferencesModalComponentsVisibility () {
    this.collaborationPreferencesModal.self().should('be.visible')
    this.collaborationPreferencesModal.profileUsername().should('be.visible')
    this.collaborationPreferencesModal.modalTitle().should('be.visible')
    this.collaborationPreferencesModal.collaborationSearchInput().should('be.visible')
    this.collaborationPreferencesModal.finishBtn().should('be.visible')
    return this
  }

  searchForActivity (activityName) {
    this.collaborationPreferencesModal.collaborationSearchInput().type(activityName)
    cy.wait(1000)
    return this
  }

  checkParticipatingInUserResearchCheckbox () {
    this.collaborationPreferencesModal.participatingInUserResearchCheckbox().check()
    return this
  }

  checkVolunteeringCheckbox () {
    this.collaborationPreferencesModal.volunteeringCheckbox().check()
    return this
  }

  checkOpenSourceContributionsCheckbox () {
    this.collaborationPreferencesModal.openSourceContributionsCheckbox().check()
    return this
  }

  clickOnCollaborationPreferenceFinishBtn () {
    this.collaborationPreferencesModal.finishBtn().click()
    return this
  }

  // Network modal elements and actions
  networkConnectionsModal = {
    self: () => cy.getByData('connections-modal'),
    closeModalBtn: () => cy.getByData('close-modal-button'),
    modalTitle: () => cy.get('#modal_content > header.modal-sub-header'),
    modalDescription: () => cy.get('#modal_content .align-items-center.mt-4 h5'),
    connectTwitterBtn: () => cy.get('a[href *= "/users/auth/twitter?redirect_to=connections"]'),
    searchYourOrganizationBtn: () => cy.get('a[href *= "/employment_positions/new?origin=connections"]'),
    connectionsList: () => cy.getByData('list-item-element'),
    viewMoreBtn: () => cy.getByData('connections-paginate-more-button'),
    buildYourPageFirstBtn: () => cy.getByData('done-button')
  }

  verifynetworkConnectionsModalComponentsVisibility () {
    this.networkConnectionsModal.self().should('be.visible')
    this.networkConnectionsModal.closeModalBtn().should('be.visible')
    this.networkConnectionsModal.modalTitle().should('be.visible')
    this.networkConnectionsModal.modalDescription().should('be.visible')
    this.networkConnectionsModal.connectTwitterBtn().should('be.visible')
    this.networkConnectionsModal.searchYourOrganizationBtn().should('be.visible')
    this.networkConnectionsModal.connectionsList().should('be.visible')
    this.networkConnectionsModal.viewMoreBtn().should('be.visible')
    this.networkConnectionsModal.buildYourPageFirstBtn().should('be.visible')
    return this
  }

  clickOnNetworkModalBuildYourPageFirstBtn () {
    this.networkConnectionsModal.buildYourPageFirstBtn().click()
    return this
  }
}

export default new Onboarding()
