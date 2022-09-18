const scriptsPage = require('../pageobjects/scripts.page');
const mainPage = require('../pageobjects/main.page');


describe('Mouse hover in main page on menus elements', () => {

    it('Open page GitHub', async () => {
        await mainPage.open('');
    });

    it('Mouse hover on "Product"', async () => {
        await mainPage.mouseHover(await mainPage.product);
        await browser.pause(1000);
        await mainPage.product.click(); //close dropdown menu
    });

    it('Mouse hover on "Explore"', async () => {
        await mainPage.mouseHover(await mainPage.explore);
        await browser.pause(1000);
        await mainPage.explore.click(); //close dropdown menu
    });

    it('Mouse hover on "Pricing"', async () => {
        await mainPage.mouseHover(await mainPage.pricing);
        await browser.pause(1000);
    });
});

describe('Сonsole output result is displayed for menu items', () => {

    it('Result is displayed fom menu item "Product"', async () => {
        await mainPage.toConsoleLog(await mainPage.product);
    });

    it('Result is displayed fom menu item "Explore"', async () => {
        await mainPage.toConsoleLog(await mainPage.explore);
    });

    it('Result is displayed fom menu item "Pricing"', async () => {
        await mainPage.toConsoleLog(await mainPage.pricing);
        await mainPage.waitUntilIsDisplayed(await mainPage.plansHeader);
    });
});

describe('Сheck registration for getting free github license', () => {

    it('Go to Join for free GitHub', async () => {
        await mainPage.plansHeader.click();
        await mainPage.waitUntilIsDisplayed(await mainPage.joinForFreeBtn);
        await mainPage.joinForFreeBtn.click();
    });

    it('Enter random valid credentials', async () => {
        await mainPage.waitUntilIsDisplayed(await mainPage.checkBox);
        await mainPage.addRandomUsername(await scriptsPage.makeNickName());
        await mainPage.addRandomEmail(await scriptsPage.makeEmail());
        await mainPage.addRandomPassword(await scriptsPage.makePassword());
    });

    it('Click on checkbox', async () => {
        await mainPage.checkBox.click();
        await browser.pause(3000);
    });
});

describe('Сheck "Topics" Visibility on topics page', () => {

    it('Open page GitHub', async () => {
        await mainPage.open('');
    });

    it('Mouse hover on "Explore"', async () => {
        await mainPage.mouseHover(await mainPage.explore);
        await browser.pause(1000);
    });

    it('Open page Topics', async () => {
        await mainPage.waitUntilIsDisplayed(await mainPage.exploreGitHub);
        await mainPage.exploreGitHub.click();
        await mainPage.waitUntilIsDisplayed(await mainPage.topicsMain);
        await mainPage.topicsMain.click()
        await browser.pause(1000);
    });

    it('Check Topics Visibility"', async () => {
        await mainPage.toConsoleLog(await mainPage.topicsMain);
        await browser.pause(1000);
    });
});