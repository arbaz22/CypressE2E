describe('bootstrap dropdown',()=>{
    it('bootstrap functionality',()=>{

        cy.visit('http://seleniumpractise.blogspot.in/2016/08/bootstrap-dropdown-example-for-selenium.html')
        cy.get('#menu1').click()
        cy.get("a[role='menuitem']").each(function($ele,index,list){

            if($ele.text()==='JavaScript')
            {
                cy.log('element foud')
                cy.wrap($ele).click()
                
            }
            else
            {
               cy.log('current value', +$ele.text())
            }
        })
    })
})