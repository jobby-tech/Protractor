import {Given, Then,When} from 'cucumber';
import {browser,element,by,ExpectedConditions as EC} from 'protractor';
import chai from 'chai'

import {LoginPage} from '../PageObjects/Login.Object'

browser.waitForAngularEnabled(false);
let lp = new LoginPage();
var expect = chai.expect;
var Request = require("request");



Given ('Navigate to the {string} Login Page', async(string)=>{

    await browser.get(string);

    
});

Given('API Testing',function(done){


  
  Request.get({
    "headers": { "content-type": "application/json" },
    "url": "https://stgapi.docskiff.ai/datasources/v1/dataSourceFilesStats"

    }, (error, response, body) => {
      if(error) {
          return console.dir(error);
      }
      console.dir("Body : ******");
      console.dir(JSON.parse(body));

      console.log("Response Code ****:"+response.statusCode)
  expect(response.statusCode).to.equal(401);
      // this below line took half day of research
      done();
  });

});

Given('Enter the {string} on the User ID Input Box', async (string)=> {

    await lp.EnterUsername().sendKeys(string);
    
  });

  Given('Enter the {string} on the Password Input Box', async (string)=> {

    await lp.EnterPassword().sendKeys(string);
    
  });


  When('Click on the Sign in Button as User Role Curator', async()=>{

    await lp.ClickLoginButton();
    
  });


  Then('Verify if the Title {string} of the Page and Heading {string} are displayed', async (string, string2)=> {
    

    await browser.wait(EC.presenceOf(lp.PageHeading()),5000);
    await browser.getTitle().then(function(text)
    {
        expect(text).to.equal(string);        
    })

    await lp.PageHeading().getText().then(function(text)
    {
        expect(text).to.equal(string2);
    })

    await browser.sleep(3000);

  });