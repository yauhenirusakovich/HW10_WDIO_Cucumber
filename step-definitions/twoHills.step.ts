import {Given, When, Then } from "@wdio/cucumber-framework";
import {DvaHolmaPage} from "../PageObjects/DvaHolmaPage";
import {LOCATORS} from "../locators/locators";

const setTimeOut = setTimeout(() => {}, 3000);
const page ={
    Thill: DvaHolmaPage,
};

Given (/^I stay on the (\w+) page$/, async (page) => {
    await setTimeOut;
    const twoHillsPage = await new DvaHolmaPage();
    await setTimeOut;
    await twoHillsPage.visitPage();
    await setTimeOut;
});
When(/^I click on the (\w+) button$/, async (page) => {
    const watchButton = await browser.$(LOCATORS.th1);
    await watchButton.waitForExist({timeout: 20000});
    await watchButton.click();

});
Then(/^Then I click on the (\w+) button$/, async (page) => {
    const watchBySubscribeBtn = await browser.$(LOCATORS.ts2);
    await watchBySubscribeBtn.waitForExist({timeout: 20000});
    await watchBySubscribeBtn.click();
});