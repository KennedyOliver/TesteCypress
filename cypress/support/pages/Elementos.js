class Elementos{

    clickCookies(){
        cy.get("#onetrust-accept-btn-handler").should('be.visible').click()
    }
    clickBtnAbrasuaConta(){
        cy.contains('button', 'Abra sua conta').should('be.visible').click()
    }
    campoNome(){
        cy.get('input[name="name"]').should('be.visible').type("Kennedy Oliveira")
    }
    campoCelular(){
        cy.get('input[name="phone"]').should('be.visible').type("61982148152")
    }
    campoEmail(){
        cy.get('input[name="email"]').should('be.visible').type("kennedy.oliver@live.com")
    }
    campoCpf(){
        cy.get('input[name="socialId"]').should('be.visible').type("07189278508")
    }
    campoDataNasc(){
        cy.get('input[name="dateOfBirth"]').should('be.visible').type("23041996")
    }
    checkBox(){
        cy.xpath("//label[@aria-label='Campo de aceite']").should('be.visible').click()
    }
    btnContinuar(){
        cy.contains('button', 'Continuar').should('be.enabled').click();
    }

}
export default new Elementos();