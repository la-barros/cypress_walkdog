import { faker } from '@faker-js/faker';

const randomName = () => {
    return faker.person.fullName();
}

function randomEmail() {
    return faker.internet.email();
}

function upload() {
    cy.get('input[accept="image/*"]').selectFile("Images/cnh.png", { force: true })
}

const randomFirstname = () => {
    return faker.person.firstName();
}

const randomLastname = () => {
    return faker.person.lastName();
}

const randomNumeric = (numero) => {
    return faker.random.numeric(numero)
}


const randomPhone = () => {
    return faker.phone.number();
}
const randomPassword = () => {
    return faker.number.int({ min: 10000000, max: 99999999 });
}

const randomPassword2 = () => {
    return faker.number.int({ min: 1, max: 999 });
}

module.exports = {
    randomName, randomEmail, randomPassword, randomLastname, randomFirstname, randomPhone, randomPassword2, upload, randomNumeric
};