const methodsPabis = require ('../pageobjects/testMethods');
const LoginPage = require ('../pageobjects/login');
describe('Pabis Connect', () =>{
    it('Logueo en pabis connect', async () => {
        await browser.url('http://35.170.20.172/desktop/login');
        await expect(browser).toHaveTitle(
            'Pabis Connect'
        );
        await LoginPage.login('pabis7', '$P4bis7*2021_');
    });
    /*it('Contar los clientes en el combo', () => {
        methodsPabis.countClients()
      });*/
      /*it ('Seleccionar cliente ppor valor San Jacinto', async () =>{
          const client = $('.Select-placeholder');
          const valueClient = client.getValue();
          console.log(valueClient);
          client.selectByAttribute('valueClient', 'San Jacinto');
          console.log(client.getValue());
      });*/
    it('Escoger cliente San Jacinto', () => {
        methodsPabis.clientSelect('San Jacinto')
      });
});