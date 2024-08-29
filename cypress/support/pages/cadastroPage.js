//<reference types ='cypress' />

var ele = require('../elements/cadastroElements').CADASTRO
const { set, click, get_text } = require('../actions')

class Cadastro {

    acessarCadastro() {

        cy.visit(ele.urlCadastro)
    }
    preencherDados(nome, email, cpf) {
        if (nome !== null) {
            set(ele.campoNome, nome);
        }

        if (email !== null) {
            set(ele.campoEmail, email);
        }

        if (cpf !== null) {
            set(ele.campoCpf, cpf);
        }
    }

    preencherEndereco(cep, numero, complemento) {
        if (cep !== null) {
            set(ele.campoCep, cep);
        }

        if (numero !== null) {
            set(ele.campoNumero, numero);
        }

        if (complemento !== null) {
            set(ele.campoComp, complemento);
        }
    }
    clickOpcoes(opcoes) {
        if (opcoes == "cuidar") {
            click(ele.clickCuidar);
        } else if (opcoes == "adestrar") {
            click(ele.clickAdestrar);
        }
    }


    clickCep() {
        click(ele.btnBuscarCep)
    }

    clickUpload() {
        click(ele.clickUpload)
    }

    clickCadastrar() {
        click(ele.btnCadastrar)
    }

    validaCadastroPage() {
        return get_text(ele.validaPage)
    }
    validaCadastro() {
        return get_text(ele.messageSucesso)
    }
    validaMessagemErro() {
        return get_text(ele.alertErro)
    }
}

export default new Cadastro();