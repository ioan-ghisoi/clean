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
  this.Given(/^I check google$/, () => {
    browser.url('https://contenthub.dev');
    browser.pause(3000);
    console.log(browser.getSource());
    browser.waitUntil(function () {
      return browser.isVisible('bodyd');
    }, VAL.timeout_out, 'body should be visible');
  });
  this.Given(/^I disable the url secret key encryption$/, () => {
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
}
