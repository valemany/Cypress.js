// Elements that can appear in any page of the app

class CommonPageComponents {
  // Login Modal elements and Actions
  loginModal = {
    self: () => cy.getByData('registration-signin-form'),
    iframe: () => cy.get('#modal_content iframe[src="/users/sign_in"]'),
    closeBtn: () => cy.getByData('close-modal-button'),
    title: () => cy.get('#modal_content > header.modal-sub-header > h1'),
    emailInput: () => cy.getByData('email-field'),
    passwordInput: () => cy.getByData('password-field'),
    loginBtn: () => cy.getByData('submit-button'),
    magicLink: () => cy.get('#new_user a[href="/magic_links/new"]'),
    signInWithTwitterLink: () => cy.getByData('twitter-social-login-button'),
    signInWithGoogleLink: () => cy.getByData('google_oauth2-social-login-button'),
    signInWithAppleLink: () => cy.getByData('apple-social-login-button'),
    passwordResetLink: () => cy.get('a[href="/users/password/new"]'),
    signUpLink: () => cy.getByData('sign-up-button')
  }

  verifyLoginModalComponentsVisibility () {
    this.loginModal.self().should('be.visible')
    this.loginModal.title().should('be.visible')
    this.loginModal.emailInput().should('be.visible')
    this.loginModal.passwordInput().should('be.visible')
    this.loginModal.loginBtn().should('be.visible')
    this.loginModal.magicLink().should('be.visible')
    this.loginModal.signInWithTwitterLink().should('be.visible')
    this.loginModal.signInWithGoogleLink().contains('Sign in with Google')
    this.loginModal.signInWithAppleLink().contains('Sign in with Apple')
    this.loginModal.signUpLink().should('exist')
    return this
  }

  logInWith (email, password) {
    this.loginModal.emailInput().type(email)
    this.loginModal.passwordInput().type(password)
    this.loginModal.loginBtn().click()
    return this
  }

  clickOnSignUpLinkFromModal () {
    this.loginModal.signUpLink().click()
  }

  // Profile avatar elements and actions
  profileAvatar = {
    self: () => cy.get('header [data-test="available-profile-avatar"]'),
    logIn: () => cy.getByData('sign-in-button'),
    myPage: () => cy.getByData('navbar-my-profile-link'),
    signUp: () => cy.get('a.dropdown-item[href*="/registration/flows/direct"]'),
    requests: () => cy.get('a.dropdown-item[href="/requests"]'),
    showcase: () => cy.get('a.dropdown-item[href="/showcase"]'),
    settings: () => cy.get('a.dropdown-item[href="/settings"]'),
    helpCenter: () => cy.get('a.dropdown-item[href*="//support.polywork.com"]'),
    submitAnIssue: () => cy.get('a.dropdown-item[href*="/requests/new"]'),
    switchToDarkMode: () => cy.getByData('switch-to-dark-mode'),
    logOut: () => cy.get('a.dropdown-item[href="/users/sign_out"]')
  }

  verifyProfileAvatarOptionsVisibility () {
    this.profileAvatar.myPage().should('be.visible')
    this.profileAvatar.requests().should('be.visible')
    this.profileAvatar.showcase().should('be.visible')
    this.profileAvatar.settings().should('be.visible')
    this.profileAvatar.helpCenter().should('be.visible')
    this.profileAvatar.submitAnIssue().should('be.visible')
    this.profileAvatar.switchToDarkMode().should('be.visible')
    this.profileAvatar.logOut().should('be.visible')
    return this
  }

  clickOnProfileAvatar () {
    this.profileAvatar.self().click()
    return this
  }

  clickOnProfileAvatarLogOutLink () {
    this.profileAvatar.logOut()
      .should('be.visible')
      .click()
    return this
  }

  clickOnSwitchToDarkMode () {
    this.profileAvatar.switchToDarkMode()
      .should('be.visible')
      .click()
    return this
  }
}
export default new CommonPageComponents()
