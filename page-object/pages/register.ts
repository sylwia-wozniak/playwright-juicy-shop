import { expect, Locator, Page } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly registerHeading: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly repeatPasswordInput: Locator;
    readonly securityQuestionsContainer: Locator;
    readonly securityQuestion: Locator;
    readonly answerInput: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerHeading = page.locator('mat-card > h1');
        this.emailInput = page.locator('#emailControl');
        this.passwordInput = page.locator('#passwordControl');
        this.repeatPasswordInput = page.locator('#repeatPasswordControl');
        this.securityQuestionsContainer = page.locator('.security-container mat-select');
        this.securityQuestion = page.locator('div[role=listbox] > mat-option');
        this.answerInput = page.locator('#securityAnswerControl');
        this.registerButton = page.locator('#registerButton');
    }

    async validateHeading(heading: string) {
        await expect(this.registerHeading).toContainText(heading);
    }

    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async repeatPassword(password: string) {
        await this.repeatPasswordInput.fill(password);
    }

    async selectFirstSecurityQuestion() {
        await this.securityQuestionsContainer.click();
        await this.securityQuestion.first().click();
    }

    async fillAnswerInput(answer: string) {
        await this.answerInput.fill(answer);
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }
}
