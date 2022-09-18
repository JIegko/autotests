const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get product () {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[1]/details/summary');
    }

    get productDropDown () {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[1]/details/div');
    }

    get explore () {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[4]/details/summary');
    }

    get exploreDropDown () {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[4]/details/div');
    }

    get pricing () {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[6]/details/summary');
    }

    get pricingDropDown () {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[6]/details/div');
    }

    get plansHeader () {
        return $('header [href="/pricing"]');
    }

    get exploreGitHub () {
        return $('header [href="/explore"]');
    }

    get topicsMain () {
        return $('main [href="/topics"]');
    }

    get joinForFreeBtn () {
        return $('[class="btn-mktg d-block btn-muted-mktg"]');
    }

    get inputUser () {
        return $('[id="user_login"]');
    }
    get inputEmail () {
        return $('[id="user_email"]');
    }
    get inputPassword () {
        return $('[id="user_password"]');
    }

    get checkBox () {
        return $('[type="checkbox"]');
    }
   
    async waitUntilIsDisplayed (value) {
        await browser.waitUntil(
            async () => (await value.isDisplayed()),
            {
                timeout: 10000,
                timeoutMsg: `Timeout expired for ${value}`
            }
        );
    };

    async mouseHover (n) {
        await n.moveTo();
    };

    async verifyTextIsDisplayed (n) {
        return await n.isDisplayed();
    };

    async toConsoleLog (elem) {
       return console.log(`Element "${await elem.getText()}" is displayed: ${await this.verifyTextIsDisplayed(await elem)}`);
    };

    async addRandomUsername(name) {
        await this.inputUser.addValue(name);
    };

    async addRandomEmail (email) {
        await this.inputEmail.addValue(email);
    };

    async addRandomPassword (pass) {
        await this.inputPassword.addValue(pass);
    };
}

module.exports = new MainPage();

