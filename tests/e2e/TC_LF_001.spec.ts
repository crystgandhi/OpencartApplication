import {expect } from '@playwright/test';
import { test } from '../../fixtures/auth.fixture';

test.describe('Login Tests', () => {

    test('Valid login', async ({ loggedInPage }) => {
         await loggedInPage.goto();
        await loggedInPage.isLoaded();
        // await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/login');
              await loggedInPage.login('testGandhi@gmail.com', 'P@ssw0rd1234');
        await expect(loggedInPage.page).toHaveTitle('My Account');
                   //  await page.pause();
    await expect(loggedInPage.page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account')
    });

    test('Invalid login', async ({ loggedInPage }) => {
          await loggedInPage.goto();
        await loggedInPage.isLoaded();
        // await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/login');
              await loggedInPage.login('testGandhi123@gmail.com', 'P@ssw0rd1234');
         const errorMsg = loggedInPage.page.locator('.alert.alert-danger');
await expect(errorMsg).toBeVisible();
await expect(errorMsg).toContainText('No match for E-Mail Address');
        
    });
    });