import { expect, Locator, Page } from '@playwright/test';
import { WelcomeModal } from '../page-object/modals/welcome';
import { LoginPage } from '../page-object/pages/login';
import { headings } from './constants';

export class BaseFunctions {
    readonly page: Page;
    readonly welcomeModal: WelcomeModal;
    readonly loginPage: LoginPage;

    constructor(page: Page) {
        this.page = page;
        this.welcomeModal = new WelcomeModal(page);
        this.loginPage = new LoginPage(page);
    }

    public async getAndCloseWelcomeDialog() {
        await this.welcomeModal.dismissWelcomeDialog();
        await expect(this.welcomeModal.welcomeDialog).not.toBeVisible();
    }

    public async validateUrl(path) {
        await expect(this.page).toHaveURL(`${path}`);
    }

    public async login(email, password) {
        await this.loginPage.validateHeading(headings.loginHeading);
        await this.loginPage.fillEmail(email);
        await this.loginPage.fillPassword(password);
        await this.loginPage.clickLoginButton();
    }

    public async waitForResponseAfterClick(responsePath: string, locatorToClick: Locator) {
        return await Promise.all([
            this.page.waitForResponse(resp => (resp.url().includes(responsePath) && resp.status() === 200) || resp.status() === 201),
            await locatorToClick.click(),
        ]);
    }
}
