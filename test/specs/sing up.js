const randomsPage = require('../pageobjects/scripts.page');
const signUpPage = require('../pageobjects/sign up.page');
const mainPage = require('../pageobjects/main.page');
const assert = require('assert');

describe('My Login application with valid credentials', () => {

    it('Enter your email', async () => {
        await signUpPage.open('');
        await mainPage.waitUntilIsDisplayed(await signUpPage.signUpBtn);
        await signUpPage.signUpBtnClick();
        await mainPage.waitUntilIsDisplayed(await signUpPage.inputEmail);
        await signUpPage.addRandomEmail(await randomsPage.makeEmail());
        await browser.pause(2000);
        await signUpPage.continueEmalBtnClick();
    });

    it('Create a password', async () => {
        await mainPage.waitUntilIsDisplayed(await signUpPage.inputPassword);
        await signUpPage.addRandomPassword(await randomsPage.makePassword());
        await browser.pause(2000);
        await signUpPage.continuePassBtnClick();
    });

    it('Enter a username', async () => {
        await mainPage.waitUntilIsDisplayed(await signUpPage.inputUsername);
        await signUpPage.addRandomUsername(await randomsPage.makeNickName());
        await browser.pause(2000);
        await signUpPage.continueUsernameBtnClick();
    });

    it('Type "y" for yes or "n" for no', async () => {
        await mainPage.waitUntilIsDisplayed(await signUpPage.inputUpdateIn);
        await signUpPage.addYesOrNo('n');
        await browser.pause(1000);
        await signUpPage.continueYesOrNoBtnClick();
        await browser.pause(2000);
    });

    it('Verify your account is displayed', async () => {
        console.log(`Verify your account is displayed: ${await signUpPage.verifyTextIsDisplayed()}`);
    });

    it('Check page URL', async () => {
        value = await signUpPage.checkUrl();
        assert(value === 'https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home');
    });
});

