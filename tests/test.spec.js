const {page}=require('../po');
const expectedresult=require('../testdata/estimate.data');

describe('Testsuit: "Hurt me plenty"', ()=> {
    // before(()=> {
    //     browser.url('https://cloud.google.com/');
    //     page('main').open();
    //     browser.maximizeWindow(); 
    // })
    it('Test1:Check correct search result google clouds', async ()=>{               
        await page('main').header.searchBox.click();          
        await page('main').header.searchBox.setValue('Google Cloud Platform Pricing Calculator');        
        await page('main').header.popupSearchMenu.waitForDisplayed();        
        await page('main').header.popupSearchMenu.click();        
        await page('search').searchresult.firstSearchresultLink.waitForDisplayed();       
        await page('search').searchresult.firstSearchresultLink.click();               
        expect(await browser.getUrl()).toEqual("https://cloud.google.com/products/calculator");        
    })
    it.only('Test2:Check calculator', async ()=>{       
        await browser.url('https://cloud.google.com/products/calculator');
        await browser.maximizeWindow();         
        await page('calculator').switchtoParentFrame();
        await page('calculator').switchtoChildFrame();        
        await page('calculator').mainform.productTypeComputerEngine.click(); //chose Computer Engine form
        await page('calculator').mainform.instances.click(); // Number of instances: 4
        await page('calculator').mainform.instances.setValue('4');
        await page('calculator').mainform.softwareForm.click(); //Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS
        await page('calculator').mainform.software.waitForDisplayed();
        await page('calculator').mainform.software.click();
        await page('calculator').mainform.virtualmachineForm.click();//VM Class: Regular
        await page('calculator').mainform.virtualmachine.waitForDisplayed();
        await page('calculator').mainform.virtualmachine.click();
        await page('calculator').mainform.seriesForm.click();//Series N1
        await page('calculator').mainform.series.waitForDisplayed();
        await page('calculator').mainform.series.click();
        await page('calculator').mainform.machineTypeForm.click();// Instance type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
        await page('calculator').mainform.machineType.waitForDisplayed();
        await page('calculator').mainform.machineType.click();
        await page('calculator').mainform.addGPUsChkBoxFirst.click();//Select Add GPUs
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
        await page('calculator').mainform.addToEstimateBtn.click();        
        expect(await page('calculator').checkEstimate()).toEqual(true);       
    })    
})