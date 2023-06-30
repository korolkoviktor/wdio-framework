const BaseComponent=require('../common/base.component');

class SearchResultComponent extends BaseComponent {
    constructor() {
        super('.gsc-expansionArea'); 
    }
    get firstSearchresultLink() {
        return this.rootEl.$('div:nth-child(1) div.gs-webResult div.gsc-thumbnail-inside div a');
    }    
}
module.exports=SearchResultComponent;

