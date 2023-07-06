const MainPage=require("./main.page");
const SearchresultPage=require('./searchresult.page');
const CalculatorPage=require('./calculator.page');
const TemporaryEmailPage = require("./tempemail.page");
/**
 * @param name {'main'|'searchresult'| 'calculator'| 'temporary'}
 * @returns {MainPage|SearchresultPage|CalculatorPage|TemporaryEmailPage}
 */
function page(name) {
    const items= {
        main: new MainPage(),
        search: new SearchresultPage(),
        calculator: new CalculatorPage(),
        temporary: new TemporaryEmailPage(),
    };
    return items[name];
    // return items[name.toLowerCase()];
}
module.exports={
    MainPage,
    SearchresultPage,
    CalculatorPage,
    TemporaryEmailPage,
    page,
};