import { Locator, expect, Page } from "@playwright/test"; 
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage{
    readonly feature:Locator;
   readonly myAccountLink: Locator;
    readonly loginLink:Locator;
    readonly returningCustomer:Locator;
    readonly emailID:Locator;
    readonly password:Locator;
    readonly loginBtn:Locator;
   

    constructor(page:Page){
     super(page)
     this.feature=page.getByRole('heading', {name:'Featured'});
      this.myAccountLink = page.getByTitle('My Account');
    this.loginLink=page.getByRole('link', {name:'Login'});
     this.returningCustomer=page.getByText('Returning Customer');
  this.emailID=page.locator('#input-email');
  this.password=page.locator('#input-password');
  this.loginBtn=page.getByRole('button', {name:'Login'});

    }

   async goto(): Promise<void> {
           await this.navigate('');
       }
   
       //abstract - fulfilling the contract
       async isLoaded(): Promise<void> {
        await expect(this.feature).toBeVisible();
           } 

           async login(email: string, passWord: string): Promise<void> {
       await this.myAccountLink.click();
       await this.loginLink.click();
       //await expect(this.returningCustomer).toBeVisible();
       await this.emailID.fill(email);
       await this.password.fill(passWord);
       await this.loginBtn.click();

       
    }

}