const { SearchResult } = require('../components');
const MainPage = require('./main.page');

class SearchResultPage extends MainPage {
    constructor() {
        super();
        this.searchresult = new SearchResult;
    }
    async clickSearchResult() {
        await this.searchresult.firstSearchResultLink.waitForDisplayed({ timeout: 7000 });
        await this.searchresult.firstSearchResultLink.click();        
    }
    searchResultUrl() {        
        return browser.getUrl();
    } 
}
module.exports = SearchResultPage;