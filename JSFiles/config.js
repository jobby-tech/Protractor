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
    specs: ['../FeatureFiles/pomConcept.feature'],
    cucumberOpts: {
        tags: "",
        require: ['../JSFiles/StepDefinitions/*.js'],
        format: 'json:./cucumberreporter.json'
    },
    params: {
        env: "" //use this - > protractor config.js --params.env="<URL>"
        //env : "https://treeoflove.com" 
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFDMUMsaUVBQW1EO0FBRW5ELElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLEVBQ3RCLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBRSxHQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxHQUFFLEdBQUcsQ0FBQztBQUV2SSxRQUFBLE1BQU0sR0FBVztJQUV4QixhQUFhLEVBQUMsSUFBSTtJQUNsQiwwRUFBMEU7SUFDMUUsd0JBQXdCLEVBQUcsS0FBSztJQUVoQyxTQUFTLEVBQUMsUUFBUTtJQUNsQixhQUFhLEVBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUM5RCxZQUFZLEVBQUM7UUFDVCxXQUFXLEVBQUMsUUFBUTtLQUN2QjtJQUNELEtBQUssRUFBQyxDQUFDLG9DQUFvQyxDQUFDO0lBQzVDLFlBQVksRUFBQztRQUNULElBQUksRUFBQyxFQUFFO1FBQ1AsT0FBTyxFQUFDLENBQUMsaUNBQWlDLENBQUM7UUFDM0MsTUFBTSxFQUFDLDhCQUE4QjtLQUN4QztJQUVELE1BQU0sRUFBQztRQUNILEdBQUcsRUFBQyxFQUFFLENBQWMsd0RBQXdEO1FBQzVFLGlDQUFpQztLQUVwQztJQUVGOzs7TUFHRTtJQUVELFNBQVMsRUFBQyxHQUFFLEVBQUU7UUFDVixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsVUFBVSxFQUFDLEdBQUUsRUFBRTtRQUVYLElBQUksT0FBTyxHQUFDO1lBQ1IsS0FBSyxFQUFDLFdBQVc7WUFDakIsUUFBUSxFQUFDLHlCQUF5QjtZQUNsQyxNQUFNLEVBQUMsdUNBQXVDLEdBQUUsU0FBUyxHQUFDLE9BQU87WUFDakUsc0JBQXNCLEVBQUMsSUFBSTtZQUMzQixpQkFBaUIsRUFBQyxJQUFJO1lBQ3RCLFlBQVksRUFBQyxJQUFJO1lBQ2pCLFFBQVEsRUFBQztnQkFDTCxhQUFhLEVBQUMscUJBQXFCO2dCQUNuQyxrQkFBa0IsRUFBQyxLQUFLO2dCQUN4QixTQUFTLEVBQUMsUUFBUTtnQkFDbEIsVUFBVSxFQUFDLEVBQUU7Z0JBQ2IsVUFBVSxFQUFDLEVBQUU7YUFDaEI7U0FDSixDQUFDO1FBQ0YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0osQ0FBQyJ9