describe('App', () => {
  it('should render a home page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[href="/sightings-map"] > .main-btns').should('contain', 'Sightings')
    cy.get('[href="/report-form"] > .main-btns').should('contain', 'Report Sighting')
  })

  it('should allow users to view sightings', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[href="/sightings-map"] > .main-btns').click()
    cy.url().should('include', '/sightings-map')
  })

  it('should allow users to fill out a sighting form and submit', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[href="/report-form"] > .main-btns').should('contain', 'Report Sighting').click()
    cy.get('#name')
      .type('test name')
      .should('have.value', `test name`)
      .get('#location')
      .type('Weatherford, TX')
      .should('have.value', `Weatherford, TX`)
      .get(':nth-child(3) > .form__label')
      .type('some description')
      .get('#description')
      .should('have.value', `some description`)
      .get('.drop-down')
      .select('Abduction')
      .should('have.value', 'abduction')
      .get('.button')
      .should('contain', 'Submit')
  })
})