/* eslint-disable func-names, prefer-arrow-callback */
import Globals from '../../globals/globals';

const URL = Globals.value.url;
const VAL = Globals.value;
const FRONTEND = Globals.selector.frontend;

export default function () {
  this.Then(/^I choose Checkout as a payment option$/, () => {
    browser.waitUntil(function () {
      return browser.isVisible(FRONTEND.order.checkout_payment_option);
    }, VAL.timeout_out, 'checkout pyament option should exist');
    browser.click(FRONTEND.order.checkout_payment_option);
  });
}
