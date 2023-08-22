const { SearchResult } = require('../components');
const MainPage = require('./main.page');

class SearchResultPage extends MainPage {
    constructor() {
        super();
        this.searchresult = new SearchResult;
    }
}
module.exports = SearchResultPage;