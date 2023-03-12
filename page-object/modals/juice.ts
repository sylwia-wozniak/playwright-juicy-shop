import { expect, Locator, Page } from '@playwright/test';

export class JuiceModal {
    readonly page: Page;
    readonly reviewInput: Locator;
    readonly reviewSubmit: Locator;
    readonly snackBarAboutReviewSuccess: Locator;
    readonly closeModalButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.reviewInput = page.locator('[aria-label="Text field to review a product"]');
        this.reviewSubmit = page.locator('#submitButton');
        this.snackBarAboutReviewSuccess = page.locator('simple-snack-bar');
        this.closeModalButton = page.getByRole('button', { name: 'Close Dialog' });
    }

    async addReview(reviewText) {
        await this.reviewInput.click();
        await this.reviewInput.fill(reviewText);
    }

    async getSnackBarAboutReviewSuccess(snackBarText) {
        await expect(this.snackBarAboutReviewSuccess).toContainText(snackBarText);
    }

    async closeModal() {
        await this.closeModalButton.click();
    }
}
