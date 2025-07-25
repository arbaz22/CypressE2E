describe('refresh functionality',()=>{
    it('refresh functionality',()=>{
        cy.visit('https://www.amazon.in/')
        cy.contains('Bestseller').should('be.visible')
        cy.reload()
         cy.contains('Bestseller').should('be.visible')
         cy.reload(true)
          cy.contains('Bestseller').should('be.visible')
          cy.reload({timeout:5000})
           cy.contains('Bestseller').should('be.visible')
           cy.window().then((data)=>{
             data.location.reload()
             cy.contains('Bestseller').should('be.visible')
           })
    })
})