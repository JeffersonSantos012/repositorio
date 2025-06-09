/// <reference types="cypress" />


describe('Funcionalidade: Login', () => {
  it('Deve fazer login com sucesso', () => {
    
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');

    cy.get('#username').type('jef@gmail.com');
    cy.get('#password').type('123456');
    cy.get('.woocommerce-form > .button').click();

    cy.get('.page-title').should('contain', 'Minha conta');
  });
});


  it('deve exibir uma mensagem de erro', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    cy.get('#username').type('jeff@gmail.com');
    cy.get('#password').type('123456');
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-error')
      .should('include.text', 'Endereço de e-mail desconhecido');


  
  });

