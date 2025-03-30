describe('Login Functionality', () => {
  it('Login and Logout', () => {
    cy.visit('https://home24-frontend.vercel.app')
    cy.get('#basic_username').type('admin')
    cy.get('#basic_password').type('123')
    cy.get('.ant-btn').click({ force: true })
    cy.wait(3000)
    cy.get('.ant-btn').click({ force: true })
  })
})