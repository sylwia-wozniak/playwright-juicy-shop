import { Locator, Page } from '@playwright/test';

export class CookiesModal {
    readonly page: Page;
    readonly closeButtonInDialog: Locator;

    constructor(page: Page) {
        this.page = page;
        this.closeButtonInDialog = page.locator('[aria-label="dismiss cookie message"]');
    }

    async dismissCookieDialog() {
        await this.closeButtonInDialog.click();
    }
}
