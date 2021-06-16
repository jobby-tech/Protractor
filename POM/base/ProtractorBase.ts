import { expect } from "chai";
import { browser, element, ElementFinder, ProtractorExpectedConditions } from "protractor";
import { protractor } from "protractor/built/ptor";


export class ProtractorBase
{

    private EC: ProtractorExpectedConditions = browser.ExpectedConditions;
    private timeout = 30000;


   


    private async visibilityOf(element:ElementFinder){

        await browser.wait(this.EC.visibilityOf(element),this.timeout,"Element is Not Visible");
    }

   


     /**
     * @description - This Function is used to do Click Action
     * @param element - The element on which click action is to be performed
     */
    public async click(element:ElementFinder){
        await browser.wait(this.EC.elementToBeClickable(element),this.timeout,"Failed to Click the Element");        
        await element.click();
    }

    /**
     * @description - This Function is to input data into the TextBoxes
     * @param element  - The element into which the data has to be passed
     * @param testData - The data to be passed
     */


    public async type(element:ElementFinder,testData:string){
        await this.visibilityOf(element);
        await element.sendKeys(testData);
    }

    /**
     * @description - This Function is to Clear the Existing Data in the TextBoxes and input the data
     * @param element - The element into which the data has to be passed
     * @param testData - The data to be passed
     */

    public async ClearAndType(element:ElementFinder,testData:string){
        await this.visibilityOf(element);
        await element.clear();
        await element.sendKeys(testData);

    }


    public async assertText(element:ElementFinder,expectedText:string){
        await this.visibilityOf(element);
        expect(await element.isDisplayed()).to.be.true;
        let actualText = await element.getText();        
        expect(actualText.trim()).to.be(expectedText)                  //trim used to remove the extra spaces
        

    }


    public async assertTrue(element:ElementFinder){
        await this.visibilityOf(element);
        expect(await element.isDisplayed()).to.be.true;
        
    }


    public async assertFalse(element:ElementFinder){
        await this.visibilityOf(element);
        expect(await element.isDisplayed()).to.be.false;
        
    }


    private async isAlertPresent(){
        await browser.wait(this.EC.alertIsPresent(),this.timeout,"Alert is Not Present");
    }

    public async acceptAlert(){

        await this.isAlertPresent();
        await (await browser.switchTo().alert()).accept();
    }

    public async dismissAlert(){
        await this.isAlertPresent();
        await (await browser.switchTo().alert()).dismiss();
    }

    public async sendAlertData(testData:string){
        await this.isAlertPresent();
        await (await browser.switchTo().alert()).sendKeys(testData);
    }

    public async getAlertData():Promise<string>{
        await this.isAlertPresent();
        let alertText = await (await browser.switchTo().alert()).getText();
        return alertText;
    }

    public async switchToFrame(frameNumber:number){
        
        await browser.switchTo().frame(frameNumber);

    }

    public async typeAndTab(element:ElementFinder,testData:string){

        await this.visibilityOf(element);
        await this.ClearAndType(element,testData);
        await element.sendKeys(protractor.Key.TAB);
    }

    public async typeAndEnter(element:ElementFinder,testData:string){

        let capability= await browser.getCapabilities();
        let platform= capability.get('platform')

        await this.visibilityOf(element);
        await this.ClearAndType(element,testData);

        if(platform==='Mac OS X'){
            await element.sendKeys(protractor.Key.RETURN);
        }
        else{
        await element.sendKeys(protractor.Key.ENTER);
        }
    }

    public async mouseHoverAndClick(element:ElementFinder){

        await this.visibilityOf(element);
         await browser.actions()
         .mouseMove(await element.getWebElement())
         .click().perform();

    }


    public async mouseMoveToElement(element:ElementFinder){

        await this.visibilityOf(element);
        await browser.actions()
        .mouseMove(await element.getWebElement())
        .perform();

    }

    
    public async mouseDoubleClick(element:ElementFinder){

        await this.visibilityOf(element);
        await browser.actions().doubleClick(element).perform();

    }


}