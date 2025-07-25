import {homePage} from "../../pages/homePage"

const homePageObj=new homePage()

import testdata from "../../fixtures/testData.json";

describe('home page functionality',()=>{
   before(()=>{
      cy.login(testdata.login.username, testdata.login.password)
   })

    it('home page cart',()=>{
       homePageObj.searchProduct(testdata.product.productname)
       homePageObj.addToCart();
       homePageObj.verifySuccessMessage().should('contain', testdata.message.successMessage)

    })
})


