const BaseComponent=require('../common/base.component');

class TemporaryEmailComponent extends BaseComponent {
    constructor() {
        super()
    }    
    get copyToClipboard() {
        return $('span.addr-toolbar span.bi-clipboard');
    }
    get inboxMessage() {
        return $('//div[@class="container"]/div[9]/div[2]/ul/li/div[3]/div[1]/pre');
    }
    
}
module.exports=TemporaryEmailComponent;