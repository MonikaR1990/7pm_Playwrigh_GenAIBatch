Feature: Login Functionality

Scenario: Verify that user able to Login with valid credentials
Given user navigate to the login page
And user enters username and password
When user clicks the login button
Then user navigate to the user home page
 
Scenario: Verify user get error message while using invalid credentials
Given user navigate to the login page
And user enters invalid username and password
When user clicks the login button
Then user could see an error message

Scenario: Verify the user empty credentials
Given user navigate to the login page
When user clicks the login button
Then user could see an error message




