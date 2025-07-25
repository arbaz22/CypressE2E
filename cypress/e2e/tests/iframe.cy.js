import 'cypress-iframe'

describe('iframe functionality',()=>{

    it('iframe',()=>{

        cy.visit('https://jqueryui.com/draggable/')
        cy.frameLoaded('.demo-frame')
        cy.iframe().find('#draggable').then(function(t){
            const frameTxt=t.text()
            expect(frameTxt).to.contains('Drag me')
            cy.log(frameTxt)
        })
    })
})