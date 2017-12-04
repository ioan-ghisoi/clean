
module.exports = {
  path: './tests/features',
  screenshotsPath: './tests/reports/screenshots',
  screenshotsOnError: true,
  saveScreenshotsToDisk: true,
  saveScreenshotsToReport: true,
  timeout: 60000,
  webdriverio: {
    logLevel: 'silent',
    screenshotPath: './tests/reports/screenshots',
    desiredCapabilities: {
      chromeOptions: {
        args: ['headless', 'disable-gpu'],
      },
      isHeadless: true,
    },
    debug: true,
  },
};


