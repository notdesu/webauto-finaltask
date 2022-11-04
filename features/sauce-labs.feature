Feature: SwagLabs feature file

    Feature file for final task of Web Automation with WebdriverIO

    @FINAL_TASK
    Scenario: User orders a product from the SwagLabs store
      Given User has opened SwagLabs website
      And User inputs username - "standard_user"
      And User inputs password - "secret_sauce"
      When User press the login button
      Then User is on SwagLabs products page
      When User adds - "Sauce Labs Fleece Jacket" to the shopping cart
      And User opens shopping cart
      Then User sees product - "Sauce Labs Fleece Jacket" with price - "$49.99"
      When User press checkout button
      # And User fills the checkout information
      # And User press button to continue with the order
      # And User sees correct product details in checkout overview
      # And User press finish order button
      # Then User sees that order has been completed
      # And User goes back to the products page
      # And User is on SwagLabs products page