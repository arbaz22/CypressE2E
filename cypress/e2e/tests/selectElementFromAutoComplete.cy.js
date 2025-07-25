describe('select element',()=>{
    it('select element functionality',()=>{

        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type("Mukesh Otwani",{ delay: 100 })
        cy.get("div[role='option']").each(function($ele,index,$list){
            if($ele.text().includes('mukesh otwani github'))
            {
               cy.wrap($ele).click()
            }
            else
            {
                cy.log($ele)
            }
        })

    })
})