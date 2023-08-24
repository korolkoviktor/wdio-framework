const BaseComponent = require('../common/base.component');

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
        return $('#input_99');
    }
    get softwareForm() {
        return $('#select_value_label_91');
    }
    get software() {
        return $('#select_option_101'); s
    }
    get virtualMachineForm() {
        return $('#select_value_label_92');
    }
    get virtualMachine() {
        return $('#select_option_114');
    }
    get seriesForm() {
        return $('#select_value_label_94');
    }
    get series() {
        return $('#select_option_215');
    }
    get machineTypeForm() {
        return $('#select_value_label_95');
    }
    get machineType() {
        return $('md-content > md-optgroup:nth-child(3)');
    }
    get addGPUsCheckBoxFirst() {        
        return $('md-checkbox[ng-model="listingCtrl.computeServer.addGPUs"]');    
    }
    get typeGPUForm() {
        return $('#select_494');
    }
    get typeGPU() {
        return $('#select_option_501');
    }
    get numberGPUsForm() {
        return $('#select_496');
    }
    get numberGPUs() {
        return $('#select_option_506');
    }
    get localSSDForm() {
        return $('#select_value_label_452');
    }
    get localSSD() {
        return $('#select_option_479');
    }
    get locationForm() {
        return $('#select_value_label_97');
    }
    get location() {
        return $('#select_option_257');
    }
    get committedUsageForm() {
        return $('#select_value_label_98');
    }
    get committedUsage() {
        return $('#select_option_137');
    }
    get addToEstimateButton() {
        return $('[ng-click*="(ComputeEngineForm);"]')
    }
}
module.exports = CalcMainformComponent;