import {expect} from '@playwright/test';
import { test } from '../../fixtures/auth.fixture';

test('Login with InVali Email', async({register})=>{
    
   await register.goto();
   await register.isLoaded();
   await register.register('TestUser','Automation', 'testGandhi@automation', '5551234567', 'P@ssw0rd1234', 'P@ssw0rd1234' )
   await register.page.waitForTimeout(5000);
   const emailError = register.page.locator('div.text-danger', {
  hasText: 'E-Mail Address does not appear to be valid!'
});
await expect(emailError).toBeVisible();
await expect(emailError).toHaveText('E-Mail Address does not appear to be valid!');
});