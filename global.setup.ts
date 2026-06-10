import { chromium, FullConfig } from "@playwright/test";

export default async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
    
    await page.fill('#input-email', 'testGandhi@gmail.com');
    await page.fill('#input-password', 'P@ssw0rd1234');
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for the URL to change to the account page
    await page.waitForURL('**/index.php?route=account/account', { waitUntil: 'networkidle' });

    // Important: Save storage state BEFORE closing the browser
    await context.storageState({ path: 'auth.json' });
  } catch (error) {
    console.error("Global Setup Login Failed:", error);
    throw error;
  } finally {
    await browser.close();
  }
}


