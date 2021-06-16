import { Given, Then } from "cucumber";
import { browser, by, element, ExpectedConditions, protractor } from "protractor";
import { pomLetCode } from "../PageObjects/pomConcept.Object";
import testData from "../TestData/userInfo.json";

let pc = new pomLetCode;


 Given('Launch the URL From JSON', async() =>{

   await browser.get(testData.signup.url);      //Passing Test Data from JSON FIle
    
  });


  Given('Launch the URL from the Config File', async() =>{

    await browser.get(browser.params.env);      //Passing URL from Config FIle Params for Multi Environment
    await browser.sleep(3000);
   });






  Given('User Clicks on the SignUp Button',async () =>{

   await pc.clickSignUpHeaderBtn();
    
  });


  Given('User Enters {string} {string} {string} in the UserName Inputbox', async(string,string1,string2)=> {

   await pc.enterUserName(string);
   await pc.enterEmail(string1);
   await pc.enterPassword(string2);
   

   await pc.clickAgreeChkbox();

  
    await browser.sleep(3000);
  });


  Given('User Clicks on the Signup Button in the Form',async () =>{

    await pc.clickFormSignupBtn();

    //await browser.sleep(9000);

  });

  Then('Verify if SignOut Button is available',async()=>{

    await browser.sleep(6000);
     await pc.isSignoutHeaderDisplayed(); 
     //await browser.sleep(3000);

  });



  Then('Verify if Toast Message is Displayed as {string} {string}',async(string,string1)=>{
    await browser.sleep(2000);
    await pc.isToastMsgDisplayed(string,string1);
    await browser.sleep(3000);
  });




  Given('Launch the Enter and Hit URL',async()=>{

    await browser.get('https://letcode.in/edit');
  
    let inputE= element(by.id('join'))
    await  browser.wait(ExpectedConditions.visibilityOf(inputE),6000,"Element is Not Visible");
    await browser.sleep(3000);
    
        await inputE.clear();
        await browser.sleep(3000);
          // await inputE.sendKeys("testData"); 
          // await browser.sleep(3000);
          await inputE.sendKeys("testData",protractor.Key.ENTER)
          await browser.sleep(6000);
      
  
  
    });


    Given('Launch the URL to Double Click',async()=>{

      await browser.get('https://doubleclicktest.com/');
      await browser.sleep(3000);      
      await pc.returnElemDoubClick();
      await browser.sleep(6000);

    })