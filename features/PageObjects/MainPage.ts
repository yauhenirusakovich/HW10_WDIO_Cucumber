export class MainPage {
    protected url: string;
    constructor() {
        this.url = "https://www.kinopoisk.ru/";
    };
    async visitPage(){
        await browser.url(this.url);
    };
    async closePage(){
        await browser.closeWindow();
    };
}