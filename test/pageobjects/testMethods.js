class methodsPabis {
    get inputClientLogin () { return $('input.Select-input')}
    get optionsClientLogin () { return $('.Select-placeholder') }
    get divOptionsClientLogin ()  { return $('#react-select-2--list')}
    get btnClientLogin () { return $('div.modal-footer > button')}

    async clientSelect(client){
        await(await this.inputClientLogin).waitForDisplayed();
        await(await this.inputClientLogin).setValue(client);
        await(await this.inputClientLogin).keys("e\uE007");
        await(await this.btnClientLogin).click();
    }

    async countClient() {
        this.inputClientLogin.waitForDisplayed();
        this.optionsClientLogin.click();
        Page.wait(1000);
        let listClient = this.divOptionsClientLogin.$$('div').length;
        assert(listClient > 0, "Error en la comprobacion de clientes en Pabis " + listClient + " > 0")
    }
}

module.exports = new methodsPabis();