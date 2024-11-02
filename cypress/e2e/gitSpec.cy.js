import { elements } from "../pages/GihtubMainPage";
describe('Selectors for github menu bar', () => {
  it('should visit github and select buttons in main menu', () => {
    cy.log("visiting GitHub's main page") 
    cy.visit('')
    cy.log("checking if elements of main menu exist and they are visible") 
    elements.githubLogo().should('be.visible')
    elements.btnProduct().should('be.visible')
    elements.btnSolutions().should('be.visible')
    elements.btnResources().should('be.visible')
    elements.btnOpenSource().should('be.visible')
    elements.btnEnterprise().should('be.visible')
    elements.btnPricing().should('be.visible')
    elements.btnSearchIcon().should('be.visible')
    elements.btnSignIn().should('be.visible')
    elements.btnSignUp().should('be.visible')
  });})