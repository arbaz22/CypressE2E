describe('broken links',()=>{
    it('broken links in web page',()=>{
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
        let brokenLinks=0;
        let activeLinks=0;

        cy.get('a').each(($link,index)=>{

            const href=$link.attr('href')
            if(href)
            {
                cy.request({url:href,failOnStatusCode:false}).then((response)=>{
                    if(response.status>=400)
                    {
                        cy.log(`**** link ${index+1} is broken link ****`)
                        brokenLinks++
                    }
                    else{
                        cy.log(`**** link ${index+1} is active link ****`)
                        activeLinks++
                    }
                })
            }
        }).then(($links=>{
            const totalLink=$links.length;
            cy.log(`****total links*****${totalLink}`)
            cy.log(`***broken links****${brokenLinks}`)
            cy.log(`******active links***** ${activeLinks}`)

        }))
    })
})
