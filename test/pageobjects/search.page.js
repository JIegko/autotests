const Page = require('./page');
const scriptsPage = require('../pageobjects/scripts.page')


class SearchPage extends Page {
   
    get inputSearch () {
        return $('[placeholder="Search GitHub"]');
    }

    get searchBtn () {
        return $('[class="js-jump-to-badge-search-text-global"]');
    }

    get typeScriptBtn () {
        return $('[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]');
    }
    
    get webdriverioHref () {
        return $('[href="/webdriverio/webdriverio"]');
    }
    
    get careersHref () {
        return $('[href="/about/careers"]');
    }
    
    get openPositionsHref () {
        return $('[href="#positions"]');
    }
    
    get listOpenPositions () {
        return $$('[class="text-left flex-auto py-4"]');
    }
    
    async findWebdriverio () {
        await scriptsPage.findString('webdriverio', await browser.getUrl());
    };
    
    async addWebdriverio() {
        await this.inputSearch.addValue('webdriverio');
    };

}

module.exports = new SearchPage();

