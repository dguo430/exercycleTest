describe('Testing for one Individual', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://cycle.dia-sandbox.govt.nz/')
    // We choose '1' for number of individuals in household
    cy.get('.btn').contains('1').click()

    // We clear all input values
    cy.get('#individual-1-1').clear().should('have.value','')
    cy.get('#individual-1-2').clear().should('have.value','')
    cy.get('#individual-1-3').clear().should('have.value','')
    cy.get('#individual-1-4').clear().should('have.value','')
    cy.get('#individual-1-5').clear().should('have.value','')
    cy.get('#individual-1-6').clear().should('have.value','')
    cy.get('#individual-1-7').clear().should('have.value','')
  })

  it('Return correct output while total weekly points don`t exceed maximum, daily points don`t exceed maximum', () => {
    // We enter in a value of '2' to all days. This should expect
    // a total amount of points worth 14. We want to test it such
    // that the expected total does not yet exceed maximum, as well
    // as keeping within the 7 point daily limit.
    cy.get('#individual-1-1').type('2').should('have.value','2')
    cy.get('#individual-1-2').type('2').should('have.value','2')
    cy.get('#individual-1-3').type('2').should('have.value','2')
    cy.get('#individual-1-4').type('2').should('have.value','2')
    cy.get('#individual-1-5').type('2').should('have.value','2')
    cy.get('#individual-1-6').type('2').should('have.value','2')
    cy.get('#individual-1-7').type('2').should('have.value','2')

    // After entering all values, submit the input values
    cy.get('.btn').contains('Work it out!').click()

    // Check that the table with 'Individual 1' has the correct number
    // of individual points.
    cy.get('table td').contains('Individual 1').next().should('contain','14')

    // Check that the total household points is correct
    cy.root().should('contain','Total Household points: 14')
  })
})