import {test as base} from '@playwright/test';
import{LoginPage} from '../pages/LoginPage'
import {RegistrationPage} from '../pages/RegistrationPage';
import { SearchProductPage } from '../pages/SearchProductPage';

type customFixtures ={
    loggedInPage:LoginPage;
    register:RegistrationPage;
    search:SearchProductPage;
}

export const test = base.extend<customFixtures>({
  loggedInPage: async({page},use)=>{
    const loginPage=new LoginPage(page);
          await use(loginPage);
  },
  
  register: async({page},use)=>{
    const registrationPage=new RegistrationPage(page);
          await use(registrationPage);
},
search: async({page},use)=>{
    const searchProductPage=new SearchProductPage(page);
          await use(searchProductPage);
},
});