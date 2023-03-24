import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'


describe ('My Login Application Tester', () => {
describe('My Login application', () => {
    it('It better login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    });
    it('It should fail to login with invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'wrong')
        await expect(LoginPage.flashAlert).toBeExisting()
        await expect(LoginPage.flashAlert).toHaveTextContaining(
            'Your password is invalid!')
    });
    it('It will logout', async () => {
        //Open a browser
        await LoginPage.open();
        //Enter the username and password
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
       //Check to see if the browser goes to the expected page 
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure');
        //While on the secure page run the logout function
        await SecurePage.logout();
        //Check to see if the browser goes to the expected page
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login');
    });

});
})
