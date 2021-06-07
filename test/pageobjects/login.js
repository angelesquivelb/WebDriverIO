//const Page = require('./page');
//class LoginPage extends Page {
class LoginPage {
    //Definir los selectores usando la obtención por métodos
    get inputUserName () { return $('#login-campo-username')}
    get inputPassword () { return $('#login-campo-password')}
    get btnSubmit () { return $('button[type="submit"]')}

    //Método para encapsular el código de automatización e interacción con la página 

    async login(username, password) {
        await (await this.inputUserName).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();

    }
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();