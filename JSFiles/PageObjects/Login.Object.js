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
exports.LoginPage = void 0;
const protractor_1 = require("protractor");
const Common_Object_1 = require("./CommonPage/Common.Object");
class LoginPage extends Common_Object_1.CommonObjFunc {
    constructor() {
        super();
        this.EUsernameTextBox = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='User ID']"));
        this.EPasswordTextBox = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='Password']"));
        this.ELoginButton = protractor_1.element(protractor_1.by.xpath("//input[@value='Login']"));
        this.EPageHeading = protractor_1.element(protractor_1.by.xpath("(//app-header/div/a)[1]"));
    }
    EnterUsername() {
        return this.EUsernameTextBox;
    }
    EnterPassword() {
        return this.EPasswordTextBox;
    }
    PageHeading() {
        return this.EPageHeading;
    }
    ClickLoginButton() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.ELoginButton), 5000).then(() => {
                return this.ELoginButton.click();
            });
        });
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdHMvTG9naW4uT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF5RjtBQUN6Riw4REFBMkQ7QUFFM0QsTUFBYSxTQUFVLFNBQVEsNkJBQWE7SUFTeEM7UUFFSSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFBO1FBQzNFLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLENBQUM7SUFFRCxXQUFXO1FBRVAsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFFSyxnQkFBZ0I7O1lBRWxCLE9BQU8sTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFO2dCQUVoRixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7Q0FJSjtBQXpDRCw4QkF5Q0MifQ==