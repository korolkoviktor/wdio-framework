const BaseComponent=require("./base.component");

class HeaderComponent extends BaseComponent {
    constructor() {
        super('.devsite-top-logo-row-middle');
    }
    get searchBox() {
        return this.rootEl.$('input');
    }
    get popupSearchMenu() {
        return this.rootEl.$('.devsite-popout');
    }
}
module.exports=HeaderComponent;
