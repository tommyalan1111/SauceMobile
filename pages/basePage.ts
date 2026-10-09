import { $, browser } from '@wdio/globals';

export class BasePage {

    // Method to click on an element specified by the selector
    async click(selector: string, timeout: number = 10000): Promise<void> {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout });
        await element.click();
    }

    // Method to set a value in an input field specified by the selector
    async setValue(selector: string, value: string, timeout: number = 10000): Promise<void> {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout });
        await element.setValue(value);
    }

    // Method to check display elements
    async isDisplayed(selector: string, timeout: number = 10000): Promise<boolean> {
        try {
            const element = await $(selector);
            return await element.waitForDisplayed ({ timeout});
            
        } catch {
            return false
        }
    }

    // Method pause 
    async pause(milliseconds: number): Promise<void> {
        await browser.pause(milliseconds);
    }
}
