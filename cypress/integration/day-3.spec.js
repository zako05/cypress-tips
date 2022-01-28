describe('Error: Cypress detecte that you invoked one or momr cy commands', () => {
  it.skip('Mocha does not know when to finish the test, when promis is resolved or call "done" callback', (done) => {
    // expect(true).to.equal(true)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
        done()
      }, 2000)
    })
  })

  it.skip('another example', () => {
    // throws "Cypress command inside promise" error
    // cy.wrap(
    //   new Cypress.Promise((resolve) => {
    //     setTimeout(() => {
    //       cy.log('something else')
    //       cy.wrap(100)
    //       resolve(3)
    //     }, 2000)
    //   })
    // ).should('equal', 3)
  })

  it('works', () => {
    cy.wrap(3).wait(1000).then(() =>{ 
      cy.log('resolving')
    }).should('equal', 3)
  })
})
