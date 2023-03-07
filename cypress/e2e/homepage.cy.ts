describe('When I visit the homepage', () => {
  it('I can see the heading', () => {
    cy.visit('/')
    cy.contains('Hello World')
  })
})
