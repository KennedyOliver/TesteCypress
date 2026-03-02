import Page from '../../support/pages/Page'

describe('Abertura de Conta',()=>{
    it('Preencher formulario de Abertura de Conta PF', () => {
        cy.visit('https://inter.co/')
        Page.preencherFormulario()
    });

})