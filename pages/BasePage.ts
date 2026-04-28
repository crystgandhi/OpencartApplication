import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
   }
  // Navigation
  async navigate(url: string): Promise<void> {
    await this.page.goto(url, { waitUntil: 'load' });
  }
   // Common Actions
  async click(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }
  async fill(locator: Locator, value: string): Promise<void> {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value);
  }
    // Common Assertions
  async verifyUrlContains(text: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(text));
  }
  // Must be implemented in each page
  abstract isLoaded(): Promise<void>;
}
