import {test,expect} from '@playwright/test';
import { RegistrationPage } from '../../pages/RegistrationPage';

test('Login with InVali Email', async({page})=>{
    const registrationPage=new RegistrationPage(page);
   await registrationPage.goto();
   await registrationPage.isLoaded();
   await registrationPage.register('TestUser','Automation', 'testGandhi@automation', '5551234567', 'P@ssw0rd1234', 'P@ssw0rd1234' )
   await page.waitForTimeout(5000);
   const emailError = page.locator('div.text-danger', {
  hasText: 'E-Mail Address does not appear to be valid!'
});
await expect(emailError).toBeVisible();
await expect(emailError).toHaveText('E-Mail Address does not appear to be valid!');
});