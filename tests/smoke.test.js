const { page } = require('../po');
const emailresult = require('../testdata/emailresult.data');
const calculatorUrl = require('../testdata/calculator.data');

describe ('Testsuit: "Hardcore"', () => {
    before(() => {
        page('main').open('https://cloud.google.com/');        
    })
    it('Test1:Check correct search result', async () => {
        await page('main').searchProduct('Google Cloud Platform Pricing Calculator');        
        await page('search').clickSearchResult();
        expect(await page('search').searchResultUrl()).toEqual(calculatorUrl);
    })
    it('Test2:Check calculating result received by email', async () => {
        await page('calculator').switchIntoFrames();        
        await page('calculator').enterEstimationParameters();        
        await page('temporary').getTemporaryEmailAddress('https://dropmail.me');        
        await page('calculator').switchIntoFrames();        
        await page('calculator').sendEstimationResultToEmail();       
        await page('temporary').receiveEstimationResult();        
        expect(await page('temporary').checkRecievedEstimate()).toEqual(emailresult);
    })
})