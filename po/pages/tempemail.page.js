const { TemporaryEmail } = require('../components');
// const MainPage=require('./main.page');

// class TemporaryEmailPage extends MainPage {
//     constructor() {
//         super();
//         this.email=new TemporaryEmail;
//     }    
// }
class TemporaryEmailPage {
    constructor() {        
        this.email=new TemporaryEmail;
    }    
}
module.exports=TemporaryEmailPage;