class SearchingPage{
    newsearch(){
        cy.get('#item_3_title_link').click().wait(3000);
    }
}
export default SearchingPage;