describe('App', () => {
  it('should render a home page with three buttons', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[href="/sightings-map"] > .btns').should('contain', 'Sightings')
    cy.get('[href="/report-form"] > .btns').should('contain', 'Report Sighting')
    cy.get('[href="/sighting-research"] > .btns').should('contain', 'Research')
  })

  it('should allow users to view sightings page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[href="/sightings-map"] > .btns').click()
    cy.url().should('include', '/sightings-map')

    cy.get('.button-div > :nth-child(1)').should('contain', 'Toggle HeatMap')
    cy.get('.button-div > :nth-child(2)').should('contain', 'Show Recent Activity')
    cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]')
  })

  it('should allow users to view a sightings details', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[href="/sightings-map"] > .btns').click()
    cy.url().should('include', '/sightings-map')

    cy.get('[style="width: 50px; height: 50px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 216px; top: 116px; z-index: 166;"] > img').click()
    cy.get('.gm-style-iw-d > :nth-child(1) > :nth-child(1) > div > :nth-child(2)').should('contain', 'it was chill')
  })

  it.skip('should allow users to comment on a sighting', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[href="/sightings-map"] > .btns').click()
    cy.url().should('include', '/sightings-map')

    cy.get('[style="width: 50px; height: 50px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 216px; top: 116px; z-index: 166;"] > img').click()
    cy.get('a > button').click()
    cy.get('#comment-form > :nth-child(1)')
      .type('Michael Schenker')
    cy.get('#comment-form > :nth-child(2)')
      .type('I was in a ufo once')
    cy.get('.btns').click()
    cy.get('.display-comment > :nth-child(1)').should('contain', 'I was in a ufo once ~Michael Schenker')
  })

  it.skip('should allow users to fill out a sighting form and submit', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[href="/report-form"] > .btns').should('contain', 'Report Sighting').click()
    cy.get('#name')
      .type('test name')
      .should('have.value', `test name`)
      .get('#city')
      .type('Kansas City')
      .should('have.value', `Kansas City`)
      .get('#state')
      .type('Missouri')
      .should('have.value', `Missouri`)
      .get('#description')
      .type('I was taken, help')
      .should('have.value', `I was taken, help`)
      .get('.drop-down')
      .select('Abduction')
      .should('have.value', 'abduction')

    cy.get('.form-btns > :nth-child(1) > a > .button').click()
    cy.get('[href="/#"] > a > .button').click()
    cy.get('[href="/sightings-map"] > .btns').click()
    cy.get('[style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"] > :nth-child(79) > img')
  })

  it('should allow users to view sightings by state', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[href="/sighting-research"] > .btns').should('contain', 'Research').click()
    cy.get('.drop-down').select('TENNESSEE')
    cy.get('.filter-section > :nth-child(1)').should('contain', 'City: Gallatin')
  })
})