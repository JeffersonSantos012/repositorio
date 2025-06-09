
/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('funcionalidade: registro ', () => {
    it.only('deve ser registrado um novo usuario', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#reg_email').type(faker.internet.email());
        cy.get('#reg_password').type('123456');
        cy.get(':nth-child(4) > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
          .should('contain', 'Olá');
    });
});