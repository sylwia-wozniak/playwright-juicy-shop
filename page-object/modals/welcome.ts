import { Locator, Page } from '@playwright/test';

export class WelcomeModal {
    readonly page: Page;
    readonly welcomeDialog: Locator;
    readonly closeButtonInDialog: Locator;

    constructor(page: Page) {
        this.page = page;
        this.welcomeDialog = page.locator('mat-dialog-container[role="dialog"]');
        this.closeButtonInDialog = page.locator('.close-dialog');
    }

    async dismissWelcomeDialog() {
        await this.closeButtonInDialog.click();
    }
}
