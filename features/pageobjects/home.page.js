const Page = require('./page');

class HomePage extends Page {
    
    get careersLink () { return $('(//a[@href="/careers/"])[1]') }

    async careersLinkClick () {
        await this.careersLink.click();
    }

}

module.exports = new HomePage();
