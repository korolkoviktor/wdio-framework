const BaseComponent=require('../common/base.component');

class CalcEstimateComponent extends BaseComponent {
    constructor() {
        super()
    }    
    get cartItem() {
        return $$('.cartitem');
    }
}
module.exports=CalcEstimateComponent;