describe('mouseevent',()=>{
  
    beforeEach(()=>{
          cy.viewport('iphone-8')
    })

    it('verify right click',()=>{
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.contains('right click me').rightclick()

    })

    it('verify double click',()=>{
         cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
       cy.get('button').dblclick();
       cy.on('window:alert',(str)=>{
         expect(str).to.equal('You double clicked me.. Thank You..')
       })

    })

    it('mousehover function',()=>{
          cy.visit('https://www.amazon.in/')
          cy.get('#nav-link-accountList').trigger('mouseover')
          cy.get('#nav-flyout-accountList').should('be.visible')
    })


})