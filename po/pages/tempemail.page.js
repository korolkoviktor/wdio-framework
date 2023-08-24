const { TemporaryEmail } = require('../components');

class TemporaryEmailPage {
    constructor() {
        this.email = new TemporaryEmail;
    }
    async getTemporaryEmailAddress(url) {
        await browser.newWindow(url);
        await this.email.copyToClipboard.waitForDisplayed({ timeout: 5000 });
        await this.email.copyToClipboard.click();
        await browser.switchWindow('google.com');
    }
    async receiveEstimationResult() {
        await browser.switchWindow('dropmail.me');
        await this.email.inboxMessage.waitForDisplayed({ timeout: 10000 });
    }
    async checkRecievedEstimate() {
        let data = await this.email.inboxMessage.getText();
        let dataset = await data.split('\n').reverse().join();
        let re = /\d{1,}[,]\d{3}[.]\d{2}/;
        return re.exec(dataset).toString();

    }
}
module.exports = TemporaryEmailPage;