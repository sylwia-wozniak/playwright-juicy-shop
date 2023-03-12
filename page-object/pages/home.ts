import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly languageButton: Locator;
    readonly languagesPanel: Locator;
    readonly juiceName: Locator;
    readonly addToBasket: Locator;
    readonly basketButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.languageButton = page.getByRole('button', { name: 'Language selection menu' });
        this.languagesPanel = page.locator('.mat-menu-content');
        this.juiceName = page.locator('.item-name');
        this.addToBasket = page.getByRole('button', { name: 'Add to Basket' });
        this.basketButton = page.getByRole('button', { name: 'Show the shopping cart' });
    }

    async clickLanguageButton() {
        await this.languageButton.click();
        await expect(this.languagesPanel).toBeVisible();
    }

    async selectLanguage(language: string) {
        await this.page.getByText(language).click();
    }

    async verifyLanguage(languageAbbreviation: string) {
        expect(await this.languageButton).toContainText(languageAbbreviation);
    }

    async clickCardName(juicyName) {
        await this.page.getByText(juicyName).click();
    }

    async selectRandomJuices(num = 1) {
        const allJuices = await this.juiceName.allTextContents();
        const selectedJuices = [];
        for (let i = 0; i < num; ) {
            const juice = allJuices[Math.floor(Math.random() * allJuices.length)];
            selectedJuices.push(juice);
            i++;
        }
        return selectedJuices;
    }
}
