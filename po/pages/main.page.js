const { Header } = require('../components');

class MainPage {
    constructor(url) {
        this.url = url;
        this.header = new Header;
    }
    open(url) {
        browser.url(url);
        browser.maximizeWindow();
    }
    async searchProduct(name) {
        await this.header.searchBox.waitForDisplayed({ timeout: 10000 });
        await this.header.searchBox.click();
        await this.header.searchBoxInput.setValue(name);
        await browser.keys('Enter');
    }       
}
module.exports = MainPage;