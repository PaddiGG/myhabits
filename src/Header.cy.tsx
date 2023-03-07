import Header from './Header'

describe('<Header />', () => {
  it('can be rendered', () => {
    cy.mount(<Header />)
    cy.contains('Hello World')
  })
})
