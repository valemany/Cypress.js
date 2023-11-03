export const generateRandomEmail = (domain) => {
  const sampleDomain = domain || ['example.org', 'freebies.com', 'test.net', 'random.com'][Math.floor(Math.random() * 4)]
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < 12; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return (result + '@' + sampleDomain)
}

export const getIframe = (iframe) => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return cy
    .get(iframe)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
  // wraps "body" DOM element to allow
  // chaining more Cypress commands, like ".find(...)"
  // https://on.cypress.io/wrap
}
