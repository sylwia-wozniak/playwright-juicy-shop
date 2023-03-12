import { test } from '../fixtures/homePage_fixture';
import { paths, snackBars } from '../utils/constants';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page }) => {
    await page.goto(paths.baseURL);
    await page.waitForLoadState('networkidle');
});

test('A user should change language to Polish from English which is default', async ({ homePage }) => {
    await homePage.clickLanguageButton();
    await homePage.selectLanguage(' Język Polski ');
    await homePage.verifyLanguage('PL');
});

test(`A user should add a review to juice`, async ({ homePage, juiceModal, baseFunctions }) => {
    const selectedJuices = await homePage.selectRandomJuices(2);
    console.log(selectedJuices);
    for (const juice of selectedJuices) {
        await homePage.clickCardName(juice);
        await juiceModal.addReview(faker.lorem.sentence());
        await baseFunctions.waitForResponseAfterClick('/rest/products/', juiceModal.reviewSubmit);
        await juiceModal.getSnackBarAboutReviewSuccess(snackBars.reviewSuccess);
        await juiceModal.closeModal();
    }
});
