const MainPage = require("./main.page");
const SearchResultPage = require('./searchresult.page');
const CalculatorPage = require('./calculator.page');
const TemporaryEmailPage = require("./tempemail.page");
/**
 * @param name {'main'|'searchresult'| 'calculator'| 'temporary'}
 * @returns {MainPage|SearchResultPage|CalculatorPage|TemporaryEmailPage}
 */
function page(name) {
    const items = {
        main: new MainPage(),
        search: new SearchResultPage(),
        calculator: new CalculatorPage(),
        temporary: new TemporaryEmailPage(),
    };
    return items[name];    
}
module.exports = {    
    page
};