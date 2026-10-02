class MyLogout{
    LogoutFrom(){
        cy.get('.bm-burger-button').click().wait(3000);
        cy.get('#logout_sidebar_link').click().wait(3000);
    }
}
export default MyLogout;