describe('shadow dom',()=>{
    it('shadow dom functionality',()=>{

        cy.visit('https://selectorshub.com/xpath-practice-page/')
        
      //  cy.get('#pizza').type('Testing shadow dom');

    //  cy.get('#userName').should('exist')
    //    .shadow()
    //    .find('#app2').should('exist')
    //    .shadow()
    cy.scrollTo(0, 900);
       cy.get("#pizza").type('Testing shadow dom');
    })
})