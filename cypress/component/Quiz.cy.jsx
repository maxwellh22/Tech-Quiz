import React from 'react';
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';

describe('Quiz Component', () => {
  it('renders the start button initially', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('starts the quiz when clicking the start button', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('h2').should('exist'); 
  });

  it('displays a new question after answering one', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('button').eq(1).click(); 
    cy.get('h2').should('exist'); 
  });

  it('displays the score when the quiz is completed', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    
    for (let i = 0; i < 10; i++) {
      cy.get('button').eq(1).click();
    }

    cy.contains('Quiz Completed').should('be.visible');
    cy.contains('Your score:').should('be.visible');
  });
});