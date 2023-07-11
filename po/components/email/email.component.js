const BaseComponent=require('../common/base.component');

class TemporaryEmailComponent extends BaseComponent {
    constructor() {
        super()
    }    
    get copyToClipboard() {
        return $('span.addr-toolbar span.bi-clipboard');
    }
    get inboxMessage() {
        return $('div.col-12 div:nth-child(1) pre');
    }
    
}
module.exports=TemporaryEmailComponent;