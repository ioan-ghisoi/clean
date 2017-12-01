/* eslint-disable func-names, prefer-arrow-callback */
import Globals from '../../globals/globals';

const URL = Globals.value.url;
const VAL = Globals.value;
const BACKEND = Globals.selector.backend;

export default function () {
  this.Given(/^I set the viewport$/, () => {
    browser.setViewportSize({
      width: VAL.resolution_w,
      height: VAL.resolution_h,
    }, true);
  });

  this.Given(/^I disable the url secret key encryption$/, () => {
    const size = browser.getViewportSize();
    console.log(size);
    browser.url(URL.magento_base + URL.admin_path);
    if (browser.isVisible(BACKEND.admin_username)) {
      browser.setValue(BACKEND.admin_username, VAL.admin.username);
      browser.setValue(BACKEND.admin_password, VAL.admin.password);
      browser.click(BACKEND.admin_sign_in);
    }
    browser.url(URL.magento_base + URL.admin_path); // avoid magento cache warning
    browser.waitUntil(function () {
      return browser.isVisible(BACKEND.stores);
    }, VAL.timeout_out, 'stores button should be visible');
    browser.click(BACKEND.stores);
    browser.waitUntil(function () {
      return browser.isVisible(BACKEND.configuration);
    }, VAL.timeout_out, 'configuration button should be visible');
    browser.click(BACKEND.configuration);
    browser.waitUntil(function () {
      return browser.isVisible(BACKEND.advanced);
    }, VAL.timeout_out, 'advanced button should be visible');
    browser.click(BACKEND.advanced);
    browser.waitUntil(function () {
      return browser.isVisible(BACKEND.admin);
    }, VAL.timeout_out, 'admin button should be visible');
    browser.click(BACKEND.admin);
    browser.waitUntil(function () {
      return browser.isVisible(BACKEND.admin_security);
    }, VAL.timeout_out, 'admin security button should be visible');
    browser.click(BACKEND.admin_security);
    browser.waitUntil(function () {
      return browser.isVisible(BACKEND.admin_security_key);
    }, VAL.timeout_out, 'admin security key option button should be visible');
    browser.click(BACKEND.admin_security_key);
    browser.waitUntil(function () {
      return browser.isVisible(BACKEND.security_key_option);
    }, VAL.timeout_out, 'admin security option button should be visible');
    browser.selectByValue(BACKEND.security_key_option, '0');
    browser.click(BACKEND.plugin.save);
  });

  this.Given(/^I go to the backend of Checkout's plugin$/, () => {
    browser.url(URL.magento_base);
    if (browser.isVisible(BACKEND.admin_username)) {
      browser.setValue(BACKEND.admin_username, VAL.admin.username);
      browser.setValue(BACKEND.admin_password, VAL.admin.password);
      browser.click(BACKEND.admin_sign_in);
      browser.url(URL.magento_base + URL.payments_path); // avoid magento cache popup
    }
    browser.url(URL.magento_base + URL.payments_path);
    if (!browser.isVisible(BACKEND.plugin.selector)) {
      browser.click(BACKEND.other_payments);
    }
    if (!browser.isVisible(BACKEND.plugin.basic_category.selector)) {
      browser.click(BACKEND.plugin.selector);
    }
    if (!browser.isVisible(BACKEND.plugin.basic_category.title)) {
      browser.click(BACKEND.plugin.basic_category.selector);
    }
    if (!browser.isVisible(BACKEND.plugin.advanced_category.cvv_vetification)) {
      browser.click(BACKEND.plugin.advanced_category.selector);
    }
    if (!browser.isVisible(BACKEND.plugin.order_category.order_creation)) {
      browser.click(BACKEND.plugin.order_category.selector);
    }
    if (!browser.isVisible(BACKEND.plugin.keys_category.public)) {
      browser.click(BACKEND.plugin.keys_category.selector);
    }
  });

  this.Given(/^I set the sandbox keys$/, () => {
    browser.setValue(BACKEND.plugin.keys_category.public, VAL.admin.public_key);
    browser.setValue(BACKEND.plugin.keys_category.secret, VAL.admin.secret_key);
    browser.setValue(BACKEND.plugin.keys_category.private_shared, VAL.admin.private_shared_key);
  });

  this.Given(/^I save the backend settings$/, () => {
    browser.click(BACKEND.plugin.save);
  });
}
