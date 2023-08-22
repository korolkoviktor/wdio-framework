const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent {
    constructor() {
        super('body header');  
    }
    get searchBox() {
        return this.rootEl.$('form');        
    }
    get searchBoxInput() {
        return this.rootEl.$('input');        
    }    
}
module.exports = HeaderComponent;
