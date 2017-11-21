export default function () {
  this.Given(/^I go to google$/, () => {
    browser.url('https://google.com/');
  });
}
