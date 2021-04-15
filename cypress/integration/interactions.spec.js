describe('Testing the first UI features', function(){
    beforeEach(()=>{
        cy.visit('/')
    })
    it('tests for heading', function(){
        cy.contains('Calculator')
    })
      it('tests if image is loaded', function(){
         cy.get('body').find('img').should('be.visible');
    })
     it('Number 1 button is visible', function(){
        cy.get('#number-one').contains('1')
        cy.get('#number-one').click()
})
     it(" '+'button is visible", function(){
        cy.get('#add-button').should('be.visible')
})
})