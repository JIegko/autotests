const searchPage = require('../pageobjects/search.page');
const scriptsPage = require('../pageobjects/scripts.page');
const mainPage = require('../pageobjects/main.page');

describe('Ability use search', () => {

    it('Open page GitHub', async () => {
        await searchPage.open('');
    });

    it('Search for the given text', async () => {
        await searchPage.inputSearch.click();
        await searchPage.addWebdriverio()
        await searchPage.searchBtn.click();
    });

    it('Go to required page', async () => {
        await searchPage.typeScriptBtn.click();
        await browser.pause(1000);
        await searchPage.webdriverioHref.click();
        await browser.pause(1000);
    });

    it('Сheck for certain text in page url', async () => {
        await searchPage.findWebdriverio();
        await browser.pause(1000);
    });
});

describe('Get in console open position', () => {

    it('Open page GitHub', async () => {
        await searchPage.open('');
        await browser.pause(1000);
    });

    it('Go to career page', async () => {
        await searchPage.careersHref.click();
        await browser.pause(1000);
    });

    it('Go to open position', async () => {
        await mainPage.waitUntilIsDisplayed(await searchPage.openPositionsHref);
        await searchPage.openPositionsHref.click();
        await browser.pause(1000);
    });

    it('Getting open position in console', async () => {
        await scriptsPage.toLog(await searchPage.listOpenPositions)
        await browser.pause(1000);
    });
});