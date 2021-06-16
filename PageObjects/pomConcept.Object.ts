import { expect } from "chai";
import { element,by,$ } from "protractor";
import { CommonObjFunc } from "./CommonPage/Common.Object";


export class pomLetCode extends CommonObjFunc

{

    private signUpHeaderBtn=element(by.linkText('Sign up'));
    private signUpUserName=element(by.id('name'));
    private signUpEmail=element(by.id('email'));
    private signUPPswd=element(by.name('password'));
    private signAgreeChkbox=element(by.id('agree'));
    private signUPBtn=element(by.buttonText('SIGN UP'));
    private signOutHeaderBtn=element(by.linkText('Sign out'));
    private doubleClickE = element(by.id('click'));

    private toastErrorMesg=$('div.toast-message');

    async clickSignUpHeaderBtn ()
    {
        //return await this.#signUpHeaderBtn.click();  // # denotes private variable
        await this.click(this.signUpHeaderBtn)
    }

    async enterUserName(uname)
    {
        return await this.signUpUserName.sendKeys(uname)
    }

    async enterEmail(uname)
    {
        return await this.signUpEmail.sendKeys(uname)
    }
    
    async enterPassword(uname)
    {
        return await this.signUPPswd.sendKeys(uname)        
    }

    async clickAgreeChkbox()
    {
        return await this.signAgreeChkbox.click()
    }


    async clickFormSignupBtn()
    {
        return await this.signUPBtn.click();
    }

    async isSignoutHeaderDisplayed()
    {
        expect (await this.signOutHeaderBtn.isDisplayed()).to.be.true;
    }


    async isToastMsgDisplayed(msg,usname)
    {

        // expect(await this.#toastErrorMesg.isDisplayed()).to.be.true;
        // expect(await this.#toastErrorMesg.getText()).to.contains(msg+" "+usname);

        //await this.assertText(this.toastErrorMesg,msg)
    }


    async returnElemDoubClick(){
        return await this.mouseDoubleClick(this.doubleClickE);
    }

}