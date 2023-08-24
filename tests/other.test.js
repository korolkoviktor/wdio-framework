const { page } = require('../po');
const expectedresult = require('../testdata/estimate.data');
const calculatorUrl = require('../testdata/calculator.data');

describe ('Testsuit: "Hurt me plenty"', () => {
    before(() => {
        page('main').open('https://cloud.google.com/');
        
    })
    it('Test1:Check correct search result google clouds', async () => {        
        await page('main').searchProduct('Google Cloud Platform Pricing Calculator');        
        await page('search').clickSearchResult();                    
        expect(await page('search').searchResultUrl()).toEqual(calculatorUrl);
    })
    it('Test2:Check calculator', async () => {
        await page('calculator').switchIntoFrames();        
        await page('calculator').enterEstimationParameters();                
        expect(await page('calculator').checkEstimate()).toEqual(true);
    })
})