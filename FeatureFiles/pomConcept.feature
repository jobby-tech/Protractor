

Feature: POM Concept


# Scenario Outline: POM Scenario

# Given User Launches the URL
# And User Clicks on the SignUp Button
# And User Enters "<usname>" "<email>" "<password>" in the UserName Inputbox
# And User Clicks on the Signup Button in the Form
# Then Verify if SignOut Button is available
# And Verify if Toast Message is Displayed as "<msg>" "<usname>"

# Examples:
#     | usname | email          |password| msg |
#     | test1| te14@gmail.com|pass001 | You have logged in |


#  Scenario Outline: Negative Scenario Toast Mesg

# Given User Launches the URL
# And User Clicks on the SignUp Button
# And User Clicks on the Signup Button in the Form
# Then Verify if Toast Message is Displayed as "<msg>"

# Examples:
#     | usname | email          |password|    msg |
#     | test1| test9qwe966414@gmail.com|pass001 |     Error: The email address is badly formatted. |



# Scenario: Enter the values and hit enter
# Given Launch the Enter and Hit URL

# Scenario: Test Data From JSON
# Given Launch the URL From JSON


# Scenario: Execute Same Scripts on Different Environments
# Given Launch the URL from the Config File 


Scenario: Double Click on Mouse
Given Launch the URL to Double Click
