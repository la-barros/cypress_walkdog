///<reference types ='cypress' />

import homePAge from "../support/pages/homePAge";

describe('Acessar a página do Walkdog e clicar no botão Quero ser Dog Walker', () => {

    beforeEach(() => {
        homePAge.acessarHome()
    });

    it('Validar pagina Home', () => {
        homePAge.validaHome().then((mensagem) => {
            expect(mensagem.text()).eq('Cuidado e diversão em cada passo')
        })
    });
    it('Clicar no botão Quero ser Dog Walker', () => {
        homePAge.clicarCadastro()
        homePAge.valida().then((mensagem) => {
            expect(mensagem.text()).eq('Faça seu cadastro')
        });
    });
})
