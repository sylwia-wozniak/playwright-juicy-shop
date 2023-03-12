export const headings = {
    registerHeading: 'User Registration',
    loginHeading: 'Login',
    addressHeading: 'Add New Address',
};

export const paths = {
    baseURL: process.env.BASE_URL ?? 'http://localhost:3000/#',
    registerPath: '/register',
    loginPath: '/login',
    homePath: '/search',
    profilePath: '/profile',
    basketPath: '/basket',
    addressSelectPath: '/address/select',
    addressCreatePath: '/address/create',
    deliveryMethodPath: '/delivery-method',
    paymentPath: '/payment/shop',
    orderSummaryPath: '/order-summary',
    orderCompletionPath: '/order-completion',
};

export const snackBars = {
    registerSuccess: 'Registration completed successfully. You can now log in.',
    reviewSuccess: 'You review has been saved.',
    languageChanges: 'Language has been changed to English',
};
