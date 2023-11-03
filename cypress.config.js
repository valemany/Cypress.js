const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    projectId: 'v1q6qx', // Used for cypress cloud integration
    baseUrl: 'http://localhost:3000/',
    defaultCommandTimeout: 15000,
    experimentalWebKitSupport: true,
    chromeWebSecurity: false,
    trashAssetsBeforeRuns: false,
    screenshotOnRunFailure: true,
    watchForFileChanges: false,
    testIsolation: false,
    viewportWidth: 1440,
    viewportHeight: 900,
    env: {
      grepFilterSpecs: true
    },
    setupNodeEvents (on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    }
  },
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 1
  }
})
