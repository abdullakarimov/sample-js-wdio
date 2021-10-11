const Page = require('./page');

class CareersPage extends Page {

    get searchJobInput () { return $('//input[@id="search-job"]') }

    async careerTitleHeaderEqualTo (input) {
        return $('//h2[text()="' + input + '"]');
    }

    async careerTitleHeaderContaining (input) {
        return $('//h2[contains(text(),"' + input + '")]');
    }

    async searchForJob (input) {
        await this.searchJobInput.setValue(input);
    }

}

module.exports = new CareersPage();