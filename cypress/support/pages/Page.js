import Elementos from './Elementos'
class Page{

    preencherFormulario(){
        Elementos.clickCookies()
        Elementos.clickBtnAbrasuaConta()
        Elementos.campoNome()
        Elementos.campoCelular()
        Elementos.campoEmail()
        Elementos.campoCpf()
        Elementos.campoDataNasc()
        Elementos.checkBox()
        Elementos.btnContinuar()
    }

}
export default new Page();

