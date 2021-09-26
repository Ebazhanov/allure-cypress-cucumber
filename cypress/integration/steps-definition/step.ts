import {Given} from 'cypress-cucumber-preprocessor/steps'

Given('User on home page', () => {
    cy.visit('/').should
})
