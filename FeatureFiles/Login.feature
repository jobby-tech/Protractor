Feature: Login Page Validation



Background:

Given Navigate to the "http://google.com" Login Page
    

@Login
Scenario Outline:  Valid Login

Given API Testing
Given Enter the "<userid>" on the User ID Input Box
Given Enter the "<password>" on the Password Input Box
When Click on the Sign in Button as User Role Curator
Then Verify if the Title "<title>" of the Page and Heading "<heading>" are displayed

Examples:
    | userid        | password              |  title     | heading   |
    | StageCurator  | $tageN3w5tuckCu6ato6  | Newstuck   | NEWSTUCK  |

