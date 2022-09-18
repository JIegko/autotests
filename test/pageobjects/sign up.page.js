const Page = require('./page');
//const randomsPage = require('./randoms.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUp extends Page {
    /**
     * define selectors using getter methods
     */
    get signUpBtn () {
        return $('//*[contains(text(),"Sign up") and @data-hydro-click]');
    }

    get inputEmail () {
        return $('[id="email"]');
    }

    get inputPassword () {
        return $('[id="password"]');
    }

    get inputUsername () {
        return $('[id="login"]');
    }

    get inputUpdateIn () {
        return $('[id="opt_in"]');
    }

    get continueEmailBtn () {
        return $('[data-optimizely-event="click.signup_continue.email"]');
    }

    get continuePasswordBtn () {
        return $('[data-optimizely-event="click.signup_continue.password"]');
    }

    get continueUsernameBtn () {
        return $('[data-optimizely-event="click.signup_continue.username"]');
    }

    get continueUpdateWantedBtn () {
        return $('[data-continue-to="captcha-and-submit-container"]');
    }

    get verifyAccountTxt () {
        return $('[class="text-mono text-bold signup-text-prompt mt-4"]');
    }

   
    async signUpBtnClick () {
        await this.signUpBtn.click();
    };

    async addRandomEmail (email) {
        await this.inputEmail.addValue(email);
    };

    async continueEmalBtnClick () {
        await this.continueEmailBtn.click();
    };

    async addRandomPassword (pass) {
        await this.inputPassword.addValue(pass);
    };

    async continuePassBtnClick () {
        await this.continuePasswordBtn.click();
    };

    async addRandomUsername (Uname) {
        await this.inputUsername.addValue(Uname);
    };

    async continueUsernameBtnClick () {
        await this.continueUsernameBtn.click();
    };

    async addYesOrNo (yn) {
        await this.inputUpdateIn.addValue(yn);
    };

    async continueYesOrNoBtnClick () {
        await this.continueUpdateWantedBtn.click();
    };

    async verifyTextIsDisplayed () {
        return await this.verifyAccountTxt.isDisplayed();
    };

    async checkUrl () {
        return await browser.getUrl();
    };


}

module.exports = new SignUp();
