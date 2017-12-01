Feature: Guest Customer Test Suite
      MAGENTO 2.1

Background: 
      Given I set the viewport

Scenario: I should be able to complete a stage1
      Given I disable the url secret key encryption
      Given I go to the backend of Checkout's plugin
      Given I set the sandbox keys
      Given I set the integration type to embedded
      Given I set the payment option title
      Given I set the payment mode to cards
      Given I set the theme color
      Given I set the button label
      Given I enable Vault
      Given I set Vault title
      Given I enable 3D Secure
      Given I enable autocapture
      Given I save the backend settings
      Then I complete the order flow as a unregistered customer until the payment stage
      Then I choose Checkout as a payment option


Scenario: I should be able to complete a stage1
      Given I create an account
      Then I logout from the registered customer account
      Given I go to the backend of Checkout's plugin
      Given I set the integration type to embedded
      Given I set the payment option title
      Given I set the payment mode to cards
      Given I set the theme color
      Given I set the button label
      Given I enable Vault
      Given I set Vault title
      Given I enable 3D Secure
      Given I enable autocapture
      Given I save the backend settings
      Given I login the registered customer account
      Then I complete the order flow as a registered customer until the payment stage
      Then I choose Checkout as a payment option
      Then I logout from the registered customer account