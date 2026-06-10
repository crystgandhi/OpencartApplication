import {expect} from '@playwright/test';
import { test } from '../../fixtures/auth.fixture';

test('Login and Seacrh Product', async({search})=>{
  await search.goto();
 await   search.isLoaded();
   await search.searchProduct();
    await search.page.screenshot({path:'screenshots/product.png', fullPage:true})
})