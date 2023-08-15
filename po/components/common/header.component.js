const BaseComponent=require("./base.component");

class HeaderComponent extends BaseComponent {
    constructor() {
        super('.devsite-search-form'); 
    }
    get searchBox() {
        return this.rootEl.$('.devsite-searchbox');
    }
    get searchBoxInput() {
        return this.rootEl.$('.devsite-searchbox input');
    }
    get popupSearchMenu() {
        return this.rootEl.$('.devsite-popout');
    }
}
module.exports=HeaderComponent;
