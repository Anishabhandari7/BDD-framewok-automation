import {
    Given,
    When,
    And,
    Then
} from 'cypress-cucumber-preprocessor/steps'
Given("I am on the login page", () => {
    cy.visit("http://uatthaili.digihub.com.np/home")
})
When("I enter my valid username and password", () => {
    cy.get("#user_name").type(9847659504)
    cy.get("#user_password").type("Test@321")
})
And("I click the login button", () => {
    cy.contains("LOGIN").click()
})
Then("I should be logged in successfully", () => {

})

Given("I am on the dashboard", () => {

})
When("I click on Topup", () => {
    cy.visit("http://uatthaili.digihub.com.np/Payment/MobileTopUp")
})
And("I enter valid mobile Number and amount", () => {
    cy.get("#MobileNo").type(9847659504)
    cy.wait(5000)
    cy.get("#Amount").type("10")
})
Then("I click on proceed button", () => {
    cy.get("#confirmButton").click()
})
Given("confirmation page", () => {

})
When("I click confirm button", () => {
    cy.get("#btnConfirm").click()
})
Then("Enter T-pin and click confirm button", () => {
    cy.get("#pin1").type(1)
    cy.get("#pin2").type(1)
    cy.get("#pin3").type(1)
    cy.get("#pin4").type(1)
    cy.get('#btnConfirmmodal').click()
})






//Failed login with incorrect credentials

// Given ("I am on the login page",()=>{
//     cy.visit("http://uatthaili.digihub.com.np/home")
// })
// When ("I enter my invalid username or password",()=>{
//     cy.get("#user_name").type(9847659564)
//     cy.get("#user_password").type("Test@8821")
// })
// And("I click the login button", () => {
//          cy.contains("LOGIN").click()
// })
// Then ("I should see an error message",()=>{

// })

//Failed login with empty fields

// Given ("I am on the login page",()=>{
//     cy.visit("http://uatthaili.digihub.com.np/home")
// // })
// // When ("I leave the username or password fields empty",()=>{
// //     cy.get("#user_name").type(9847659504)
// //     cy.get("#user_password").type()
// // })
// And("I click the login button", () => {
//          cy.contains("LOGIN").click()
// })
// Then ("I should see a validation error",()=>{

// })