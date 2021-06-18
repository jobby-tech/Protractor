import { Given, Then, When } from 'cucumber';
import { browser, element, by, ExpectedConditions as EC, $$, $, ExpectedConditions } from 'protractor';
import chai from 'chai'

import { LetCode } from '../PageObjects/LetCode.Object'
import { protractor } from 'protractor/built/ptor';

browser.waitForAngularEnabled(true);
var expect = chai.expect;
var Request = require("request");
let lp = new LetCode();


Given('User Launches the Drop Down URL SELECT TAG', async () => {

  browser.get('https://letcode.in/dropdowns');

  //await $('#fruits').click();
  await browser.sleep(3000);
  await element(by.cssContainingText('option','Apple')).click();   // Tag Name and String to be identified
  await browser.sleep(3000);
});



Given('User Launches the Drop Down URL', async () => {

  browser.get('https://semantic-ui.com/modules/dropdown.html');
  await element(by.xpath("(//div[contains(@class,'ui selection')])[1]")).click();
  await browser.sleep(9000);
  await element(by.cssContainingText('div.item','Female')).click();
  await browser.sleep(9000);
});




Given('User Launches the Wait URL', async () => {

  await browser.get('https://letcode.in/waits');
  await lp.WaitSimpleAlert().click();
  await browser.wait(EC.alertIsPresent(), 5000);
  (await browser.switchTo().alert()).accept()
  await browser.sleep(5000);
});


Given('User Launches the Element Wait URL', async () => {

  await browser.get('https://www.flipkart.com/');
  await lp.WaitFlipkartCloseBtn().click();
  expect(await browser.getTitle()).contains("BestOffers!");
});


Given('User Launches the Broken URL', async () => {

  await browser.get('https://www.google.com');
  (await browser.switchTo().activeElement()).sendKeys('cricket',protractor.Key.ENTER);
  
  await browser.sleep(4000) ;

  let allElement = element.all(by.xpath("//*[contains(text(),'cricket') or contains(text(),'Cricket')]"));
  let total = await allElement.count();
  console.log(total);  

});


Given('User Launches the Element Array URL', async () => {

  await browser.get('https://letcode.in/radio');

  let allLablElements = element.all(by.tagName("a"));

  allLablElements.each(async(ele,i)=>{
    
    let text = await ele.getText();
    console.log(text);
    
  })

});


Given('Launch the Erail Map URL', async()=>{

  await browser.manage().timeouts().implicitlyWait(90000);

  await browser.get('https://erail.in/trains-between-stations/new-delhi-NDLS/mumbai-central-BCT');
  await browser.sleep(90000);
  await $('#chkSelectDateOnly').click();
  await browser.sleep(5000);
  let erailTableRows = $$("#divTrainsList .TrainList tr");   //element.all(by.css)
  await erailTableRows.map( async(ele,index)=>{

    let firstData = ele.$$('td').get(0);
    console.log(await firstData.getText());
    
  });});



  Given('Launch the Exception Handling URL', async ()=> {


    browser.get('https://letcode.in/edit');

     try{  
      element(by.xpath('//input[@id="fullame"]')).sendKeys("Input1");
     }
     catch(err){
       console.log(err);
       
     }
      element(by.xpath("//input[@id='join']")).sendKeys("Input1");
      await browser.sleep(3000)
      
  });




