const { browser, element, by } = require("protractor");



browser.waitForAngularEnabled=false;


browser.get('www.google.com');

try{
element(by.id('fullName')).sendKeys();
element(by.íd('join')).sendKeys();

}

catch(err){

}
