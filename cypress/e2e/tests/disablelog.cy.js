describe('disablelog fucntionality',()=>{
  it('disable log',()=>{

    cy.viewport('macbook-16')
     
    cy.visit('https://www.google.com/')

    cy.get('#APjFqb').type('mukesh',{log:false})

   //  cy.get('#APjFqb').type('mukesh')

  })
})