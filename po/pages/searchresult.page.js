const {Searchresult} = require('../components');
const MainPage=require('./main.page');

class SearchresultPage extends MainPage {
    constructor() {
        super();
        this.searchresult=new Searchresult;
    }   
}
module.exports=SearchresultPage;