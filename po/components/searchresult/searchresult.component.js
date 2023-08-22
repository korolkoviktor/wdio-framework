const BaseComponent = require('../common/base.component');

class SearchResultComponent extends BaseComponent {
    constructor() {
        super('.gsc-expansionArea'); 
    }
    get firstSearchResultLink() {
        return this.rootEl.$(".gsc-thumbnail-inside [href*='calculator']");
    }    
}
module.exports = SearchResultComponent;

