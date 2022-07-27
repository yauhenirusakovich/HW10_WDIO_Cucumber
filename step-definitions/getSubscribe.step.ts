import {Given, When, Then } from "@wdio/cucumber-framework";
import {DvaHolmaPage} from "../PageObjects/DvaHolmaPage";
import {MainPage} from "../PageObjects/MainPage";
import {BiletPage} from "../PageObjects/BiletPage";
import {LOCATORS} from "../locators/locators";

const setTimeOut = setTimeout(() => {}, 3000);
const page = {
    Mpage: MainPage,
    Bpage: BiletPage,
    Thill: DvaHolmaPage,
};
Given (/^I am on the (\w+) page$/, async (page) => {
    await setTimeOut;
    const mainPage = await new MainPage();
    await setTimeOut;
    await mainPage.visitPage();
    await setTimeOut;
});
When(/^I click (\w+) button$/, async (page) => {
    const mainHeadButton = await browser.$(LOCATORS.gs1);
    await setTimeOut;
    await mainHeadButton.waitForExist({timeout: 5000});
    await setTimeOut;
    await mainHeadButton.click();
    await setTimeOut;
});
Then(/^I see new page and click (\w+) button$/, async (page) => {
    const getSubscribe = await browser.$(LOCATORS.gs2);
    await setTimeOut;
    await getSubscribe.waitForExist({timeout: 5000});
    await setTimeOut;
    await getSubscribe.click();
    await setTimeOut;
});