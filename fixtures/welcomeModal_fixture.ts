import { test as base } from '@playwright/test';
import { WelcomeModal } from '../page-object/modals/welcome';

type WelcomeModalFixtures = {
    welcomeModal: WelcomeModal;
};

export const test = base.extend<WelcomeModalFixtures>({
    welcomeModal: async ({ page }, use) => {
        await use(new WelcomeModal(page));
    },
});
