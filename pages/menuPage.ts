import  { BasePage } from './basePage';

export class MenuPage extends BasePage {
    // Use Accessibility ID of React Native element for the open menu button
    private get openMenuButton(): string {return '~open menu';}
    // Use Accessibility ID of React Native element for the login menu item
    private get loginMenuButton(): string { return '~menu item log in'; }
    // Use Accessibility ID of React Native element for the logout menu item
    private get logoutMenuButton(): string { return '~menu item log out'; }


    // Selector LOG OUT / OK button on Alert Dialog Native of Android
    private get alertPositiveButton(): string {return 'id=android:id/button1';}

    async openMenu(): Promise<void> {
        await this.click(this.openMenuButton);
    }

    async goToLogin(): Promise<void> {
        await this.openMenu();

        const isLoginMenuDisplayed = await this.isDisplayed(this.loginMenuButton, 5000);
        if (isLoginMenuDisplayed) {
            // If the login menu item is not displayed, it means the user is already logged in.
        }
        await this.click(this.loginMenuButton);
    }

    async logout(): Promise<void> {
        await this.openMenu();
        await this.click(this.logoutMenuButton);

        // POP UP 1: Click the log out button on the confirmation dialog
        await this.click(this.alertPositiveButton);

        // POP UP 2: Click the "OK" button on the confirmation dialog
        await this.click(this.alertPositiveButton);
    }

}