Feature: Setup Magetnto
      Keys, Url's

Scenario: I shoul be able to disable magento's URL incription and set the plugin keys
      Given I set the viewport
      Given I disable the url secret key encryption
      Given I go to the backend of Checkout's plugin
      Given I set the sandbox keys
      Given I save the backend settings