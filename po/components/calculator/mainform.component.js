const BaseComponent=require('../common/base.component');

class CalcMainformComponent extends BaseComponent {
    constructor() {
        super('article#cloud-site'); 
    }    
    get parentFrameForm() {
        return this.rootEl.$('devsite-iframe iframe');
    }
    get parentFrame() {
        return 'devsite-iframe iframe';
    }
    get childFrame() {
        return '#myFrame';
    }
    get productTypeComputerEngine() {       
        return $('#tab-item-1');
    }    
    get instances() {
        return $('#input_98');
    }
    get softwareForm() {
        return $('#select_value_label_90'); 
    }
    get software() {
        return $('#select_option_100');s
    }
    get virtualmachineForm() {
        return $('#select_value_label_91');
    }
    get virtualmachine() {
        return $('#select_option_113');
    }
    get seriesForm() {
        return $('#select_value_label_93');
    }
    get series() {
        return $('#select_option_214');
    }
    get machineTypeForm() {
        return $('#select_value_label_94');
    }
    get machineType() {
        return $('md-content > md-optgroup:nth-child(3)');
    }
    get addGPUsChkBoxFirst() {
        return $('//div[@class="compute-engine-block"]/div[1]/form/div[13]/div[1]/md-input-container/md-checkbox')
    }    
    get typeGPUForm() {
        return $('#select_490');
    }
    get typeGPU() {
        return $('#select_option_497');
    }
    get numberGPUsForm() {
        return $('#select_492');
    }
    get numberGPUs() {
        return $('#select_option_500');
    }
    get localSSDForm() {
        return $('#select_value_label_448');
    }
    get localSSD() {
        return $('#select_option_475');
    }
    get locationForm() {
        return $('#select_value_label_96');
    }
    get location() {
        return $('#select_option_256');
    }
    get committedUsageForm() {
        return $('#select_value_label_97');
    }
    get committedUsage() {
        return $('#select_option_136');
    }
    get addToEstimateBtn() {
        return $('//div[@class="compute-engine-block"]/div[1]/form/div[20]/button')
    }    
}
module.exports=CalcMainformComponent;