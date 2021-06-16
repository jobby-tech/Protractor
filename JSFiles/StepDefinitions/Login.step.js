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
const chai_1 = __importDefault(require("chai"));
const Login_Object_1 = require("../PageObjects/Login.Object");
protractor_1.browser.waitForAngularEnabled(false);
let lp = new Login_Object_1.LoginPage();
var expect = chai_1.default.expect;
var Request = require("request");
cucumber_1.Given('Navigate to the {string} Login Page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(string);
}));
cucumber_1.Given('API Testing', function (done) {
    Request.get({
        "headers": { "content-type": "application/json" },
        "url": "https://stgapi.docskiff.ai/datasources/v1/dataSourceFilesStats"
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        console.dir("Body : ******");
        console.dir(JSON.parse(body));
        console.log("Response Code ****:" + response.statusCode);
        expect(response.statusCode).to.equal(401);
        // this below line took half day of research
        done();
    });
});
cucumber_1.Given('Enter the {string} on the User ID Input Box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield lp.EnterUsername().sendKeys(string);
}));
cucumber_1.Given('Enter the {string} on the Password Input Box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield lp.EnterPassword().sendKeys(string);
}));
cucumber_1.When('Click on the Sign in Button as User Role Curator', () => __awaiter(void 0, void 0, void 0, function* () {
    yield lp.ClickLoginButton();
}));
cucumber_1.Then('Verify if the Title {string} of the Page and Heading {string} are displayed', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(lp.PageHeading()), 5000);
    yield protractor_1.browser.getTitle().then(function (text) {
        expect(text).to.equal(string);
    });
    yield lp.PageHeading().getText().then(function (text) {
        expect(text).to.equal(string2);
    });
    yield protractor_1.browser.sleep(3000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uc3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBEZWZpbml0aW9ucy9Mb2dpbi5zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTBDO0FBQzFDLDJDQUF1RTtBQUN2RSxnREFBdUI7QUFFdkIsOERBQXFEO0FBRXJELG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsSUFBSSxFQUFFLEdBQUcsSUFBSSx3QkFBUyxFQUFFLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFJakMsZ0JBQUssQ0FBRSxxQ0FBcUMsRUFBRSxDQUFNLE1BQU0sRUFBQyxFQUFFO0lBRXpELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFHOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsYUFBYSxFQUFDLFVBQVMsSUFBSTtJQUkvQixPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ1YsU0FBUyxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1FBQ2pELEtBQUssRUFBRSxnRUFBZ0U7S0FFdEUsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDM0IsSUFBRyxLQUFLLEVBQUU7WUFDTixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzFELE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0Qyw0Q0FBNEM7UUFDNUMsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyw2Q0FBNkMsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBRWpFLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUU1QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyw4Q0FBOEMsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBRXBFLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUU1QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLGtEQUFrRCxFQUFFLEdBQU8sRUFBRTtJQUVoRSxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBRTlCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsNkVBQTZFLEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFHM0csTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUN6RCxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUV2QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7UUFFL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFFRixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTVCLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==