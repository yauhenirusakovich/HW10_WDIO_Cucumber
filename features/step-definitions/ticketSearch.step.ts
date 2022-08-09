import {Given, When, Then } from "@wdio/cucumber-framework";
import {LOCATORS} from "../locators/locators";
import {MainPage} from "../PageObjects/MainPage";

const setTimeOut = setTimeout(() => {}, 3000);
const page = {
    Mpage: MainPage,
};
Given (/^I am visit the (\w+) page$/, async (page) => {
    await setTimeOut;
    const mainPage = await new MainPage();
    await setTimeOut;
    await mainPage.visitPage();
    await setTimeOut;
});

When (/^I click on (\w+) button$/, async (page) => {
    const inputBtn2 = await browser.$(LOCATORS.ts1);
    await inputBtn2.waitForExist({timeout: 10000});
    await inputBtn2.click();
});

Then (/^I check tickets results$/, async (page) => {
    const res2 = await browser.$(LOCATORS.ts2);
    await res2.waitForExist({timeout: 10000});
    console.log( await res2.getText() === "Челюсти. Столкновение");
});