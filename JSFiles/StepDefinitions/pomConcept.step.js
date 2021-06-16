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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const pomConcept_Object_1 = require("../PageObjects/pomConcept.Object");
const userInfo_json_1 = __importDefault(require("../TestData/userInfo.json"));
let pc = new pomConcept_Object_1.pomLetCode;
cucumber_1.Given('Launch the URL From JSON', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(userInfo_json_1.default.signup.url); //Passing Test Data from JSON FIle
}));
cucumber_1.Given('Launch the URL from the Config File', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(protractor_1.browser.params.env); //Passing URL from Config FIle Params for Multi Environment
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Given('User Clicks on the SignUp Button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield pc.clickSignUpHeaderBtn();
}));
cucumber_1.Given('User Enters {string} {string} {string} in the UserName Inputbox', (string, string1, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield pc.enterUserName(string);
    yield pc.enterEmail(string1);
    yield pc.enterPassword(string2);
    yield pc.clickAgreeChkbox();
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Given('User Clicks on the Signup Button in the Form', () => __awaiter(void 0, void 0, void 0, function* () {
    yield pc.clickFormSignupBtn();
    //await browser.sleep(9000);
}));
cucumber_1.Then('Verify if SignOut Button is available', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(6000);
    yield pc.isSignoutHeaderDisplayed();
    //await browser.sleep(3000);
}));
cucumber_1.Then('Verify if Toast Message is Displayed as {string} {string}', (string, string1) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield pc.isToastMsgDisplayed(string, string1);
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Given('Launch the Enter and Hit URL', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://letcode.in/edit');
    let inputE = protractor_1.element(protractor_1.by.id('join'));
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(inputE), 6000, "Element is Not Visible");
    yield protractor_1.browser.sleep(3000);
    yield inputE.clear();
    yield protractor_1.browser.sleep(3000);
    // await inputE.sendKeys("testData"); 
    // await browser.sleep(3000);
    yield inputE.sendKeys("testData", protractor_1.protractor.Key.ENTER);
    yield protractor_1.browser.sleep(6000);
}));
cucumber_1.Given('Launch the URL to Double Click', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://doubleclicktest.com/');
    yield protractor_1.browser.sleep(3000);
    yield pc.returnElemDoubClick();
    yield protractor_1.browser.sleep(6000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9tQ29uY2VwdC5zdGVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcERlZmluaXRpb25zL3BvbUNvbmNlcHQuc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2QywyQ0FBa0Y7QUFDbEYsd0VBQThEO0FBQzlELDhFQUFpRDtBQUVqRCxJQUFJLEVBQUUsR0FBRyxJQUFJLDhCQUFVLENBQUM7QUFHdkIsZ0JBQUssQ0FBQywwQkFBMEIsRUFBRSxHQUFRLEVBQUU7SUFFMUMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFNLGtDQUFrQztBQUVoRixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZ0JBQUssQ0FBQyxxQ0FBcUMsRUFBRSxHQUFRLEVBQUU7SUFFckQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFNLDJEQUEyRDtJQUN2RyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFPSixnQkFBSyxDQUFDLGtDQUFrQyxFQUFDLEdBQVMsRUFBRTtJQUVuRCxNQUFNLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBRWpDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxnQkFBSyxDQUFDLGlFQUFpRSxFQUFFLENBQU0sTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsRUFBRTtJQUV2RyxNQUFNLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLE1BQU0sRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUdoQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBRzNCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGdCQUFLLENBQUMsOENBQThDLEVBQUMsR0FBUyxFQUFFO0lBRTlELE1BQU0sRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFFOUIsNEJBQTRCO0FBRTlCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsdUNBQXVDLEVBQUMsR0FBTyxFQUFFO0lBRXBELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsTUFBTSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNwQyw0QkFBNEI7QUFFL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQywyREFBMkQsRUFBQyxDQUFNLE1BQU0sRUFBQyxPQUFPLEVBQUMsRUFBRTtJQUN0RixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFLSCxnQkFBSyxDQUFDLDhCQUE4QixFQUFDLEdBQU8sRUFBRTtJQUU1QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFFN0MsSUFBSSxNQUFNLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDbEMsTUFBTyxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0YsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV0QixNQUFNLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLHNDQUFzQztJQUN0Qyw2QkFBNkI7SUFDN0IsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0RCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBSWhDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxnQkFBSyxDQUFDLGdDQUFnQyxFQUFDLEdBQU8sRUFBRTtJQUU5QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDbEQsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9