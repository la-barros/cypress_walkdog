//<reference types ='cypress' />

// import { el } from '@faker-js/faker';

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
    clickOpcoes(atividadesExtras) {
        if (atividadesExtras !== null) {
            switch (atividadesExtras) {
                case "Cuidar":
                    click(ele.clickCuidar)
                    break;
                case "Adestrar":
                click(ele.clickAdestrar)
                    break;
                default:
                    "Campo obrigatorio"
            }
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