
const LoginPage = require ('../pageobjects/login');
describe('Pabis Connect', () =>{
    it('Logueo en pabis connect', async () => {
        await browser.url('http://35.170.20.172/desktop/login');
        await expect(browser).toHaveTitle(
            'Pabis Connect'
        );
        //await LoginPage.open();
        await LoginPage.login('pabis7', '$P4bis7*2021_');
    });
});