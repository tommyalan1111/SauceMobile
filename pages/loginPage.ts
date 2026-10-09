import { BasePage } from './basePage';

export class LoginPage extends BasePage {

    // Use Accessibility ID of React Native elements for username, password, and login button
    private get usernameInput(): string { return '~Username input field'; }
    private get passwordInput(): string { return '~Password input field'; }
    private get loginButton(): string { return '~Login button'; }

    async login(username: string, password: string): Promise<void> {
        await this.setValue(this.usernameInput, username);
        await this.setValue(this.passwordInput, password);
        await this.click(this.loginButton);
    }
}