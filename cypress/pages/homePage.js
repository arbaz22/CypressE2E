export class homePage
{
    webLocators={
       searchBox:'.form-control',
       searchIcon:'.btn.btn-default.btn-lg',
       product: ':nth-child(1) > .product-thumb > .image > a > .img-responsive',
       addToCartButton: 'button[id="button-cart"]',
       successMessage:'div.alert.alert-success.alert-dismissible'


    }

    searchProduct(productname)
    {
        cy.get(this.webLocators.searchBox).type(productname)
        cy.get(this.webLocators.searchIcon).click()
    }

    addToCart()
    {
        cy.get(this.webLocators.product).click({multiple:true})
        cy.get(this.webLocators.addToCartButton).click()
    }

    verifySuccessMessage()
    {
        return cy.get(this.webLocators.successMessage)
    }

}