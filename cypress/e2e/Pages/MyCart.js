class MyCart{
    AddToCart(){
        cy.get('#add-to-cart').click().wait(3000);
        cy.get('.shopping_cart_link').should('be.visible').wait(3000);
    }
    RemoveFromProductPage(){
        cy.get('#remove').click().wait(3000);
        cy.get('.shopping_cart_link').should('be.visible').wait(3000);
    }
    ClickOnCartIcon(){
        cy.get('.shopping_cart_link').should('be.visible').click().wait(3000);
    }
    RemoveFromCart(){
        cy.contains('Remove').click().wait(3000);
        cy.get('#continue-shopping').click().wait(3000);
    }

}
export default MyCart;