const randomsPage = require('../pageobjects/scripts.page');
const signInPage = require('../pageobjects/sign in.page');
const mainPage = require('../pageobjects/main.page');
const assert = require('assert');

describe('My Login application with valid credentials (Nickname)', () => {

    it('Click at "Sign In" button', async () => {
        await signInPage.open('');
        await signInPage.signInBtnClick();
    });

    it('Enter valid username', async () => {
        await signInPage.addEmailOrUsername('Randomaa');
    });

    it('Enter valid password', async () => {
        await browser.pause(1000);
        await signInPage.addPassword('Ght32100000');
    });

    it('Confirm click on "Sign in"', async () => {
        await browser.pause(2000);
        await signInPage.confirmSignInBtnClick();
    });

    it('Check page URL', async () => {
        value = await signInPage.checkUrl();
        assert(value === 'https://github.com/account_verifications');
        await browser.pause(2000);
    });

    it('Enter to profile page', async () => {
        await signInPage.settingsProfileClick();
        await browser.pause(2000);
    });

    it('Check visiblity of nickname', async () => {
        await mainPage.waitUntilIsDisplayed(await signInPage.visibleNickname);
        console.log(`Verify your nickname is displayed: ${await signInPage.verifyNicknameIsDisplayed()}`);
        await browser.pause(2000);
    });

    it('Click to avatar circle', async () => {
        await signInPage.avatarCircleClick();
    });

    it('Sign out from profile', async () => {
        await signInPage.signOutBtnClick();
    });
});

describe('My Login application with valid credentials (Email)', () => {

    it('Click at "Sign In" button', async () => {
        await signInPage.open('');
        await signInPage.signInBtnClick();
    });

    it('Enter valid email', async () => {
        await signInPage.addEmailOrUsername('slf@dwd.com');
    });

    it('Enter valid password', async () => {
        await browser.pause(1000);
        await signInPage.addPassword('Ght32100000');
    });

    it('Confirm click on "Sign in"', async () => {
        await browser.pause(2000);
        await signInPage.confirmSignInBtnClick();
    });

    it('Enter to profile page', async () => {
        await signInPage.settingsProfileClick();
    });

    it('Click to avatar circle', async () => {
        await signInPage.avatarCircleClick();
    });

    it('Sign out from profile', async () => {
        await signInPage.signOutBtnClick();
    });
});

describe('My Login application with invalid credentials (empty inputs)', () => {

    it('Click at "Sign In" button', async () => {
        await signInPage.open('');
        await signInPage.signInBtnClick();
    });

    it('Confirm click on "Sign in"', async () => {
        await browser.pause(1000);
        await signInPage.confirmSignInBtnClick();
    });

    it('Check visiblity message of incorrect credentials', async () => {
        console.log(`Verify incorrect message is displayed: ${await signInPage.incorrectTextIsDisplayed()}`);
        await browser.pause(1000);
    });
    
});

describe('My Login application with invalid random credentials', () => {

    it('Click at "Sign In" button', async () => {
        await signInPage.open('');
        await signInPage.signInBtnClick();
    });

    it('Enter valid username', async () => {
        await browser.pause(1000);
        await signInPage.addEmailOrUsername(await randomsPage.makeEmail());
    });

    it('Enter valid password', async () => {
        await signInPage.addPassword(await randomsPage.makePassword());
    });

    it('Confirm click on "Sign in"', async () => {
        await browser.pause(1000);
        await signInPage.confirmSignInBtnClick();
    });

    it('Check visiblity message of incorrect credentials', async () => {
        console.log(`Verify incorrect message is displayed: ${await signInPage.incorrectTextIsDisplayed()}`);
        await browser.pause(1000);
    });
    
});

