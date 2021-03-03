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

    cy.get('[style="width: 50px; height: 50px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -240px; top: -209px; z-index: -159;"] > img').click()
    cy.get('.gm-style-iw-d > :nth-child(1) > :nth-child(1) > div > :nth-child(2)').should('contain', 'I Went to space')
  })

  it.skip('should allow users to comment on a sighting', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[href="/sightings-map"] > .btns').click()
    cy.url().should('include', '/sightings-map')

    cy.get('[style="width: 50px; height: 50px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -240px; top: -209px; z-index: -159;"] > img').click()
    cy.get('a > button').click()
    cy.get('#comment-form > :nth-child(1)')
      .type('Michael Schenker')
    cy.get('#comment-form > :nth-child(2)')
      .type('cool comment about ufo')
    cy.get('.btns').click()
    cy.get('.display-comment > :nth-child(1)').should('contain', 'cool comment about ufo ~Michael Schenker')
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