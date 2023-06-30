const MainPage=require("./main.page");
const SearchresultPage=require('./searchresult.page');
const CalculatorPage=require('./calculator.page')
/**
 * @param name {'main'|'searchresult'| 'calculator'}
 * @returns {MainPage|SearchresultPage|CalculatorPage}
 */
function page(name) {
    const items= {
        main: new MainPage(),
        search: new SearchresultPage(),
        calculator: new CalculatorPage(),
    };
    // return items[name];
    return items[name.toLowerCase()];
}
module.exports={
    MainPage,
    SearchresultPage,
    CalculatorPage,
    page,
};