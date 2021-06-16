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
const LetCode_Object_1 = require("../PageObjects/LetCode.Object");
const ptor_1 = require("protractor/built/ptor");
protractor_1.browser.waitForAngularEnabled(true);
var expect = chai_1.default.expect;
var Request = require("request");
let lp = new LetCode_Object_1.LetCode();
cucumber_1.Given('User Launches the Drop Down URL SELECT TAG', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.get('https://letcode.in/dropdowns');
    //await $('#fruits').click();
    yield protractor_1.browser.sleep(3000);
    yield protractor_1.element(protractor_1.by.cssContainingText('option', 'Apple')).click(); // Tag Name and String to be identified
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Given('User Launches the Drop Down URL', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.get('https://semantic-ui.com/modules/dropdown.html');
    yield protractor_1.element(protractor_1.by.xpath("(//div[contains(@class,'ui selection')])[1]")).click();
    yield protractor_1.browser.sleep(9000);
    yield protractor_1.element(protractor_1.by.cssContainingText('div.item', 'Female')).click();
    yield protractor_1.browser.sleep(9000);
}));
cucumber_1.Given('User Launches the Wait URL', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://letcode.in/waits');
    yield lp.WaitSimpleAlert().click();
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.alertIsPresent(), 5000);
    (yield protractor_1.browser.switchTo().alert()).accept();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Given('User Launches the Element Wait URL', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://www.flipkart.com/');
    yield lp.WaitFlipkartCloseBtn().click();
    expect(yield protractor_1.browser.getTitle()).contains("BestOffers!");
}));
cucumber_1.Given('User Launches the Broken URL', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://www.google.com');
    (yield protractor_1.browser.switchTo().activeElement()).sendKeys('cricket', ptor_1.protractor.Key.ENTER);
    yield protractor_1.browser.sleep(4000);
    let allElement = protractor_1.element.all(protractor_1.by.xpath("//*[contains(text(),'cricket') or contains(text(),'Cricket')]"));
    let total = yield allElement.count();
    console.log(total);
}));
cucumber_1.Given('User Launches the Element Array URL', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://letcode.in/radio');
    let allLablElements = protractor_1.element.all(protractor_1.by.tagName("a"));
    allLablElements.each((ele, i) => __awaiter(void 0, void 0, void 0, function* () {
        let text = yield ele.getText();
        console.log(text);
    }));
}));
cucumber_1.Given('Launch the Erail Map URL', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.manage().timeouts().implicitlyWait(90000);
    yield protractor_1.browser.get('https://erail.in/trains-between-stations/new-delhi-NDLS/mumbai-central-BCT');
    yield protractor_1.browser.sleep(90000);
    yield protractor_1.$('#chkSelectDateOnly').click();
    yield protractor_1.browser.sleep(5000);
    let erailTableRows = protractor_1.$$("#divTrainsList .TrainList tr"); //element.all(by.css)
    yield erailTableRows.map((ele, index) => __awaiter(void 0, void 0, void 0, function* () {
        let firstData = ele.$$('td').get(0);
        console.log(yield firstData.getText());
    }));
}));
cucumber_1.Given('Launch the Exception Handling URL', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.get('https://letcode.in/edit');
    try {
        protractor_1.element(protractor_1.by.xpath('//input[@id="fullame"]')).sendKeys("Input1");
    }
    catch (err) {
        console.log(err);
    }
    protractor_1.element(protractor_1.by.xpath("//input[@id='join']")).sendKeys("Input1");
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Given('Launch the Drag and Drop URL', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.get('https://jqueryui.com/');
    yield protractor_1.element(protractor_1.by.linkText('Draggable')).click();
    yield protractor_1.browser.switchTo().frame(0); //-> Identify Fame by Index
    // let iFrame= element(by.className('demo-frame'));
    // await browser.switchTo().frame(iFrame);
    let sourcePos = protractor_1.$('#draggable');
    let locX = (yield sourcePos.getLocation()).x;
    let locY = (yield sourcePos.getLocation()).y;
    yield protractor_1.browser.actions().dragAndDrop(yield sourcePos.getWebElement(), { x: locX + 40, y: locY + 30 }).perform();
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Given('Launch iFrame URL', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://letcode.in/frame');
    let iFrameE = yield protractor_1.element(protractor_1.by.id('google_esf'));
    //await browser.switchTo().frame(iFrameE.getWebElement());
    yield protractor_1.browser.switchTo().frame(iFrameE); // -> Error Infinite Loop
    //await browser.switchTo().frame(0);  // -> By Index
    //await browser.switchTo().frame('google_esf');   // -> By ID
    //await browser.switchTo().frame('google_es');    // -> By Name
    yield protractor_1.browser.switchTo().defaultContent(); // -> To switch back to the Home content
    //await element(by.linkText('Log in')).click();
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Given('Launch the Element All URL', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://letcode.in/dropdowns');
    let allLabels = protractor_1.element.all(protractor_1.by.tagName('option'));
    allLabels.each((elem, i) => __awaiter(void 0, void 0, void 0, function* () {
        let text = yield elem.getText();
        console.log(text, ' ' + i);
        protractor_1.browser.sleep(3000);
    }));
    expect(yield allLabels.count()).to.equal(52); //greaterThan(53);//  equal(52);
}));
cucumber_1.Given('Launch the Checkbox Validation URL', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://letcode.in/radio');
    let checkBoxE = protractor_1.element(protractor_1.by.xpath("(//label[@class='checkbox'])[1]"));
    yield protractor_1.browser.sleep(3000);
    yield checkBoxE.click();
    //expect(checkBoxE.isN());
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Given('Launch the URL for GET FIRST LAST Function', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://letcode.in/radio');
    let getAllRadio = protractor_1.element.all(protractor_1.by.tagName('label'));
    let totalRadio = yield getAllRadio.count();
    console.log(totalRadio);
    let firstRadioBtn = getAllRadio.first();
    console.log(yield firstRadioBtn.getText());
    console.log(yield firstRadioBtn.getTagName());
    expect(yield firstRadioBtn.getTagName()).to.contains('label');
    let firstRadio = getAllRadio.get(totalRadio - 1);
    //let firstRadio =  getAllRadio.get(-1);   -> Negative values will be wrapped from the last
    console.log(yield firstRadio.getText());
    //expect( await firstRadio.getText()).to.equals('Select any one');
    // expect( await firstRadio.getText()).to.contains('Select any');
}));
cucumber_1.Given('Launch the URL for 3rd dropdown', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://letcode.in/dropdowns');
    let allDropD = protractor_1.element.all(protractor_1.by.xpath("//select[@id='fruits']/option"));
    let thirdDrop = allDropD.get(3);
    console.log(yield thirdDrop.getText());
}));
cucumber_1.Given('Launch the Letcode Map Table URL', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://letcode.in/table');
    let tableRows = protractor_1.element.all(protractor_1.by.xpath("//table[@id='simpletable']//tbody//tr"));
    //console.log(await tableRows.getText());
    // let tableRows= $$('#simpletable')
    //console.log(await tableRows.getText());
    let emailIDs = yield tableRows.map((ele, i) => __awaiter(void 0, void 0, void 0, function* () {
        //let trTags = element.all(by.tagName('tr'));
        // let firstD = ele.$$('td').count();
        // console.log(await firstD);
        let firstD = ele.$$('td').get(2);
        //console.log(await firstD.getText());
        return {
            "EmailID": yield firstD.getText(),
            "Index": i
        };
    }));
    console.log(emailIDs);
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Given('Launch the Not Selected Radio / Checkbox URL', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://letcode.in/radio');
    let allRadio = protractor_1.element.all(protractor_1.by.xpath("//label[@class='checkbox']"));
    let totalRadio = yield allRadio.count();
    //let allChkBox = await allRows.get(3)
    console.log(totalRadio);
    let unCheckRadio = allRadio.filter((ele, i) => __awaiter(void 0, void 0, void 0, function* () {
        return (yield ele.isSelected()) == true;
    }));
    unCheckRadio.each((ele) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(yield ele.isSelected());
    }));
}));
cucumber_1.Given('Launch the Element All URL  ForEach', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://letcode.in/dropdowns');
    let allLabels = protractor_1.element.all(protractor_1.by.tagName('option'));
    (yield allLabels).forEach((ele, i) => __awaiter(void 0, void 0, void 0, function* () {
        let text = yield ele.getText();
        console.log(text, ' ' + i);
        protractor_1.browser.sleep(3000);
    }));
    expect(yield allLabels.count()).to.equal(52); //greaterThan(53);//  equal(52);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGV0Q29kZS5zdGVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcERlZmluaXRpb25zL0xldENvZGUuc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBdUc7QUFDdkcsZ0RBQXVCO0FBRXZCLGtFQUF1RDtBQUN2RCxnREFBbUQ7QUFFbkQsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQyxJQUFJLEVBQUUsR0FBRyxJQUFJLHdCQUFPLEVBQUUsQ0FBQztBQUd2QixnQkFBSyxDQUFDLDRDQUE0QyxFQUFFLEdBQVMsRUFBRTtJQUU3RCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBRTVDLDZCQUE2QjtJQUM3QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBRyx1Q0FBdUM7SUFDeEcsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBSUgsZ0JBQUssQ0FBQyxpQ0FBaUMsRUFBRSxHQUFTLEVBQUU7SUFFbEQsb0JBQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztJQUM3RCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0UsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMs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