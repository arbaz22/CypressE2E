describe('navigation functionality',()=>{

    it('navigation functionality',()=>{

        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
        cy.contains('Software').click()
        cy.contains('There are no products to list in this category.').should('be.visible')
        cy.go("back");
        cy.contains('Register').click({force:true})
        cy.contains('Register Account').should('be.visible')
        cy.go("forward")
    })
})