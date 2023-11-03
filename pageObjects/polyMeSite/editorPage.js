/// <reference types="cypress" />
import { getIframe } from '../../support/helper'
const editorIframe = 'iframe[src="/sidebar_editor"]'

class EditorPage {
  headerElements = {
    polyworkBrandIcon: () => cy.getByData('navbar-brand-polywork-icon'),
    homeLink: () => cy.getByData('navabar-home-link'),
    headerProfileAvatar: () => cy.getByData('available-profile-avatar'),
    postBtn: () => cy.getByData('post-button'),
    postBtnDropdown: () => cy.getByData('post-button-dropdown'),
    conversationsLink: () => cy.getByData('navbar-conversations-link'),
    notificationsLink: () => cy.getByData('navbar-notifications-link'),
    searchBar: () => cy.getByData('search-bar'),
    firstItemFromSearchList: () => cy.get('[data-test="search-bar"] a:first-of-type')
  }

  sideBarEditorElements = {
    self: () => cy.get(editorIframe),
    blocks: {
      blocksTab: () => '[data-test="sidebar-editor-blocks-tab"]'
    },
    layout: {
      layoutTab: () => '[data-test="sidebar-editor-layout-tab"]',
      interstellarTemplate: () => '[data-test="template-card-id-interstellar"]',
      interstellarPremiumBtn: () => '[data-test=template-get-premium-button"]'
    },
    color: {
      colorTab: () => '[data-test="sidebar-editor-color-tab"]'
    },
    type: {
      typeTab: () => '[data-test="sidebar-editor-type-tab"]'
    }
  }

  layoutPreviewElements = {
    desktopToggleBtn: () => cy.getByData('editor-preview-toggle-enableDesktopMode'),
    mobileToggleBtn: () => cy.getByData('editor-preview-toggle-enableMobileMode'),
    shareBtn: () => cy.getByData('editor-preview-share-site-link'),
    visitSiteBtn: () => cy.getByData('editor-preview-visit-site-link'),
    mainContent: () => cy.getByData('main-content'),
    upgradeToPremiumBtn: () => cy.getByData('editor-preview-upgrade-premium-button')
  }

  verifyEditorPageComponentsVisibility () {
    this.layoutPreviewElements.desktopToggleBtn().should('be.visible')
    this.layoutPreviewElements.mobileToggleBtn().should('be.visible')
    this.layoutPreviewElements.shareBtn().should('be.visible')
    this.layoutPreviewElements.visitSiteBtn().should('be.visible')
    this.layoutPreviewElements.mainContent().should('be.visible')
    this.sideBarEditorElements.self().should('be.visible')
    return this
  }

  verifyLayoutTabComponentsVisibility () {
    getIframe(editorIframe)
      .find(this.sideBarEditorElements.layout.interstellarTemplate())
      .should('be.visible')
    return this
  }

  visit () {
    cy.visit('/editor') // editor path
    return this // return page object to start chainable commands
  }

  clickOnComposerBtn () {
    this.elements.composerBtn().click()
    return this
  }

  selectFirstResultFromSearchingProfile (name) {
    this.headerElements.searchBar().type(name)
    this.headerElements.firstItemFromSearchList().click()
    return this
  }

  clickOnEditorPreviewUpgradeToPremiumBtn () {
    this.layoutPreviewElements.upgradeToPremiumBtn().click()
    return this
  }

  clickOnEditorHeaderProfileAvatar () {
    this.headerElements.headerProfileAvatar()
      .should('be.visible')
      .click()
    return this
  }
}

export default new EditorPage()
