// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-iframe'
import onboardingPage from '../pageObjects/polyMeSite/onboardingPage'
import homePage from '../pageObjects/polyMeSite/homePage'
import editorPage from '../pageObjects/polyMeSite/editorPage'
import { generateRandomEmail } from './helper'
import commonPageComponents from '../pageObjects/polyMeSite/commonPageComponents'

Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add('signup', (firstName, lastName, password) => {
  const email = generateRandomEmail()
  cy.clearAllCookies()
  homePage
    .visit()
    .clickOnGetStartedBtnFreePlan()
  onboardingPage
    .verifySignUpModalComponentsVisibility()
    .fillEmailandPassword(email, password)
    .clickOnSignUpBtn()
    .fillBasicInfoFirstAndLastName(firstName, lastName)
    .clickOnUnsureOption()
    .clickOnBasicInfoNextBtn()
    .verifyWorkInfoModalComponentsVisibility()
    .clickOnSchoolAttendanceModalSkipBtn()
    .clickOnTravelerBadge()
    .clickOnBadgeModalNextBtn()
    .verifyCollaborationPreferencesModalComponentsVisibility()
    .clickOnCollaborationPreferenceFinishBtn()
  cy.location('pathname').should('eq', '/editor')
  editorPage.verifyEditorPageComponentsVisibility()
})

Cypress.Commands.add('logout', () => {
  cy.visit('/users/sign_out').wait(1000)
})

Cypress.Commands.add('switchToDarkMode', () => {
  editorPage
    .visit()
    .clickOnEditorHeaderProfileAvatar()
  commonPageComponents.clickOnSwitchToDarkMode()
})
