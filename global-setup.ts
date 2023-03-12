import { chromium, Page } from '@playwright/test';
import { BaseFunctions } from './utils/base_functions';
import { headings, paths } from './utils/constants';
import { CookiesModal } from './page-object/modals/cookies';
import { RegisterPage } from './page-object/pages/register';
import { faker } from '@faker-js/faker';

async function globalSetup() {
    const browser = await chromium.launch();
    const userPage = await browser.newPage();
    const baseFunctions = new BaseFunctions(userPage);
    const cookiesModal = new CookiesModal(userPage);
    const registerPage = new RegisterPage(userPage);

    const email = faker.internet.email();
    const password = 'Testtest1!';

    await userPage.goto(paths.baseURL + paths.registerPath);
    await baseFunctions.getAndCloseWelcomeDialog();
    await cookiesModal.dismissCookieDialog();
    await registerPage.validateHeading(headings.registerHeading);
    await registerPage.fillEmail(email);
    await registerPage.fillPassword(password);
    await registerPage.repeatPassword(password);
    await registerPage.selectFirstSecurityQuestion();
    await registerPage.fillAnswerInput('Answer');
    await baseFunctions.waitForResponseAfterClick('/api/SecurityAnswers/', registerPage.registerButton);
    await baseFunctions.validateUrl(paths.baseURL + paths.loginPath);
    await baseFunctions.login(email, password);
    await baseFunctions.validateUrl(paths.baseURL + paths.homePath);
    await userPage.context().storageState({ path: 'userStorageState.json' });
    await browser.close();
}

export default globalSetup;
