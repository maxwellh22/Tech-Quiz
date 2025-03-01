describe('Tech Quiz End-to-End Test', () => {
    beforeEach(() => {
      cy.visit('/'); 
    });
  
    it('loads the homepage and shows the start button', () => {
      cy.get('button').contains('Start Quiz').should('be.visible');
    });
  
    it('starts the quiz when clicking the start button', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.get('h2').should('be.visible'); 
    });
  
    it('completes the quiz and shows the score', () => {
      cy.get('button').contains('Start Quiz').click();
      
      for (let i = 0; i < 10; i++) {
        cy.get('button').eq(1).click(); 
      }
  
      cy.contains('Quiz Completed').should('be.visible');
      cy.contains('Your score:').should('be.visible');
    });
  
    it('restarts the quiz after completion', () => {
      cy.get('button').contains('Start Quiz').click();
      
      for (let i = 0; i < 10; i++) {
        cy.get('button').eq(1).click();
      }
      
      cy.contains('Quiz Completed').should('be.visible');
      cy.get('button').contains('Take New Quiz').click();
      cy.get('h2').should('be.visible'); 
    });
  });