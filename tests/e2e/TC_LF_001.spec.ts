import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';


test.describe('Login Tests', () => {

    test('Valid login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.isLoaded();
        // await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/login');
              await loginPage.login('testGandhi@gmail.com', 'P@ssw0rd1234');
        await expect(page).toHaveTitle('My Account');
                   //  await page.pause();
    await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account')
    });

    test('Invalid login', async ({ page }) => {
         const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.isLoaded();
        // await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/login');
              await loginPage.login('testGandhi123@gmail.com', 'P@ssw0rd1234');
         const errorMsg = page.locator('.alert.alert-danger');
await expect(errorMsg).toBeVisible();
await expect(errorMsg).toContainText('No match for E-Mail Address');
        

    });
    });