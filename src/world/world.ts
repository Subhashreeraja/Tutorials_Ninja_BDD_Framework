import{Browser,BrowserContext,Page} from "@playwright/test";
import{LoginPage} from "../pages/Loginpage";
import { Searchpage } from "../pages/Searchpage";


export class CustomWorld{
    browser!:Browser;
    context!:BrowserContext;
    page!:Page;


    loginPage!:LoginPage;
    searchpage!:Searchpage;
   // registerPage!:Registerpage;

   
}