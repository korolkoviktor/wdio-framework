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
        return $('#input_97');
    }
    get softwareForm() {
        return $('#select_110');
    }
    get software() {
        return $('#select_option_99');
    }
    get virtualmachineForm() {
        return $('#select_value_label_90');
    }
    get virtualmachine() {
        return $('#select_option_112');
    }
    get seriesForm() {
        return $('#select_value_label_92');
    }
    get series() {
        return $('#select_option_213');
    }
    get machineTypeForm() {
        return $('#select_value_label_93');
    }
    get machineType() {
        return $('md-content > md-optgroup:nth-child(3)');
    }
    get addGPUsChkBoxFirst() {
        return $('//div[@class="compute-engine-block"]/div[1]/form/div[13]/div[1]/md-input-container/md-checkbox')
    }
    get numberGPUsForm() {
        return $('#select_491');
    }
    get numberGPUs() {
        return $('#select_option_499');
    }
    get typeGPUForm() {
        return $('#select_489');
    }
    get typeGPU() {
        return $('#select_option_496');
    }
    get localSSDForm() {
        return $('#select_value_label_447');
    }
    get localSSD() {
        return $('#select_option_474');
    }
    get locationForm() {
        return $('#select_value_label_95');
    }
    get location() {
        return $('#select_option_255');
    }
    get committedUsageForm() {
        return $('#select_value_label_96');
    }
    get committedUsage() {
        return $('#select_option_135');
    }
    get addToEstimateBtn() {
        return $('//div[@class="compute-engine-block"]/div[1]/form/div[20]/button')
    }    
}
module.exports=CalcMainformComponent;