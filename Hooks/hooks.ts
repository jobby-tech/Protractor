import {browser} from 'protractor';
import {Before,After, Status} from 'cucumber';

Before(async function (scenario)
{
    browser.manage().window().maximize;
});

After(async function(scenario)
{
    if(scenario.result.status==Status.FAILED)
    {
        const screenshot=await browser.takeScreenshot();
        this.attach(screenshot,"image/png");
    }
});