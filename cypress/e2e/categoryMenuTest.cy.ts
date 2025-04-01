describe('Product page', () => {
  it('Category Menu Test', () => {
    cy.visit('https://home24-frontend.vercel.app')
    cy.get('#basic_username').type('admin')
    cy.get('#basic_password').type('123')
    cy.get('.ant-btn').click({ force: true })
    cy.wait(3000)
    cy.contains('Furniture').click()
    cy.wait(4000)
    cy.get('[data-row-key="1"] > :nth-child(2)').click()
  })
})