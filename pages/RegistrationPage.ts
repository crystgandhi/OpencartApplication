import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegistrationPage extends BasePage {
    readonly feature:Locator;
    readonly myAccountLink: Locator;
    readonly registerLink:Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly emailID: Locator;
    readonly telePhone: Locator;
    readonly password:Locator;
    readonly confirmPassword:Locator;
    readonly radioBtn:Locator;
    readonly checkBox:Locator;
    readonly continueBtn:Locator;

    constructor(page: Page) {
        super(page);
        this.feature=page.getByRole('heading', {name:'Featured'});
        this.myAccountLink = page.getByTitle('My Account');
        this.registerLink=page.getByRole('link', {name:'Register'});
        this.firstName = page.locator('#input-firstname');
        this.lastName = page.locator('#input-lastname');
        this.emailID=page.locator('#input-email');
        this.telePhone=page.locator('#input-telephone');
        this.password=page.locator('#input-password');
        this.confirmPassword=page.locator('#input-confirm');
        this.radioBtn=page.getByRole('radio', {name:'Yes'});
        this.checkBox=page.getByRole('checkbox')
        this.continueBtn=page.getByRole('button', {name:'Continue'});
    }

    async goto(): Promise<void> {
        await this.navigate('');
    }

    //abstract - fulfilling the contract
    async isLoaded(): Promise<void> {
       await expect(this.feature).toBeVisible();
        }
    async register(firstname:string, lastname:string, email: string, telephone:string, passWord: string, confirmpassword:string): Promise<void> {
       await this.myAccountLink.click();
       await this.registerLink.click();
        await this.fill(this.firstName, firstname);
        await this.fill(this.lastName, lastname);
         await this.fill(this.emailID, email);
         await this.fill(this.telePhone, telephone);
         await this.fill(this.password, passWord);
         await this.fill(this.confirmPassword, confirmpassword);
         await this.radioBtn.click();
         await this.checkBox.check();
        await this.continueBtn.click();
    }

}