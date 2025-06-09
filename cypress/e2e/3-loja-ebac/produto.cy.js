/// <reference types="cypress" />

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/');
    });
  
describe('funcionalidade: produtos', () => {
     beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/');
    });
    it('deve selecionar produtos ao carrinho', () => {
        cy.get('.product-block ')
        .first()
        .click()
        cy.get('#tab-title-additional_information > a').contains('Informação adicional');
    });
});