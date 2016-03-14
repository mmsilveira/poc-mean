exports.config = {
    specs: ['../test/e2e/**/*.js'],
    onPrepare: function() {
        browser.driver.get('http://localhost:3000');
        browser.driver.findElement(by.id('email')).sendKeys('teste@teste.com');
        browser.driver.findElement(by.id('password')).sendKeys('123456');
        browser.driver.findElement(by.id('entrar')).click();
    }
};
