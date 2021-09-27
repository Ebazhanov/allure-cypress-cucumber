import {Given} from 'cypress-cucumber-preprocessor/steps'

Given('User is on home page', () => {
    cy.visit('/').should
})
