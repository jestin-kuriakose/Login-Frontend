describe('Register Component', () => {
  it('Checks if a user can register successfully', () => {
    cy.visit('/register')
    cy.get('input[name=firstName]').type("Jestin")
    cy.get('input[name=lastName]').type("Kuriakose")
    cy.get('input[name=email]').type("jestink@live.com")
    cy.get('input[name=password]').type(`Password123{enter}`)

  })
})