import {Given, When, Then } from "@wdio/cucumber-framework";
import {MainPage} from "../PageObjects/MainPage";
const setTimeOut = setTimeout(() => {}, 3000);
import {LOCATORS} from "../locators/locators";
const page = {
    Mpage: MainPage,
};
Given (/^I am on the (\w+) page$/, async (page) => {
    await setTimeOut;
    const mainPage = await new MainPage();
    await setTimeOut;
    await mainPage.visitPage();
    await setTimeOut;
});

When (/^I click on the (\w+) button$/, async (page) => {
    const inputBtn = await browser.$(LOCATORS.si1);
    await inputBtn.waitForExist({timeout: 10000});
    await inputBtn.click();
    await inputBtn.setValue("Голяк");
    const searchRun = await browser.$(LOCATORS.gs2);
    await searchRun.waitForExist({timeout:10000});
    await searchRun.click();
});

Then (/^I check search results$/, async (page) => {
    const res = await browser.$(LOCATORS.si3);
    await res.waitForExist({timeout: 10000});
    console.log( await res.getText() === "Голяк (сериал)")
});