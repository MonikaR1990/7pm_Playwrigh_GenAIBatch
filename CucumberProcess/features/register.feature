Feature: Register Functionality

Scenario: Verify that user able to do successful registration with valid details
Given user navigate to the registration page
When user selects gender
And user enters the valid details
And user clicks the registration button
Then user should see register successful message

Scenario: Verify that an already registered user is unable to register again with same email
Given user navigate to the registration page
When user enters the details with an already registered email
And user clicks the registration button
Then user should see an email already exists error message




