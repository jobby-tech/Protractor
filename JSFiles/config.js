"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
var today = new Date(), timestamp = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';
exports.config = {
    directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub/',  // For other Browsers
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../FeatureFiles/LetCode.feature'],
    cucumberOpts: {
        tags: "",
        require: ['../JSFiles/StepDefinitions/*.js'],
        format: 'json:./cucumberreporter.json'
    },
    params: {
        //env:""              //use this - > protractor config.js --params.env="<URL>"
        letcode: "https://letcode.in/table"
    },
    /* suites: {
        smoke: 'spec/smoketests/\*.js',
        full: 'spec/\*.js'   },
    */
    onPrepare: () => {
        protractor_1.browser.driver.manage().window().maximize();
    },
    onComplete: () => {
        var options = {
            theme: "bootstrap",
            jsonFile: './cucumberreporter.json',
            output: './OutputHTMLreport/Automation_Report-' + timestamp + '.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "Ajin Automation 1.0",
                "Test Environment": "UAT",
                "Browser": "Chrome",
                "Platform": "",
                "Executed": ""
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFDMUMsaUVBQW1EO0FBRW5ELElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLEVBQ3RCLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBRSxHQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxHQUFFLEdBQUcsQ0FBQztBQUV2SSxRQUFBLE1BQU0sR0FBVztJQUV4QixhQUFhLEVBQUMsSUFBSTtJQUNsQiwwRUFBMEU7SUFDMUUsd0JBQXdCLEVBQUcsS0FBSztJQUVoQyxTQUFTLEVBQUMsUUFBUTtJQUNsQixhQUFhLEVBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUM5RCxZQUFZLEVBQUM7UUFDVCxXQUFXLEVBQUMsUUFBUTtLQUN2QjtJQUNELEtBQUssRUFBQyxDQUFDLGlDQUFpQyxDQUFDO0lBQ3pDLFlBQVksRUFBQztRQUNULElBQUksRUFBQyxFQUFFO1FBQ1AsT0FBTyxFQUFDLENBQUMsaUNBQWlDLENBQUM7UUFDM0MsTUFBTSxFQUFDLDhCQUE4QjtLQUN4QztJQUVELE1BQU0sRUFBQztRQUNILDhFQUE4RTtRQUM5RSxPQUFPLEVBQUcsMEJBQTBCO0tBRXZDO0lBRUY7OztNQUdFO0lBRUQsU0FBUyxFQUFDLEdBQUUsRUFBRTtRQUNWLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCxVQUFVLEVBQUMsR0FBRSxFQUFFO1FBRVgsSUFBSSxPQUFPLEdBQUM7WUFDUixLQUFLLEVBQUMsV0FBVztZQUNqQixRQUFRLEVBQUMseUJBQXlCO1lBQ2xDLE1BQU0sRUFBQyx1Q0FBdUMsR0FBRSxTQUFTLEdBQUMsT0FBTztZQUNqRSxzQkFBc0IsRUFBQyxJQUFJO1lBQzNCLGlCQUFpQixFQUFDLElBQUk7WUFDdEIsWUFBWSxFQUFDLElBQUk7WUFDakIsUUFBUSxFQUFDO2dCQUNMLGFBQWEsRUFBQyxxQkFBcUI7Z0JBQ25DLGtCQUFrQixFQUFDLEtBQUs7Z0JBQ3hCLFNBQVMsRUFBQyxRQUFRO2dCQUNsQixVQUFVLEVBQUMsRUFBRTtnQkFDYixVQUFVLEVBQUMsRUFBRTthQUNoQjtTQUNKLENBQUM7UUFDRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDSixDQUFDIn0=