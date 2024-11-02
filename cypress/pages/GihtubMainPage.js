class ghMainPage{
    elements ={
        githubLogo : () => cy.get('a[aria-label="Homepage"]'),
        btnProduct : () => cy.get('li > button').eq(0),
        btnSolutions : () => cy.get('li > button').eq(1),
        btnResources : () => cy.get('li > button').eq(2),
        btnOpenSource : () => cy.get('li > button').eq(3),
        btnEnterprise : () => cy.get('li > button').eq(4),
        btnPricing : () => cy.get('a[href="https://github.com/pricing"]'),
        btnSearchIcon : () => cy.get('button[aria-label="Search or jump to…"]'),
        btnSignIn : () => cy.get('div[class^="position-relative"] > a[href="/login"]'),
        btnSignUp : () => cy.get('div > a[href^="/signup"]'),
    }
    clickGithubLogo(){
        githubLogo.click()
    } 
    clickBtnProduct(){
        btnProduct.click()
    }
    clickBtnSolutions(){
        btnSolutions.click()
    }
    clickBtnResources(){
        btnResources.click()
    }
    clickBtnOpenSource(){
        btnOpenSource.click()
    }
    clickBtnEnterprise(){
        btnEnterprise.click()
    }
    clickBtnPricing(){
        btnPricing.click()
    }
    clickBtnSearchIcon(){
        btnSearchIcon.click()
    }
    clickBtnSignIn(){
        btnSignIn.click()
    }
    clickBtnSignUp(){
        btnSignUp.click()
    }
}
module.exports = new ghMainPage();