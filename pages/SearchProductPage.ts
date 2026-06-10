import {Page,Locator,expect} from '@playwright/test';
import {BasePage} from './BasePage';

export class SearchProductPage extends BasePage{
    readonly searchBox:Locator;
constructor(public page:Page){
    super(page);
    this.searchBox=page.getByRole('textbox', {name:'Search'})
}
  async goto(): Promise<void> {
        await this.navigate('');
    }
    //abstract - fulfilling the contract
    async isLoaded(): Promise<void> {
    }
async searchProduct() :Promise<void> {
  this.searchBox.fill('iphone');
}

}