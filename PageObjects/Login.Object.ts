import {ElementFinder, element , by, browser,ExpectedConditions as EC} from 'protractor';
import { CommonObjFunc } from './CommonPage/Common.Object';

export class LoginPage extends CommonObjFunc

{

    private EUsernameTextBox:ElementFinder;
    private EPasswordTextBox:ElementFinder;
    private ELoginButton:ElementFinder;
    private EPageHeading:ElementFinder;

    constructor()
    {
        super();
        this.EUsernameTextBox=element(by.xpath("//input[@placeholder='User ID']"));
        this.EPasswordTextBox=element(by.xpath("//input[@placeholder='Password']"))
        this.ELoginButton=element(by.xpath("//input[@value='Login']"));
        this.EPageHeading=element(by.xpath("(//app-header/div/a)[1]"));
    }

    EnterUsername():ElementFinder{
        return this.EUsernameTextBox;
    }

    EnterPassword():ElementFinder{
        return this.EPasswordTextBox;
    }

    PageHeading():ElementFinder{

        return this.EPageHeading;
    }

    async ClickLoginButton()
    {
        return await browser.wait(EC.elementToBeClickable(this.ELoginButton),5000).then(()=>{

            return this.ELoginButton.click();
        })
    }



}