describe('Login Component', () => {
  it('Checks if a user can login successfully', () => {
    cy.visit('/login')
    cy.get('input[name=email]').type('jestink@live.com')
    cy.get('input[name=password]').type(`Password123{enter}`)


  })
})