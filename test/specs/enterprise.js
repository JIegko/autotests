const enterprisePage = require('../pageobjects/enterprise.page');
const mainPage = require('../pageobjects/main.page');

describe('Check if you can start a free trial "Enterprise cloud"', () => {

    it('Open page GitHub', async () => {
        await enterprisePage.open('');
    });

    it('Click on the button "Enterprise cloud"', async () => {
        await mainPage.waitUntilIsDisplayed(await enterprisePage.enterpriseBtn);
        await enterprisePage.enterpriseBtn.click();
        await mainPage.waitUntilIsDisplayed(await enterprisePage.freeTrialBtn);
        await enterprisePage.freeTrialBtn.click();
        await enterprisePage.enterpriseCloudBtn.click();
    });

    it('Fill input fields with valid data "Enterprise cloud"', async () => {
        await mainPage.waitUntilIsDisplayed(await enterprisePage.checkBoxPreferences);
        await mainPage.addRandomUsername('Indiana-Jones-cloud');
        await mainPage.addRandomEmail('testtest758@domain.com');
        await mainPage.addRandomPassword('Ght321000d');
        await enterprisePage.checkBoxPreferences.click();
    });

    it('Back to previous page', async () => {
        await browser.pause(4000);
        await browser.back()
    });
});

describe('Check if you can start a free trial "Enterprise server"', () => {

    it('Click on the button "Enterprise server"', async () => {
        await browser.pause(2000);
        await enterprisePage.enterpriseServerBtn.click();
    });

    it('Fill input fields with valid data "Enterprise server"', async () => {
        await mainPage.waitUntilIsDisplayed(await enterprisePage.inputNameServ);
        await enterprisePage.addValueName();
        await enterprisePage.addValueCompany();
        await enterprisePage.addValueEmail();
        await enterprisePage.addValuePhoneNumb();
    });

    it('Click on the buttons', async () => {
        await enterprisePage.radioBtnGCloud.click();
        await enterprisePage.radioBtnYes.click();
        await enterprisePage.checkBoxAccept.click();
    });

    it('Fill in the list of questions', async () => {
        await mainPage.waitUntilIsDisplayed(await enterprisePage.questionsList);
        await enterprisePage.addQuestionText();
        await browser.pause(4000);
    });
});
    