describe('search function',()=>{

  it('search for product',()=>{

    cy.visit('https://www.flipkart.com/')
    cy.fixture('flipkartdata').then((data)=>{
    cy.get('input[title="Search for Products, Brands and More"]').type(data.products.productname)
    cy.get('._2iLD__').click()
    })
  })

})