class NewLogin{
    visit(){
        cy.visit('https://www.saucedemo.com/').wait(2000);
    }
    EnterUsername(username){
        cy.get('#user-name').type(username);
    }
    EnterPassword(password){
        cy.get('#password').type(password);
    }
    ClickButton(){
        cy.get('#login-button').click().wait(3000);
    }
}
export default NewLogin;