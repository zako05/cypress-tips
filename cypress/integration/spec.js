describe('Lodash & Ramds work', () => {
  it('lodash works', () => {
    cy.wrap(Cypress._.range(1, 5)).should('deep.equal', [1, 2, 3, 4])
  })
  
  it('ramda works', () => {
    cy.wrap(Cypress.R.range(1, 5)).should('deep.equal', [1, 2, 3, 4])
  })
})
