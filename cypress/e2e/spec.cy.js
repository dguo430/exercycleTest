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

  it('Return correct output while total weekly points are the maximum, daily points don`t exceed maximum', () => {
    // We enter in a value of '4' to first 5 days, and '5' to the last
    // 2 days. This should expect a total amount of points worth 30. 
    // We want to test it such that the expected total matches the maximum, as well
    // as keeping within the 7 point daily limit.
    cy.get('#individual-1-1').type('4').should('have.value','4')
    cy.get('#individual-1-2').type('4').should('have.value','4')
    cy.get('#individual-1-3').type('4').should('have.value','4')
    cy.get('#individual-1-4').type('4').should('have.value','4')
    cy.get('#individual-1-5').type('4').should('have.value','4')
    cy.get('#individual-1-6').type('5').should('have.value','5')
    cy.get('#individual-1-7').type('5').should('have.value','5')

    // After entering all values, submit the input values
    cy.get('.btn').contains('Work it out!').click()

    // Check that the table with 'Individual 1' has the correct number
    // of individual points.
    cy.get('table td').contains('Individual 1').next().should('contain','30')

    // Check that the total household points is correct
    cy.root().should('contain','Total Household points: 30')
  })

  it('Return correct output while total weekly points exceed the maximum, daily points don`t exceed maximum', () => {
    // We enter in a value of '7' to every single day
    // This should expect a total amount of points worth 30. 
    // We want to test it such that the expected total exceeds the maximum,
    // thus bounding the output to the upper limit and returning the maximum.
    cy.get('#individual-1-1').type('7').should('have.value','7')
    cy.get('#individual-1-2').type('7').should('have.value','7')
    cy.get('#individual-1-3').type('7').should('have.value','7')
    cy.get('#individual-1-4').type('7').should('have.value','7')
    cy.get('#individual-1-5').type('7').should('have.value','7')
    cy.get('#individual-1-6').type('7').should('have.value','7')
    cy.get('#individual-1-7').type('7').should('have.value','7')

    // After entering all values, submit the input values
    cy.get('.btn').contains('Work it out!').click()

    // Check that the table with 'Individual 1' has the correct number
    // of individual points.
    cy.get('table td').contains('Individual 1').next().should('contain','30')

    // Check that the total household points is correct
    cy.root().should('contain','Total Household points: 30')
  })

  it('Return error if daily points exceed maximum limit, invalid input', () => {
    // We enter in a value of '7' to every single day except one day we set it to '8''
    // This means we have an invalid input in one day, nullifying the whole
    // calculation. In result, we should not expect a household total points
    // calculation.
    cy.get('#individual-1-1').type('8').should('have.value','8')
    cy.get('#individual-1-2').type('7').should('have.value','7')
    cy.get('#individual-1-3').type('7').should('have.value','7')
    cy.get('#individual-1-4').type('7').should('have.value','7')
    cy.get('#individual-1-5').type('7').should('have.value','7')
    cy.get('#individual-1-6').type('7').should('have.value','7')
    cy.get('#individual-1-7').type('7').should('have.value','7')

    // After entering all values, submit the input values
    cy.get('.btn').contains('Work it out!').click()

    // Check that the total household points is correct
    cy.root().should('not.contain','Total Household points')
  })
})

