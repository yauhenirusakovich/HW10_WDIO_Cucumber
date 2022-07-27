import {MainPage} from "./MainPage";

export class BiletPage extends MainPage {
    constructor() {
        super();
        this.url = "https://www.kinopoisk.ru/afisha/new/city/182/";
    };

    async visitPage() {
        await browser.url(this.url);
    };

    async closePage() {
        await browser.closeWindow();
    };
}