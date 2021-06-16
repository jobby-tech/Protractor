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
var _EFipkartClose;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LetCode = void 0;
const protractor_1 = require("protractor");
class LetCode {
    constructor() {
        _EFipkartClose.set(this, void 0); // # - denotes Private
        this.EDropDown = protractor_1.element(protractor_1.by.id('fruits'));
        this.EDropSelect = protractor_1.element(protractor_1.by.cssContainingText('3', '3'));
        this.EWaitSimpleAlert = protractor_1.element(protractor_1.by.id('accept'));
        this.EFlipkartCloseBtn = protractor_1.element(protractor_1.by.buttonText('✕'));
        //this.#EFipkartClose=element(by.addLocator('buttonTextSimple',function()))
    }
    DropDownClick() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.EDropDown), 5000).then(() => {
                return this.EDropDown.click();
            });
        });
    }
    DropSelect() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.EDropSelect), 5000).then(() => {
                return this.EDropSelect.click();
            });
        });
    }
    WaitSimpleAlert() {
        return this.EWaitSimpleAlert;
    }
    WaitFlipkartCloseBtn() {
        return this.EFlipkartCloseBtn;
    }
}
exports.LetCode = LetCode;
_EFipkartClose = new WeakMap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGV0Q29kZS5PYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9MZXRDb2RlLk9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJGO0FBRTNGLE1BQWEsT0FBTztJQWNoQjtRQUxBLGlDQUE0QixDQUFJLHNCQUFzQjtRQU1sRCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBR2pELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUdyRCwyRUFBMkU7SUFHL0UsQ0FBQztJQUVLLGFBQWE7O1lBRWYsT0FBTyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBRS9FLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtJQUVLLFVBQVU7O1lBRVosT0FBTyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBRWpGLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtJQUVELGVBQWU7UUFFWCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBRUQsb0JBQW9CO1FBRWhCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDLENBQUM7Q0FRSjtBQTVERCwwQkE0REMifQ==