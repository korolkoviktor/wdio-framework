const { page } = require('../po');
const emailresult = require('../testdata/emailresult.data');
const calculatorUrl = require('../testdata/calculator.data');

describe('Testsuit: "Hardcore"', () => {
    before(() => {
        page('main').open('https://cloud.google.com/');
        browser.maximizeWindow();
    })
    it('Test1:Check correct search result', async () => {
        await page('main').header.searchBox.waitForDisplayed({ timeout: 5000 });
        await page('main').header.searchBox.click();
        await page('main').header.searchBoxInput.setValue('Google Cloud Platform Pricing Calculator');
        await browser.keys('Enter');
        await page('search').searchresult.firstSearchResultLink.waitForDisplayed({ timeout: 5000 });
        await page('search').searchresult.firstSearchResultLink.click();
        expect(await browser.getUrl()).toEqual(calculatorUrl);
    })
    it('Test2:Check calculating result received by email', async () => {
        await page('calculator').switchToParentFrame();
        await page('calculator').switchToChildFrame();
        await page('calculator').mainform.productTypeComputerEngine.waitForDisplayed();
        await page('calculator').mainform.productTypeComputerEngine.click(); //chose Computer Engine form
        await page('calculator').mainform.instances.click(); // Number of instances: 4
        await page('calculator').mainform.instances.setValue('4');
        await page('calculator').mainform.softwareForm.click(); //Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS
        await page('calculator').mainform.software.waitForDisplayed();
        await page('calculator').mainform.software.click();
        await page('calculator').mainform.virtualMachineForm.click();//VM Class: Regular
        await page('calculator').mainform.virtualMachine.waitForDisplayed();
        await page('calculator').mainform.virtualMachine.click();
        await page('calculator').mainform.seriesForm.click();//Series N1
        await page('calculator').mainform.series.waitForDisplayed();
        await page('calculator').mainform.series.click();
        await page('calculator').mainform.machineTypeForm.click();// Instance type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
        await page('calculator').mainform.machineType.waitForDisplayed();
        await page('calculator').mainform.machineType.click();
        await page('calculator').mainform.addGPUsCheckBoxFirst.click();//Select Add GPUs        
        await page('calculator').mainform.typeGPUForm.click();//GPU type: NVIDIA Tesla V100
        await page('calculator').mainform.typeGPU.waitForDisplayed();
        await page('calculator').mainform.typeGPU.click();
        await page('calculator').mainform.numberGPUsForm.click();//Number of GPUs: 1
        await page('calculator').mainform.numberGPUs.waitForDisplayed();
        await page('calculator').mainform.numberGPUs.click();
        await page('calculator').mainform.localSSDForm.click();//Local SSD: 2x375 Gb
        await page('calculator').mainform.localSSD.waitForDisplayed();
        await page('calculator').mainform.localSSD.click();
        await page('calculator').mainform.locationForm.click();//Datacenter location: Frankfurt (europe-west3)
        await page('calculator').mainform.location.waitForDisplayed();
        await page('calculator').mainform.location.click();
        await page('calculator').mainform.committedUsageForm.click();// Commited usage: 1 Year
        await page('calculator').mainform.committedUsage.waitForDisplayed();
        await page('calculator').mainform.committedUsage.click();
        await page('calculator').mainform.addToEstimateButton.click();
        await browser.newWindow('https://dropmail.me');
        await page('temporary').email.copyToClipboard.waitForDisplayed({ timeout: 5000 });
        await page('temporary').email.copyToClipboard.click()
        await browser.switchWindow('google.com');
        await page('calculator').switchToParentFrame();
        await page('calculator').switchToChildFrame();
        await page('calculator').estimate.emailButton.click();
        await page('calculator').estimate.resultForm.waitForDisplayed({ timeout: 5000 });
        await page('calculator').estimate.resultForm.click();
        await page('calculator').estimate.emailInputRow.click();
        await browser.keys(['Control', 'v']);
        await page('calculator').estimate.sendEmailButton.isClickable();
        await page('calculator').estimate.sendEmailButton.click();
        await browser.switchWindow('dropmail.me');
        await page('temporary').email.inboxMessage.waitForDisplayed({ timeout: 10000 });
        expect(await page('temporary').email.inboxMessage.getText()).toContain(emailresult);
    })
})