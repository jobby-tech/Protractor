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
exports.pomLetCode = void 0;
const chai_1 = require("chai");
const protractor_1 = require("protractor");
const Common_Object_1 = require("./CommonPage/Common.Object");
class pomLetCode extends Common_Object_1.CommonObjFunc {
    constructor() {
        super(...arguments);
        this.signUpHeaderBtn = protractor_1.element(protractor_1.by.linkText('Sign up'));
        this.signUpUserName = protractor_1.element(protractor_1.by.id('name'));
        this.signUpEmail = protractor_1.element(protractor_1.by.id('email'));
        this.signUPPswd = protractor_1.element(protractor_1.by.name('password'));
        this.signAgreeChkbox = protractor_1.element(protractor_1.by.id('agree'));
        this.signUPBtn = protractor_1.element(protractor_1.by.buttonText('SIGN UP'));
        this.signOutHeaderBtn = protractor_1.element(protractor_1.by.linkText('Sign out'));
        this.doubleClickE = protractor_1.element(protractor_1.by.id('click'));
        this.toastErrorMesg = protractor_1.$('div.toast-message');
    }
    clickSignUpHeaderBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            //return await this.#signUpHeaderBtn.click();  // # denotes private variable
            yield this.click(this.signUpHeaderBtn);
        });
    }
    enterUserName(uname) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.signUpUserName.sendKeys(uname);
        });
    }
    enterEmail(uname) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.signUpEmail.sendKeys(uname);
        });
    }
    enterPassword(uname) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.signUPPswd.sendKeys(uname);
        });
    }
    clickAgreeChkbox() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.signAgreeChkbox.click();
        });
    }
    clickFormSignupBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.signUPBtn.click();
        });
    }
    isSignoutHeaderDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.expect(yield this.signOutHeaderBtn.isDisplayed()).to.be.true;
        });
    }
    isToastMsgDisplayed(msg, usname) {
        return __awaiter(this, void 0, void 0, function* () {
            // expect(await this.#toastErrorMesg.isDisplayed()).to.be.true;
            // expect(await this.#toastErrorMesg.getText()).to.contains(msg+" "+usname);
            //await this.assertText(this.toastErrorMesg,msg)
        });
    }
    returnElemDoubClick() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.mouseDoubleClick(this.doubleClickE);
        });
    }
}
exports.pomLetCode = pomLetCode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9tQ29uY2VwdC5PYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9wb21Db25jZXB0Lk9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsMkNBQTBDO0FBQzFDLDhEQUEyRDtBQUczRCxNQUFhLFVBQVcsU0FBUSw2QkFBYTtJQUE3Qzs7UUFJWSxvQkFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2hELG1CQUFjLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdEMsZ0JBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQyxlQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsb0JBQWUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN4QyxjQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDNUMscUJBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsaUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUV2QyxtQkFBYyxHQUFDLGNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBc0RsRCxDQUFDO0lBcERTLG9CQUFvQjs7WUFFdEIsNEVBQTRFO1lBQzVFLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDMUMsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLEtBQUs7O1lBRXJCLE9BQU8sTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNwRCxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsS0FBSzs7WUFFbEIsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2pELENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxLQUFLOztZQUVyQixPQUFPLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEQsQ0FBQztLQUFBO0lBRUssZ0JBQWdCOztZQUVsQixPQUFPLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUM3QyxDQUFDO0tBQUE7SUFHSyxrQkFBa0I7O1lBRXBCLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVLLHdCQUF3Qjs7WUFFMUIsYUFBTSxDQUFFLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDbEUsQ0FBQztLQUFBO0lBR0ssbUJBQW1CLENBQUMsR0FBRyxFQUFDLE1BQU07O1lBR2hDLCtEQUErRDtZQUMvRCw0RUFBNEU7WUFFNUUsZ0RBQWdEO1FBQ3BELENBQUM7S0FBQTtJQUdLLG1CQUFtQjs7WUFDckIsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUQsQ0FBQztLQUFBO0NBRUo7QUFuRUQsZ0NBbUVDIn0=