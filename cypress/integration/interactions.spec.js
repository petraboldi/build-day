describe('Testing UI features', function(){
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
     it("user adds up two numbers", function(){
        cy.get('#number-two').click()
        cy.get('#add-button').click()
        cy.get('#number-two').click()
        cy.get('#equals-button').click()
        cy.get('p').should('have.text', '4')
})
     it("user does subtracting", function(){
        cy.get('#number-eight').click()
        cy.get('#subtract-button').click()
        cy.get('#number-three').click()
        cy.get('#equals-button').click()
        cy.get('p').should('have.text', '5')
})
     it("user can multiply numbers", function(){
        cy.get('#number-five').click()
        cy.get('#multiply-button').click()
        cy.get('#number-eight').click()
        cy.get('#equals-button').click()
        cy.get('p').should('have.text', '40')
})
     it("user can do division", function(){
        cy.get('#number-nine').click()
        cy.get('#divide-button').click()
        cy.get('#number-three').click()
        cy.get('#equals-button').click()
        cy.get('p').should('have.text', '3')
})
     it("user clears result from the page", function(){
        cy.get('#number-eight').click()
        cy.get('#subtract-button').click()
        cy.get('#number-three').click()
        cy.get('#equals-button').click()
        cy.get('#clear').click()
        cy.get('p').should('not.have.text', '5')
})
     it("See history of searches", function(){
        cy.get('#number-eight').click()
        cy.get('#subtract-button').click()
        cy.get('#number-three').click()
        cy.get('#equals-button').click()
        cy.get('#clear').click()
        cy.get('#see-history').click()
        cy.get('li').should('have.text','8-3=5')
})
     it("Delete history", function(){
        cy.get('#number-eight').click()
        cy.get('#subtract-button').click()
        cy.get('#number-three').click()
        cy.get('#equals-button').click()
        cy.get('#clear').click()
        cy.get('#see-history').click()
        cy.get('#delete-history').click()
        cy.get('#history').should('not.have.text', '8-3=5')
})
})