describe('Testing for Two Individuals', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://cycle.dia-sandbox.govt.nz/')
    // We choose '1' for number of individuals in household
    cy.get('.btn').contains('2').click()

    // We clear all input values
    cy.get('#individual-1-1').clear().should('have.value','')
    cy.get('#individual-1-2').clear().should('have.value','')
    cy.get('#individual-1-3').clear().should('have.value','')
    cy.get('#individual-1-4').clear().should('have.value','')
    cy.get('#individual-1-5').clear().should('have.value','')
    cy.get('#individual-1-6').clear().should('have.value','')
    cy.get('#individual-1-7').clear().should('have.value','')

    cy.get('#individual-2-1').clear().should('have.value','')
    cy.get('#individual-2-2').clear().should('have.value','')
    cy.get('#individual-2-3').clear().should('have.value','')
    cy.get('#individual-2-4').clear().should('have.value','')
    cy.get('#individual-2-5').clear().should('have.value','')
    cy.get('#individual-2-6').clear().should('have.value','')
    cy.get('#individual-2-7').clear().should('have.value','')
  })

  it('Return correct output while total weekly points don`t exceed maximum, daily points don`t exceed maximum', () => {
    // We want to enter different numbers compared to testing for one
    // individual, in order for more variance. Here we chose more random
    // numbers to get each individual to still have a total under
    // the weekly limit.
    cy.get('#individual-1-1').type('1').should('have.value','1')
    cy.get('#individual-1-2').type('3').should('have.value','3')
    cy.get('#individual-1-3').type('5').should('have.value','5')
    cy.get('#individual-1-4').type('2').should('have.value','2')
    cy.get('#individual-1-5').type('4').should('have.value','4')
    cy.get('#individual-1-6').type('1').should('have.value','1')
    cy.get('#individual-1-7').type('0').should('have.value','0')

    cy.get('#individual-2-1').type('7').should('have.value','7')
    cy.get('#individual-2-2').type('0').should('have.value','0')
    cy.get('#individual-2-3').type('0').should('have.value','0')
    cy.get('#individual-2-4').type('1').should('have.value','1')
    cy.get('#individual-2-5').type('3').should('have.value','3')
    cy.get('#individual-2-6').type('3').should('have.value','3')
    cy.get('#individual-2-7').type('2').should('have.value','2')

    // After entering all values, submit the input values
    cy.get('.btn').contains('Work it out!').click()

    // Check that the table with individuals have the correct number
    // of individual points.
    cy.get('table td').contains('Individual 1').next().should('contain','16')
    cy.get('table td').contains('Individual 2').next().should('contain','16')

    // Check that the total household points is correct
    cy.root().should('contain','Total Household points: 32')
  })

  it('Return correct output while total weekly points are the maximum, daily points don`t exceed maximum', () => {
    // Similarly, we want each individual to have a total of the maximum,
    // which is 30.
    cy.get('#individual-1-1').type('7').should('have.value','7')
    cy.get('#individual-1-2').type('7').should('have.value','7')
    cy.get('#individual-1-3').type('7').should('have.value','7')
    cy.get('#individual-1-4').type('7').should('have.value','7')
    cy.get('#individual-1-5').type('2').should('have.value','2')
    cy.get('#individual-1-6').type('0').should('have.value','0')
    cy.get('#individual-1-7').type('0').should('have.value','0')

    cy.get('#individual-2-1').type('6').should('have.value','6')
    cy.get('#individual-2-2').type('6').should('have.value','6')
    cy.get('#individual-2-3').type('6').should('have.value','6')
    cy.get('#individual-2-4').type('6').should('have.value','6')
    cy.get('#individual-2-5').type('6').should('have.value','6')
    cy.get('#individual-2-6').type('0').should('have.value','0')
    cy.get('#individual-2-7').type('0').should('have.value','0')

    // After entering all values, submit the input values
    cy.get('.btn').contains('Work it out!').click()

    // Check that the table with individuals have the correct number
    // of individual points.
    cy.get('table td').contains('Individual 1').next().should('contain','30')
    cy.get('table td').contains('Individual 2').next().should('contain','30')

    // Check that the total household points is correct
    cy.root().should('contain','Total Household points: 60')
  })

  it('Return correct output while total weekly points exceed the maximum, daily points don`t exceed maximum', () => {
    //Rinse and repeat like for individual one
    cy.get('#individual-1-1').type('6').should('have.value','6')
    cy.get('#individual-1-2').type('6').should('have.value','6')
    cy.get('#individual-1-3').type('6').should('have.value','6')
    cy.get('#individual-1-4').type('6').should('have.value','6')
    cy.get('#individual-1-5').type('6').should('have.value','6')
    cy.get('#individual-1-6').type('1').should('have.value','1')
    cy.get('#individual-1-7').type('0').should('have.value','0')

    cy.get('#individual-2-1').type('6').should('have.value','6')
    cy.get('#individual-2-2').type('6').should('have.value','6')
    cy.get('#individual-2-3').type('6').should('have.value','6')
    cy.get('#individual-2-4').type('6').should('have.value','6')
    cy.get('#individual-2-5').type('6').should('have.value','6')
    cy.get('#individual-2-6').type('0').should('have.value','0')
    cy.get('#individual-2-7').type('2').should('have.value','2')

    // After entering all values, submit the input values
    cy.get('.btn').contains('Work it out!').click()

    // Check that the table with individuals have the correct number
    // of individual points.
    cy.get('table td').contains('Individual 1').next().should('contain','30')
    cy.get('table td').contains('Individual 2').next().should('contain','30')

    // Check that the total household points is correct
    cy.root().should('contain','Total Household points: 60')
  })

  it('Return error if daily points exceed maximum limit, invalid input', () => {
    cy.get('#individual-1-1').type('100').should('have.value','100')
    cy.get('#individual-1-2').type('3').should('have.value','3')
    cy.get('#individual-1-3').type('5').should('have.value','5')
    cy.get('#individual-1-4').type('2').should('have.value','2')
    cy.get('#individual-1-5').type('4').should('have.value','4')
    cy.get('#individual-1-6').type('1').should('have.value','1')
    cy.get('#individual-1-7').type('0').should('have.value','0')

    cy.get('#individual-2-1').type('50').should('have.value','50')
    cy.get('#individual-2-2').type('0').should('have.value','0')
    cy.get('#individual-2-3').type('0').should('have.value','0')
    cy.get('#individual-2-4').type('1').should('have.value','1')
    cy.get('#individual-2-5').type('3').should('have.value','3')
    cy.get('#individual-2-6').type('3').should('have.value','3')
    cy.get('#individual-2-7').type('2').should('have.value','2')

    // After entering all values, submit the input values
    cy.get('.btn').contains('Work it out!').click()
    // Check that the total household points is correct
    cy.root().should('not.contain','Total Household points')
  })
})