import { ElementFinder, element, by, browser, ExpectedConditions as EC } from 'protractor';

export class LetCode {

    private EDropDown: ElementFinder;
    private EDropSelect: ElementFinder;

    private EWaitSimpleAlert: ElementFinder;

    private EFlipkartCloseBtn: ElementFinder;

    #EFipkartClose:ElementFinder    // # - denotes Private

   


    constructor() {
        this.EDropDown = element(by.id('fruits'));
        this.EDropSelect = element(by.cssContainingText('3', '3'));
        this.EWaitSimpleAlert = element(by.id('accept'));


        this.EFlipkartCloseBtn = element(by.buttonText('✕'));


        //this.#EFipkartClose=element(by.addLocator('buttonTextSimple',function()))

        
    }

    async DropDownClick() {

        return await browser.wait(EC.elementToBeClickable(this.EDropDown), 5000).then(() => {

            return this.EDropDown.click();
        })
    }

    async DropSelect() {

        return await browser.wait(EC.elementToBeClickable(this.EDropSelect), 5000).then(() => {

            return this.EDropSelect.click();
        })
    }

    WaitSimpleAlert(): ElementFinder {

        return this.EWaitSimpleAlert;
    }

    WaitFlipkartCloseBtn(): ElementFinder {

        return this.EFlipkartCloseBtn;
    }


    


    

}