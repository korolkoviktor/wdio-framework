const { Header } = require('../components');

class MainPage {
    constructor(url) {
        this.url = url;
        this.header = new Header;
    }
    open(url) {
        return browser.url(url);
    }
}
module.exports = MainPage;