Feature: Guest Customer Test Suite
      MAGENTO 2.1

Background: 
      Given I set the viewport

Scenario: I should be able to complete a stage1
      Given I disable the url secret key encryption
      Given I go to the backend of Checkout's plugin
      Given I set the sandbox keys
      Given I enable 3D Secure
      Given I save the backend settings
      Then I complete the order flow as a unregistered customer until the payment stage
      Then I choose Checkout as a payment option
      Then I complete Checkout Frames with a visa card
      Then I submit the order for the frames integration