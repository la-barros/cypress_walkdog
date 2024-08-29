///<reference types ='cypress' />

export const CADASTRO = {

    urlCadastro: 'https://walkdog.vercel.app/signup',
    validaPage: 'a[href="/"]',
    campoNome: 'input[placeholder="Nome completo"]',
    campoEmail: 'input[placeholder="E-mail"]',
    campoCpf: 'input[placeholder="CPF somente números"]',
    campoCep: 'input[placeholder="CEP"]',
    campoNumero: 'input[placeholder="Número"]',
    campoComp: 'input[placeholder="Complemento"]',
    btnBuscarCep: 'input[type="button"]',
    btnCadastrar: '.button-register',
    clickCuidar: 'img[alt="Cuidar"]',
    clickAdestrar: 'img[alt="Adestrar"]',
    clickUpload: '.dropzone',
    messageSucesso: "div[id=swal2-html-container]",
    alertErro: ".alert-error"
}
