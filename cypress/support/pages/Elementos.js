class Elementos{

    clickCookies(){
        cy.get("#onetrust-accept-btn-handler").click()
    }
    clickBtnAbrasuaConta(){
        cy.contains('button', 'Abra sua conta').click();
    }
    campoNome(){
        cy.get("#name").type("Kennedy Oliveira")
    }
    campoCelular(){
        cy.get("#phone").type("61982148152")
    }
    campoEmail(){
        cy.get("#email").type("kennedy.oliver@live.com")
    }
    campoCpf(){
        cy.get("#socialId").type("07189278508")
    }
    campoDataNasc(){
        cy.get("#dateOfBirth").type("23041996")
    }
    checkBox(){
        cy.xpath("//label[@aria-label='Campo de aceite']").click()
    }
    btnContinuar(){
        cy.contains('button', 'Continuar').click();
    }

}
export default new Elementos();