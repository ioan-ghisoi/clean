Feature: Guest Customer Test Suite
      MAGENTO 2.1

Background: 
      Given I set the viewport

Scenario: I should be able to complete a normal transaction as a new customer with the Embedded integration
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