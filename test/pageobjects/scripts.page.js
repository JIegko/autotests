const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RandomsPage extends Page {
    
    async makeNickName() {
            let text = '';
            let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        
            for (let i = 0; i < 7; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        
            return text;
    };

    async makeEmail() {
            let chars = 'abcdefghijklmnopqrstuvwxyz1234567890_-';
            let string = '';
            for(let i=0; i<15; i++){
                string += chars[Math.floor(Math.random() * chars.length)];
            }
            return (string + '@domain.com');
    };

    async makePassword() {
            let length = 15,
                charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                retVal = "";
            for (let i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
    };

    async findString(re, str) {
        let midstring;
        (str.search(re) != -1) ? midstring = " contains ": midstring = " does't contain ";
        return console.log('Search results: ' + str + midstring + re);
    }; 

    async toLog (list) {
        for (let i = 0; i < 12; i++) {
            console.log("Open positions: " + await list[i].getText());
        }
    };
};

module.exports = new RandomsPage();

