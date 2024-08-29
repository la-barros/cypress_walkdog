# AUTOMAÇÃO FRONT-END - WALKDOG

**PROJETO CYPRESS DE CADASTRO: PARA CUIDAR E ADESTRAR SEU CÃO**

## Instalando o Ambiente
* Instale a IDE de sua preferência, sendo o Visual Studio Code recomendado para a execução do projeto.

* Instale o Node.js na versão 18.16.0.

* Instale o Java na versão 19.0.2.

## Comando para instalar as depências e plugin do projeto:
```sh default
* yarn install
```
**ou**
```sh default
* npm install
```
## Comando para abrir o Cypress:
```sh default
* yarn cypress open
```
**ou**
```sh default
* npx cypress open
```
## Comando para rodar o projeto com as TAGs definidas nos scripts dentro do arquivo "package.json":   
**Substitua (tag) pela TAG desejada para executar testes específicos.**
```sh default
* yarn run (tag)
```
**ou**
```sh default
* npx cypress run (tag)
```



# Cypress Project Structure

| Directory                | Purpose                                                                         |
|--------------------------|-----------------------------------------------------------------------------------|
| `e2e/`  | Contém todos os testes implementados nas `pages` |
| `support/pages/`  | Objetos de página ou módulos, como `cadastroPage.js`, contendo métodos relacionados.|
| `support/elements/`      | Definições de elementos comuns usados nas páginas, como `homeElements.js`.|
| `cypress.json`           | Arquivo de configuração principal do Cypress, onde são definidas as configurações globais para os testes.|

**SCRIPTS:**
* **"run_allure" - TAG pra executar os testes em modo headless com o Yarn e gerar o relatório Allure.** 
* **"run_allure_npm" - TAG pra executar os testes em modo headless com o NPM e gera o relatório Allure** 
* **"yallure_serve" - Abre o servidor do relatório Allure com o Yarn**
* **"nallure_serve" - Abre o servidor do relatório Allure com o NPM.**
* **"test" - Executa os testes em modo headless e abre o relatório Allure em HTML** 
