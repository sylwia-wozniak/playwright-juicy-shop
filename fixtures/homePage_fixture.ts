import { test as base } from '@playwright/test';
import { HomePage } from '../page-object/pages/home';
import { JuiceModal } from '../page-object/modals/juice';
import { BaseFunctions } from '../utils/base_functions';

type HomePageFixtures = {
    homePage: HomePage;
    juiceModal: JuiceModal;
    baseFunctions: BaseFunctions;
};

export const test = base.extend<HomePageFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    juiceModal: async ({ page }, use) => {
        await use(new JuiceModal(page));
    },

    baseFunctions: async ({ page }, use) => {
        await use(new BaseFunctions(page));
    },
});
