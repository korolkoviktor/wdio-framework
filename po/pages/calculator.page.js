// const { page } = require('.');
const { CalcMainform, CalcEstimate } = require('../components');
const MainPage=require('./main.page');
const expectedresult=require('../../testdata/estimate.data')

class CalculatorPage extends MainPage {
    constructor() {
        super();
        this.mainform=new CalcMainform;
        this.estimate=new CalcEstimate;
    }
    async switchtoParentFrame() {
        await this.mainform.parentFrameForm.waitForDisplayed();
        const parentframe=await browser.findElement('css selector', this.mainform.parentFrame);
        return browser.switchToFrame(parentframe);
    }    
    async switchtoChildFrame() { 
        const childframe=await browser.findElement('css selector', this.mainform.childFrame);
        return browser.switchToFrame(childframe);
            
        // browser.switchToFrame($('devsite-iframe iframe'));
    }
    async checkEstimate() {
        // const arr = await (page('calculator').estimate.cartItem.map(text => text.getText()));
        const arr = await (this.estimate.cartItem.map(text => text.getText()));
        const actualresult=await (arr[0].split('\n')).slice();
        let counter=0;
        for (let x of actualresult) {
            for (let y of expectedresult) {
                if (x==y) {counter++}
            }        
        }                
        return (counter==5)?true:false;
    }
}
module.exports=CalculatorPage;