describe('My Login application with valid credentials (reverce font case)', () => {

    it('Click at "Sign In" button', async () => {
        await signInPage.open('');
        await signInPage.signInBtnClick();
    });

    it('Enter valid username with reverce font case', async () => {
        await signInPage.addEmailOrUsername('rANDOMAA');
    });

    it('Enter valid password', async () => {
        await browser.pause(1000);
        await signInPage.addPassword('Ght32100000');
    });

    it('Confirm click on "Sign in"', async () => {
        await browser.pause(2000);
        await signInPage.confirmSignInBtnClick();
    });

    it('Enter to profile page', async () => {
        await signInPage.settingsProfileClick();
    });

    it('Click to avatar circle', async () => {
        await signInPage.avatarCircleClick();
    });

    it('Sign out from profile', async () => {
        await signInPage.signOutBtnClick();
    });
});

describe('My Login application with invalid credentials (reverce font case in password)', () => {

    it('Click at "Sign In" button', async () => {
        await signInPage.open('');
        await signInPage.signInBtnClick();
    });

    it('Enter valid username', async () => {
        await signInPage.addEmailOrUsername('Randomaa');
    });

    it('Enter valid password with reverce font case in password', async () => {
        await browser.pause(1000);
        await signInPage.addPassword('gHT32100000');
    });

    it('Confirm click on "Sign in"', async () => {
        await browser.pause(2000);
        await signInPage.confirmSignInBtnClick();
    });

    it('Check visiblity message of incorrect credentials', async () => {
        console.log(`Verify incorrect message is displayed: ${await signInPage.incorrectTextIsDisplayed()}`);
        await browser.pause(1000);
    });

});

describe('My Login application with invalid credentials (spaces to the left of the username)', () => {

    it('Click at "Sign In" button', async () => {
        await signInPage.open('');
        await signInPage.signInBtnClick();
    });

    it('Enter valid username with spaces to the left', async () => {
        await signInPage.addEmailOrUsername('   Randomaa');
    });

    it('Enter valid password', async () => {
        await browser.pause(1000);
        await signInPage.addPassword('Ght32100000');
    });

    it('Confirm click on "Sign in"', async () => {
        await browser.pause(2000);
        await signInPage.confirmSignInBtnClick();
    });

    it('Check visiblity message of incorrect credentials', async () => {
        console.log(`Verify incorrect message is displayed: ${await signInPage.incorrectTextIsDisplayed()}`);
        await browser.pause(1000);
    });

});

describe('My Login application with invalid credentials (<> on the sides)', () => {

    it('Click at "Sign In" button', async () => {
        await signInPage.open('');
        await signInPage.signInBtnClick();
    });

    it('Enter valid username with <> on the sides', async () => {
        await signInPage.addEmailOrUsername('<Randomaa>');
    });

    it('Enter valid password', async () => {
        await browser.pause(1000);
        await signInPage.addPassword('Ght32100000');
    });

    it('Confirm click on "Sign in"', async () => {
        await browser.pause(2000);
        await signInPage.confirmSignInBtnClick();
    });

    it('Check visiblity message of incorrect credentials', async () => {
        console.log(`Verify incorrect message is displayed: ${await signInPage.incorrectTextIsDisplayed()}`);
        await browser.pause(1000);
    });

});

describe('My Login application with invalid credentials (spaces to the right of the username)', () => {

    it('Click at "Sign In" button', async () => {
        await signInPage.open('');
        await signInPage.signInBtnClick();
    });

    it('Enter valid username with spaces to the right', async () => {
        await signInPage.addEmailOrUsername('Randomaa       ');
    });

    it('Enter valid password', async () => {
        await browser.pause(1000);
        await signInPage.addPassword('Ght32100000');
    });

    it('Confirm click on "Sign in"', async () => {
        await browser.pause(2000);
        await signInPage.confirmSignInBtnClick();
    });

    it('Check visiblity message of incorrect credentials', async () => {
        console.log(`Verify incorrect message is displayed: ${await signInPage.incorrectTextIsDisplayed()}`);
        await browser.pause(1000);
    });
});