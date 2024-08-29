///<reference types ='cypress' />

var ele = require('../elements/homeElements').HOME
const {
    set, click, get_text
} = require('../actions')

class Home {

    acessarHome() {
        cy.visit(ele.url_home)
    }

    validaHome() {
        return get_text(ele.validaHome)
    }

    clicarCadastro() {
        click(ele.btn_home)
    }

    valida() {
        return get_text(ele.validaCadastro)
    }

}
export default new Home();