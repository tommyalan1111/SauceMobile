import { MenuPage } from '../pages/menuPage';
import { LoginPage } from '../pages/loginPage';
import {auth_data} from '../auth/auth';
import { expect } from '@wdio/globals';

describe('Login Test Suite', () => {
    let menuPage: MenuPage;
    let loginPage: LoginPage;

    before(() => {
    menuPage = new MenuPage();
    loginPage = new LoginPage();
  });
  
    beforeEach(async () => {
    // Đảm bảo các TC từ 1-5 luôn hướng tới trang Login
    await menuPage.goToLogin();
  });

// --- 1. Unhappy Path: Invalid Credentials ---

    it('TC1: Should fail login with invalid password', async () => {
        const { username, password } = auth_data.INVALID_PASSWORD_USER;
        await loginPage.login(username, password);
        // Add assertions to verify failed login
        const isErrorDisplayed = await loginPage.isErrorMessageDisplayed();
        expect(isErrorDisplayed).toBe(true);
    });

    it('TC2: Should fail login with locked username', async () => {
        const { username, password } = auth_data.LOCKED_USERNAME_USER;
        await loginPage.login(username, password);
        // Add assertions to verify failed login
        const isErrorDisplayed = await loginPage.isErrorMessageDisplayed();
        expect(isErrorDisplayed).toBe(true);
    });

    it('TC3: Should fail login with missing username', async () => {
        const { username, password } = auth_data.MISSING_USER;
        await loginPage.login(username, password);
        // Add assertions to verify failed login
        const isErrorDisplayed = await loginPage.isErrorMessageDisplayed();
        expect(isErrorDisplayed).toBe(true);
    });

    it('TC4: Should fail login with missing password', async () => {
        const { username, password } = auth_data.MISSING_PASSWORD;
        await loginPage.login(username, password);
        // Add assertions to verify failed login
        const isErrorDisplayed = await loginPage.isErrorMessageDisplayed();
        expect(isErrorDisplayed).toBe(true);
    });


// --- 2. Happy Path: Valid Credentials ---

    it('TC5: Should login successfully with valid credentials', async () => {
        const { username, password } = auth_data.VALID_USER;
        await loginPage.login(username, password);
        // Add assertions to verify successful login
    });

    it('TC6: Should logout successfully after login', async () => {
        await menuPage.logout();
        await menuPage.pause(2000); // Pause to allow logout to complete
    });

    //
});