Given('Launch the Drag and Drop URL', async () => {

  browser.get('https://jqueryui.com/');
  await element(by.linkText('Draggable')).click();

  await browser.switchTo().frame(0);  //-> Identify Fame by Index

  // let iFrame= element(by.className('demo-frame'));
  // await browser.switchTo().frame(iFrame);


  let sourcePos = $('#draggable');
  let locX = (await sourcePos.getLocation()).x;
  let locY = (await sourcePos.getLocation()).y;

 
  await browser.actions().dragAndDrop(    await sourcePos.getWebElement(),   {      x: locX + 40,      y: locY + 30    }  ).perform();
  

  await browser.sleep(3000)

  });



  Given('Launch iFrame URL', async()=>{

    await browser.get('https://letcode.in/frame');
    let iFrameE= await element(by.id('google_esf'));
    //await browser.switchTo().frame(iFrameE.getWebElement());
    await browser.switchTo().frame(iFrameE);  // -> Error Infinite Loop

    //await browser.switchTo().frame(0);  // -> By Index
    //await browser.switchTo().frame('google_esf');   // -> By ID
    //await browser.switchTo().frame('google_es');    // -> By Name

    await browser.switchTo().defaultContent();  // -> To switch back to the Home content

    //await element(by.linkText('Log in')).click();

    await browser.sleep(3000);
  });
 


  Given('Launch the Element All URL', async()=>{

    await browser.get('https://letcode.in/dropdowns');

    let allLabels = element.all(by.tagName('option'));

    allLabels.each(async(elem,i)=>{          // i is optional parameter

      let text = await elem.getText();
      console.log(text, ' ' + i);
      browser.sleep(3000);
    });   

   

    expect(await allLabels.count()).to.equal(52);//greaterThan(53);//  equal(52);


  });



  Given('Launch the Checkbox Validation URL', async()=>{

    await browser.get('https://letcode.in/radio');
    let checkBoxE = element(by.xpath("(//label[@class='checkbox'])[1]"));
    await browser.sleep(3000);
    await checkBoxE.click();
    //expect(checkBoxE.isN());
    await browser.sleep(3000);
  });


  Given('Launch the URL for GET FIRST LAST Function', async()=>{

    await browser.get('https://letcode.in/radio');
    let getAllRadio = element.all(by.tagName('label'))
    let totalRadio = await getAllRadio.count();
    console.log(totalRadio);   


    let firstRadioBtn = getAllRadio.first();
    console.log(await firstRadioBtn.getText());
    console.log(await firstRadioBtn.getTagName());
    expect( await firstRadioBtn.getTagName()).to.contains('label') 

     
    let firstRadio =  getAllRadio.get(totalRadio-1);
    //let firstRadio =  getAllRadio.get(-1);   -> Negative values will be wrapped from the last
    console.log(await firstRadio.getText());
    

    //expect( await firstRadio.getText()).to.equals('Select any one');
   // expect( await firstRadio.getText()).to.contains('Select any');

  });


  Given('Launch the URL for 3rd dropdown', async()=>{

    await browser.get('https://letcode.in/dropdowns');
    let allDropD= element.all(by.xpath("//select[@id='fruits']/option"));
    let thirdDrop= allDropD.get(3);
    console.log(await thirdDrop.getText());
    

  }); 


  Given('Launch the Letcode Map Table URL', async()=>{


    await browser.get('https://letcode.in/table');

    

     let tableRows= element.all(by.xpath("//table[@id='simpletable']//tbody//tr"));

     //console.log(await tableRows.getText());

   // let tableRows= $$('#simpletable')

    //console.log(await tableRows.getText());

    let emailIDs = await tableRows.map(

      async (ele,i)=>{

          //let trTags = element.all(by.tagName('tr'));
          // let firstD = ele.$$('td').count();
          // console.log(await firstD);
          
         let firstD = ele.$$('td').get(2);
         //console.log(await firstD.getText());

         return {

            "EmailID" : await firstD.getText(),
            "Index" :i

         }
           
      })

      console.log(emailIDs);
      

      await browser.sleep(3000);
  });


  Given('Launch the Not Selected Radio / Checkbox URL', async()=>{


    await browser.get('https://letcode.in/radio');
   
    let allRadio = element.all(by.xpath("//label[@class='checkbox']"));
   let totalRadio =await allRadio.count();
    //let allChkBox = await allRows.get(3)
    console.log(totalRadio);

    let unCheckRadio = allRadio.filter(async (ele,i)=>{                         //FIlter Function should have a return 

      return await ele.isSelected()==true;
    

    });

    unCheckRadio.each(async ele =>{
      console.log(await ele.isSelected());
      
    })
    

  });






  
  Given('Launch the Element All URL  ForEach', async()=>{

    await browser.get('https://letcode.in/dropdowns');

    let allLabels = element.all(by.tagName('option'));

       (await allLabels).forEach(async(ele,i)=>{

    let text = await ele.getText();
      console.log(text, ' ' + i);
      browser.sleep(3000);

   });

    expect(await allLabels.count()).to.equal(52);//greaterThan(53);//  equal(52);


  });





  Given('Launch the URL and identify all the Table Content', async()=>{


    await browser.get(browser.params.letcode);
    let table = element(by.css('#shopping tbody'));
    let tableRows=table.$$('tr');
    let rowCount = await tableRows.count();
    console.log(rowCount);
    
    //let tableRows = element.all(by.css('#shopping tr'));
     //console.log(await tableRows.count());
    //  await tableRows.map(async(ele,i)=>{

    //   let tableData = element.all(by.tagName('td'));
    //   console.log(await tableData.count());
      
      
    // }) 



    //To get the Entire Table Content using For Loop
    // for (let i = 0; i <=☻ rowCount; i++) {      
    //   let rowValue = tableRows.get(i);
    //   console.log(await rowValue.getText());      
    // }

    

  });