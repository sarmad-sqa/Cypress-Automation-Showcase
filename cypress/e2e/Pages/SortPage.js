class SortPage{
    sorting(){
        cy.get('.product_sort_container').select('Name (Z to A)').wait(3000);
       // cy.get('#item_3_title_link').click();
    }
}
export default SortPage;