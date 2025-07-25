describe('select functionality',()=>{

    xit('select functionality test',()=>{

        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
   //    cy.get('#select-demo').select('Sunday',{delay:2000})
     cy.wait(2000)

    //  cy.get('#select-demo').select(4,{delay:1000}).should('have.value','Wednesday')

          cy.get('#select-demo').select(4)

      cy.get('#select-demo option:selected').should('have.text','Wednesday')
    })

    it('multi select functionality',()=>{
          cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')

          cy.wait(2000)

          cy.get('#multi-select').select(['California','Texas','Washington'])
          

    })
})