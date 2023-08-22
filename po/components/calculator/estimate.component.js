const BaseComponent = require('../common/base.component');

class CalcEstimateComponent extends BaseComponent {
    constructor() {
        super()
    }
    get cartItem() {
        return $$('.cartitem');
    }
    get emailButton() {
        return $("button[title='Email Estimate']");
    }
    get resultForm() {
        return $('form.ng-valid-email');
    }
    get emailInputRow() {
        // return $("form.ng-valid-email md-content._md div.layout-row:nth-child(3)"); input_511
        return $("form.ng-valid-email ._md .layout-row:nth-child(3)"); 
    }
    get sendEmailButton() {
        return $('button.md-raised:nth-child(2)');
    }
}
module.exports = CalcEstimateComponent;