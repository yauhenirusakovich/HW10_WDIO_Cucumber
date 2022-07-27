import {MainPage} from "./MainPage";

export class DvaHolmaPage extends MainPage {
    constructor() {
        super();
        this.url = "https://www.kinopoisk.ru/series/4531254/?from_block=trailer_promo";
    }
    async visitPage() {
        await browser.url(this.url);
    };
    async closePage() {
        await browser.closeWindow();
    };
}