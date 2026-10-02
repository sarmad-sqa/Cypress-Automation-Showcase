class MyCheckout{
    CheckoutWithCancel(){
        cy.get('#checkout').click().wait(3000);
        cy.get('#first-name').type('Sarmad');
        cy.get('#last-name').type('Sarwar');
        cy.get('#postal-code').type('54000');
        cy.get('#cancel').click().wait(3000);
    }
    ConfirmCheckout(){
        cy.get('#checkout').click().wait(3000);
        cy.get('#first-name').type('Sarmad');
        cy.get('#last-name').type('Sarwar');
        cy.get('#postal-code').type('54000');
        cy.get('#continue').click().wait(3000);
        cy.get('#finish').click().wait(3000);
        cy.get('#back-to-products').click().wait(3000);
    }
}
export default MyCheckout;