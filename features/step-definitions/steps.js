const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../pageobjects/home.page');
const CareersPage = require('../pageobjects/careers.page');

const pages = {
    home: HomePage,
    careers: CareersPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

Then(/^I verify a Careers link is displayed$/, async () => {
    await expect(HomePage.careersLink).toBeDisplayed();
});

When(/^I click on the Careers link$/, async () => {
    await HomePage.careersLinkClick();
    await browser.pause(1000);
});

Then(/^I should see a job title saying (.*)$/, async (title) => {
    await expect(CareersPage.careerTitleHeaderEqualTo(title)).toBeDisplayed();
});

When(/^I search for the (.*) job$/, async (job) => {
    await CareersPage.searchForJob(job);
    await browser.pause(1000);
});

Then(/^I should see a job title containing (.*)$/, async (title) => {
    await expect(CareersPage.careerTitleHeaderContaining(title)).toBeDisplayed();
});

