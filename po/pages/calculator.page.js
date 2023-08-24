const { CalcMainform, CalcEstimate } = require('../components');
const MainPage = require('./main.page');
const expectedresult = require('../../testdata/estimate.data')

class CalculatorPage extends MainPage {
    constructor() {
        super();
        this.mainform = new CalcMainform;
        this.estimate = new CalcEstimate;
    }
    async switchIntoFrames() {
        await this.mainform.parentFrameForm.waitForDisplayed({ timeout: 5000 });
        const parentframe = await browser.findElement('css selector', this.mainform.parentFrame);
        await browser.switchToFrame(parentframe);
        const childframe = await browser.findElement('css selector', this.mainform.childFrame);
        await browser.switchToFrame(childframe);       
    }    
    async enterEstimationParameters() {
        await this.mainform.productTypeComputerEngine.click(); //chose Computer Engine form
        await this.mainform.instances.click(); // Number of instances: 4
        await this.mainform.instances.setValue('4');
        await this.mainform.softwareForm.click(); //Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS
        await this.mainform.software.waitForDisplayed();
        await this.mainform.software.click();
        await this.mainform.virtualMachineForm.click();//VM Class: Regular
        await this.mainform.virtualMachine.waitForDisplayed();
        await this.mainform.virtualMachine.click();
        await this.mainform.seriesForm.click();//Series N1
        await this.mainform.series.waitForDisplayed();
        await this.mainform.series.click();
        await this.mainform.machineTypeForm.click();// Instance type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
        await this.mainform.machineType.waitForDisplayed();
        await this.mainform.machineType.click();
        await this.mainform.addGPUsCheckBoxFirst.click();//Select Add GPUs        
        await this.mainform.typeGPUForm.click();//GPU type: NVIDIA Tesla V100
        await this.mainform.typeGPU.waitForDisplayed();
        await this.mainform.typeGPU.click();
        await this.mainform.numberGPUsForm.click();//Number of GPUs: 1
        await this.mainform.numberGPUs.waitForDisplayed();
        await this.mainform.numberGPUs.click();
        await this.mainform.localSSDForm.click();//Local SSD: 2x375 Gb
        await this.mainform.localSSD.waitForDisplayed();
        await this.mainform.localSSD.click();
        await this.mainform.locationForm.click();//Datacenter location: Frankfurt (europe-west3)
        await this.mainform.location.waitForDisplayed();
        await this.mainform.location.click();
        await this.mainform.committedUsageForm.click();// Commited usage: 1 Year
        await this.mainform.committedUsage.waitForDisplayed();
        await this.mainform.committedUsage.click();
        await this.mainform.addToEstimateButton.click();
    }
    async sendEstimationResultToEmail() {
        await this.estimate.emailButton.click();
        await this.estimate.resultForm.waitForDisplayed({ timeout: 5000 });
        await this.estimate.resultForm.click();
        await this.estimate.emailInputRow.click();
        await browser.keys(['Control', 'v']);
        await this.estimate.sendEmailButton.isClickable();
        await this.estimate.sendEmailButton.click();
    }
    async checkEstimate() {
        const arr = await (this.estimate.cartItem.map(text => text.getText()));
        const actualresult = await (arr[0].split('\n')).slice();
        let counter = 0;
        for (let x of actualresult) {
            for (let y of expectedresult) {
                if (x == y) { counter++ }
            }
        }
        return counter === 5;
    }
}
module.exports = CalculatorPage;