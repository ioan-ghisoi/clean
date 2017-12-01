/* eslint-disable func-names, prefer-arrow-callback */
import Globals from '../../globals/globals';

const URL = Globals.value.url;
const VAL = Globals.value;
const FRONTEND = Globals.selector.frontend;

export default function () {
  this.Then(/^I complete the order flow as a (.*) customer until the payment stage$/, (customer) => {
    switch (customer) {
      case 'unregistered':
        browser.url(URL.magento_base + URL.product_path);
        browser.pause(5000);
        browser.waitUntil(function () {
          return !browser.isVisible(FRONTEND.order.loader);
        }, VAL.timeout_out, 'the product page to be loaded');
        browser.click(FRONTEND.order.add_product);
        browser.waitUntil(function () {
          return browser.isVisible(FRONTEND.order.product_counter);
        }, VAL.timeout_out, 'the basket products counter to be visible');
        browser.click(FRONTEND.order.cart);
        browser.waitUntil(function () {
          return browser.isVisible(FRONTEND.order.go_to_checkout);
        }, VAL.timeout_out, 'the go to checkout button should be visible');
        browser.pause(1000); // avoid magento errors
        browser.click(FRONTEND.order.go_to_checkout);
        browser.waitUntil(function () {
          return !browser.isVisible(FRONTEND.order.checkout_page_loader);
        }, VAL.timeout_out, 'the customer data page should be loaded');
        browser.waitUntil(function () {
          return browser.isVisible(FRONTEND.order.customer_email);
        }, VAL.timeout_out, 'the customeremail field should be visible');
        browser.setValue(FRONTEND.order.customer_email, VAL.guest.email);
        browser.waitUntil(function () {
          return !browser.isVisible(FRONTEND.order.loader);
        }, VAL.timeout_out, 'the shipping methods should be updated');
        browser.waitUntil(function () {
          return !browser.isVisible(FRONTEND.order.checkout_page_loader);
        }, VAL.timeout_out, 'the customer data page should be loaded');
        browser.waitUntil(function () {
          return !browser.isVisible(FRONTEND.order.loader);
        }, VAL.timeout_out, 'the customer data page should be loaded');
        browser.setValue(FRONTEND.order.customer_firstname, VAL.guest.name);
        browser.setValue(FRONTEND.order.customer_firstname, VAL.guest.name);
        browser.setValue(FRONTEND.order.customer_lastname, VAL.guest.lastname);
        browser.setValue(FRONTEND.order.customer_street, VAL.guest.address);
        browser.selectByValue(FRONTEND.order.customer_country, VAL.guest.country);
        browser.setValue(FRONTEND.order.customer_city, VAL.guest.city);
        browser.setValue(FRONTEND.order.customer_postcode, VAL.guest.postcode);
        browser.setValue(FRONTEND.order.customer_phone, VAL.guest.phone);
        browser.waitUntil(function () {
          return !browser.isVisible(FRONTEND.order.loader);
        }, VAL.timeout_out, 'the shipping methods should be updated');
        browser.waitUntil(function () {
          return !browser.isVisible(FRONTEND.order.loader);
        }, VAL.timeout_out, 'the customer data page should be loaded');
        browser.click(FRONTEND.order.go_to_payment);
        browser.waitUntil(function () {
          return !browser.isVisible(FRONTEND.order.loader);
        }, VAL.timeout_out, 'the loader before the payment options should not be visible');
        browser.waitUntil(function () {
          return !browser.isVisible(FRONTEND.order.checkout_page_loader);
        }, VAL.timeout_out, 'the payment page should be loaded');
        break;
      case 'registered':
        browser.url(URL.magento_base + URL.product_path);
        browser.waitUntil(function () {
          return !browser.isVisible(FRONTEND.order.loader);
        }, VAL.timeout_out, 'the product page to be loaded');
        browser.click(FRONTEND.order.add_product);
        browser.waitUntil(function () {
          return browser.isVisible(FRONTEND.order.product_counter);
        }, VAL.timeout_out, 'the basket products counter to be visible');
        browser.click(FRONTEND.order.cart);
        browser.waitUntil(function () {
          return browser.isVisible(FRONTEND.order.go_to_checkout);
        }, VAL.timeout_out, 'the go to checkout button should be visible');
        browser.pause(1000); // avoid magento errors
        browser.click(FRONTEND.order.go_to_checkout);
        browser.waitUntil(function () {
          return !browser.isVisible(FRONTEND.order.loader);
        }, VAL.timeout_out, 'the customer data page should be loaded');
        browser.waitUntil(function () {
          return browser.isVisible(FRONTEND.order.go_to_payment);
        }, VAL.timeout_out, 'the go to payment button should be enabled');
        browser.click(FRONTEND.order.go_to_payment);
        browser.waitUntil(function () {
          return !browser.isVisible(FRONTEND.order.loader);
        }, VAL.timeout_out, 'the loader before the payment options should not be visible');
        browser.waitUntil(function () {
          return !browser.isVisible(FRONTEND.order.checkout_page_loader);
        }, VAL.timeout_out, 'the payment page should be loaded');
        break;
      default:
        break;
    }
  });

  this.Given(/^I create an account$/, () => {
    browser.url(URL.magento_base + URL.sign_up_path);
    browser.waitUntil(function () {
      return browser.isVisible(FRONTEND.registration.firstname);
    }, VAL.timeout_out, 'name field should be visible');
    browser.setValue(FRONTEND.registration.firstname, VAL.customer.name);
    browser.setValue(FRONTEND.registration.lastname, VAL.customer.lastname);
    browser.setValue(FRONTEND.registration.email, VAL.customer.email);
    browser.setValue(FRONTEND.registration.password, VAL.customer.password);
    browser.setValue(FRONTEND.registration.confirm_password, VAL.customer.password);
    browser.click(FRONTEND.registration.submit);
    browser.waitUntil(function () {
      return browser.isVisible(FRONTEND.registration.success);
    }, VAL.timeout_out, 'loadershould not be visible');
    browser.click(FRONTEND.registration.address_tab);
    browser.waitUntil(function () {
      return browser.isVisible(FRONTEND.registration.street);
    }, VAL.timeout_out, 'street input be visible');
    browser.setValue(FRONTEND.registration.street, VAL.customer.street);
    browser.selectByValue(FRONTEND.registration.country, VAL.customer.country);
    browser.setValue(FRONTEND.registration.city, VAL.customer.city);
    browser.setValue(FRONTEND.registration.phone, VAL.customer.phone);
    browser.click(FRONTEND.registration.save);
  });

  this.Then(/^I logout from the registered customer account$/, () => {
    browser.url(URL.magento_base);
    browser.waitUntil(function () {
      return browser.isVisible(FRONTEND.logged_in_name);
    }, VAL.timeout_out, 'the logged in username shoud be visible');
    browser.click(FRONTEND.logged_in_name);
    browser.waitUntil(function () {
      return browser.isVisible(FRONTEND.sign_out);
    }, VAL.timeout_out, 'the sign out button shoud be visible');
    browser.click(FRONTEND.sign_out);
  });

  this.Given(/^I login the registered customer account$/, () => {
    browser.url(URL.magento_base + URL.sign_in_path);
    browser.waitUntil(function () {
      return browser.isVisible(FRONTEND.sign_in_email);
    }, VAL.timeout_out, 'email field shoud be visible');
    browser.setValue(FRONTEND.sign_in_email, VAL.customer.email);
    browser.setValue(FRONTEND.sign_in_password, VAL.customer.password);
    browser.waitUntil(function () {
      return browser.isEnabled(FRONTEND.sign_in_button);
    }, VAL.timeout_out, 'sign in button should be enabled');
    browser.click(FRONTEND.sign_in_button);
  });
}