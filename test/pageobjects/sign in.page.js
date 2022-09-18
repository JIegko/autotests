const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignIn extends Page {
    /**
     * define selectors using getter methods
     */
    get signInBtn () {
        return $('//*[contains(text(),"Sign in") and @data-hydro-click]');
    };

    get inputEmailorUsername () {
        return $('[id="login_field"]');
    };

    get inputPassword () {
        return $('[id="password"]');
    };

    get confirmSignInBtn () {
        return $('[class="btn btn-primary btn-block js-sign-in-button"]');
    };

    get settingsProfile () {
        return $('[href="/settings/emails"]');
    };

    get visibleNickname () {
        return $('[class="color-fg-default"]');
    };

    get avatarCircle () {
        return $('[class="avatar avatar-small circle"]');
    };

    get signOutBtn () {
        return $('[class="dropdown-item dropdown-signout"]');
    };

    get incorrectMessage () {
        return $('[class="px-2"]');
    };
    

    async signInBtnClick() {
        await this.signInBtn.click();
    };

    async confirmSignInBtnClick() {
        await this.confirmSignInBtn.click();
    };

    async addEmailOrUsername (value) {
        await this.inputEmailorUsername.addValue(value);
    };

    async addPassword (pass) {
        await this.inputPassword.addValue(pass);
    };

    async checkUrl () {
        return await browser.getUrl();
    };

    async settingsProfileClick() {
        await this.settingsProfile.click();
    };

    async verifyNicknameIsDisplayed () {
        return await this.visibleNickname.isDisplayed();
    };

    async avatarCircleClick() {
        await this.avatarCircle.click();
    };

    async signOutBtnClick() {
        await this.signOutBtn.click();
    };

    async incorrectTextIsDisplayed () {
        return await this.incorrectMessage.isDisplayed();
    };

}

module.exports = new SignIn();
