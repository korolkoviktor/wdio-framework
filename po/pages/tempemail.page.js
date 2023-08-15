const { TemporaryEmail } = require('../components');

class TemporaryEmailPage {
    constructor() {        
        this.email=new TemporaryEmail;
    }    
}
module.exports=TemporaryEmailPage;