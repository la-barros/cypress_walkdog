///<reference types ='cypress' />

import cadastroPage from "../support/pages/cadastroPage";
import homePage from "../support/pages/homePAge";
const { randomName, randomEmail, randomNumeric, upload } = require('../support/utils')

describe('Realizar cadastro e validações de mensagens de erro', () => {
    beforeEach(() => {
        homePage.acessarHome();
        homePage.validaHome();
        homePage.clicarCadastro();
        cadastroPage.validaCadastroPage().then((mensagem) => {
            expect(mensagem.text()).to.eq('Voltar para home');
        });
    });

    context('Cadastro', () => {
        beforeEach(() => {
            cadastroPage.preencherDados(randomName(), randomEmail(), randomNumeric(11));
            cadastroPage.preencherEndereco(54759265, randomNumeric(2), "APT 01");
            cadastroPage.clickCep();
        });

        afterEach(() => {
            cadastroPage.clickUpload();
            upload();
            cadastroPage.clickCadastrar();
            cadastroPage.validaCadastro().then((mensagem) => {
                expect(mensagem.text()).to.eq('Recebemos o seu cadastro e em breve retornaremos o contato.');
            });
        });
        it.only('Cadastro com sucesso para cuidar dos cães', () => {
            cadastroPage.clickOpcoes("cuidar");
        });
        it('Cadastro com sucesso para adestrar os cães', () => {
            cadastroPage.clickOpcoes("adestrar");
        });
    });
    context('Validando mensagens de erro', () => {
        it('Campo nome completo em branco', () => {
            cadastroPage.preencherDados(null, randomEmail(), randomNumeric(11));
            cadastroPage.preencherEndereco(54230555, randomNumeric(2), "APT 01");
            cadastroPage.clickCep();
            cadastroPage.clickOpcoes("adestrar");
            cadastroPage.clickUpload();
            upload();
            cadastroPage.clickCadastrar();
            cadastroPage.validaMessagemErro().then((mensagem) => {
                expect(mensagem.text()).to.eq('Informe o seu nome completo');
            });
        });
        it('Campo email em branco', () => {
            cadastroPage.preencherDados(randomName(), null, randomNumeric(11));
            cadastroPage.preencherEndereco(54230555, randomNumeric(2), "APT 01");
            cadastroPage.clickCep();
            cadastroPage.clickOpcoes("cuidar");
            cadastroPage.clickUpload();
            upload();
            cadastroPage.clickCadastrar();
            cadastroPage.validaMessagemErro().then((mensagem) => {
                expect(mensagem.text()).to.eq('Informe o seu melhor email');
            });
        });
        it('Campo CPF em branco', () => {
            cadastroPage.preencherDados(randomName(), randomEmail(), null);
            cadastroPage.preencherEndereco(54230555, randomNumeric(2), "APT 01");
            cadastroPage.clickCep();
            cadastroPage.clickOpcoes("adesrar");
            cadastroPage.clickUpload();
            upload();
            cadastroPage.clickCadastrar();
            cadastroPage.validaMessagemErro().then((mensagem) => {
                expect(mensagem.text()).to.eq('Informe o seu CPF');
            });
        });
        it('Campo CPF inválido', () => {
            cadastroPage.preencherDados(randomName(), randomEmail(), "077.285.958.89");
            cadastroPage.preencherEndereco(54230555, randomNumeric(2), "APT 01");
            cadastroPage.clickCep();
            cadastroPage.clickOpcoes("cuidar");
            cadastroPage.clickUpload();
            upload();
            cadastroPage.clickCadastrar();
            cadastroPage.validaMessagemErro().then((mensagem) => {
                expect(mensagem.text()).to.eq('CPF inválido');
            });
        });
        it('Campo CEP em branco', () => {
            cadastroPage.preencherDados(randomName(), randomEmail(), randomNumeric(11));
            cadastroPage.preencherEndereco(null, randomNumeric(2), "APT 01");
            cadastroPage.clickCep();
            cadastroPage.clickOpcoes("adestrar");
            cadastroPage.clickUpload();
            upload();
            cadastroPage.clickCadastrar();
            cadastroPage.validaMessagemErro().then((mensagem) => {
                expect(mensagem.text()).to.eq('Informe o seu CEP');
            });
        });
        it('Campo número em branco', () => {
            cadastroPage.preencherDados(randomName(), randomEmail(), randomNumeric(11));
            cadastroPage.preencherEndereco(54230555, null, "APT 01");
            cadastroPage.clickCep();
            cadastroPage.clickOpcoes("cuidar");
            cadastroPage.clickUpload();
            upload();
            cadastroPage.clickCadastrar();
            cadastroPage.validaMessagemErro().then((mensagem) => {
                expect(mensagem.text()).to.eq('Informe um número maior que zero');
            });
        });
        it('Campo upload do documento em branco', () => {
            cadastroPage.preencherDados(randomName(), randomEmail(), randomNumeric(11));
            cadastroPage.preencherEndereco(54230555, randomNumeric(2), "APT 01");
            cadastroPage.clickCep();
            cadastroPage.clickOpcoes("adestrar");
            cadastroPage.clickUpload();
            cadastroPage.clickCadastrar();
            cadastroPage.validaMessagemErro().then((mensagem) => {
                expect(mensagem.text()).to.eq('Adcione um documento com foto (RG ou CHN)');
            });
        });
    });
});
