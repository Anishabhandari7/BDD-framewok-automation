Feature: login validation


    Scenario: Successful login topup

        Given I am on the login page
        When I enter my valid username and password
        And I click the login button
        Then I should be logged in successfully

        Given I am on the dashboard
        When I click on Topup
        And I enter valid mobile Number and amount
        Then I click on proceed button
        Given confirmation page
        When I click confirm button
        Then Enter T-pin and click confirm button






    # Scenario: Failed login with incorrect credentials
    #     Given I am on the login page
    #     When I enter my invalid username or password
    #     And I click the login button
    #     Then I should see an error message

    # Scenario: Failed login with empty fields
    #     Given I am on the login page
    #    When I leave the username or password fields empty
    #     And I click the login button
    #     Then I should see a validation error




#     Feature: User Registration
#   As a new user
#   I want to be able to register on the website
#   So that I can access the platform's features

#   Scenario: Successful registration
#     Given I am on the registration page
#     When I enter my valid email address "example@email.com"
#     And I enter a valid password "Password123"
#     And I confirm the password "Password123"
#     And I click the "Register" button
#     Then I should see a successful registration message
#     And I should be redirected to the login page

#   Scenario: Registration with invalid email
#     Given I am on the registration page
#     When I enter an invalid email address "invalid_email"
#     And I enter a valid password "Password123"
#     And I confirm the password "Password123"
#     And I click the "Register" button
#     Then I should see an error message indicating invalid email format

#   Scenario: Registration with weak password
#     Given I am on the registration page
#     When I enter a valid email address "example@email.com"
#     And I enter a weak password "weak"
#     And I confirm the password "weak"
#     And I click the "Register" button
#     Then I should see an error message indicating weak password

#   Scenario: Registration with password mismatch
#     Given I am on the registration page
#     When I enter a valid email address "example@email.com"
#     And I enter a valid password "Password123"
#     And I confirm a different password "Different123"
#     And I click the "Register" button
#     Then I should see an error message indicating password mismatch


