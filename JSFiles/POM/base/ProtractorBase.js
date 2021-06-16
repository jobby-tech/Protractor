"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtractorBase = void 0;
const chai_1 = require("chai");
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
class ProtractorBase {
    constructor() {
        this.EC = protractor_1.browser.ExpectedConditions;
        this.timeout = 30000;
    }
    visibilityOf(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.EC.visibilityOf(element), this.timeout, "Element is Not Visible");
        });
    }
    /**
    * @description - This Function is used to do Click Action
    * @param element - The element on which click action is to be performed
    */
    click(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.EC.elementToBeClickable(element), this.timeout, "Failed to Click the Element");
            yield element.click();
        });
    }
    /**
     * @description - This Function is to input data into the TextBoxes
     * @param element  - The element into which the data has to be passed
     * @param testData - The data to be passed
     */
    type(element, testData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield element.sendKeys(testData);
        });
    }
    /**
     * @description - This Function is to Clear the Existing Data in the TextBoxes and input the data
     * @param element - The element into which the data has to be passed
     * @param testData - The data to be passed
     */
    ClearAndType(element, testData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield element.clear();
            yield element.sendKeys(testData);
        });
    }
    assertText(element, expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            chai_1.expect(yield element.isDisplayed()).to.be.true;
            let actualText = yield element.getText();
            chai_1.expect(actualText.trim()).to.be(expectedText); //trim used to remove the extra spaces
        });
    }
    assertTrue(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            chai_1.expect(yield element.isDisplayed()).to.be.true;
        });
    }
    assertFalse(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            chai_1.expect(yield element.isDisplayed()).to.be.false;
        });
    }
    isAlertPresent() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.EC.alertIsPresent(), this.timeout, "Alert is Not Present");
        });
    }
    acceptAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.isAlertPresent();
            yield (yield protractor_1.browser.switchTo().alert()).accept();
        });
    }
    dismissAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.isAlertPresent();
            yield (yield protractor_1.browser.switchTo().alert()).dismiss();
        });
    }
    sendAlertData(testData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.isAlertPresent();
            yield (yield protractor_1.browser.switchTo().alert()).sendKeys(testData);
        });
    }
    getAlertData() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.isAlertPresent();
            let alertText = yield (yield protractor_1.browser.switchTo().alert()).getText();
            return alertText;
        });
    }
    switchToFrame(frameNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(frameNumber);
        });
    }
    typeAndTab(element, testData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield this.ClearAndType(element, testData);
            yield element.sendKeys(ptor_1.protractor.Key.TAB);
        });
    }
    typeAndEnter(element, testData) {
        return __awaiter(this, void 0, void 0, function* () {
            let capability = yield protractor_1.browser.getCapabilities();
            let platform = capability.get('platform');
            yield this.visibilityOf(element);
            yield this.ClearAndType(element, testData);
            if (platform === 'Mac OS X') {
                yield element.sendKeys(ptor_1.protractor.Key.RETURN);
            }
            else {
                yield element.sendKeys(ptor_1.protractor.Key.ENTER);
            }
        });
    }
    mouseHoverAndClick(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield protractor_1.browser.actions()
                .mouseMove(yield element.getWebElement())
                .click().perform();
        });
    }
    mouseMoveToElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield protractor_1.browser.actions()
                .mouseMove(yield element.getWebElement())
                .perform();
        });
    }
    mouseDoubleClick(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield protractor_1.browser.actions().doubleClick(element).perform();
        });
    }
}
exports.ProtractorBase = ProtractorBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdHJhY3RvckJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QT00vYmFzZS9Qcm90cmFjdG9yQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsMkNBQTJGO0FBQzNGLGdEQUFtRDtBQUduRCxNQUFhLGNBQWM7SUFBM0I7UUFHWSxPQUFFLEdBQWlDLG9CQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDOUQsWUFBTyxHQUFHLEtBQUssQ0FBQztJQTRKNUIsQ0FBQztJQXRKaUIsWUFBWSxDQUFDLE9BQXFCOztZQUU1QyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM1RixDQUFDO0tBQUE7SUFLQTs7O01BR0U7SUFDVSxLQUFLLENBQUMsT0FBcUI7O1lBQ3BDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLENBQUMsT0FBTyxFQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDckcsTUFBTSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsQ0FBQztLQUFBO0lBRUQ7Ozs7T0FJRztJQUdVLElBQUksQ0FBQyxPQUFxQixFQUFDLFFBQWU7O1lBQ25ELE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBRUQ7Ozs7T0FJRztJQUVVLFlBQVksQ0FBQyxPQUFxQixFQUFDLFFBQWU7O1lBQzNELE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxNQUFNLE9BQU8sQ0FBQyxL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