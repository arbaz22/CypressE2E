describe('opening in same tab',()=>{
    beforeEach(function ()
    {
            cy.visit('https://selectorshub.com/xpath-practice-page/') 
    })

    it('opening in new tab',()=>{

       
        cy.contains('Username').invoke('removeAttr','target').click()
    })

    it('opening in same tab',()=>{

        cy.contains('COurse Link',{matchCase:false}).invoke('attr','target','_self').click()

    })
})