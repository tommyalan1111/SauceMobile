import path from 'path';

export const config: WebdriverIO.Config = {
  // Chỉ định đường dẫn chứa các file test suite (.ts)
  specs: [
    './tests/**/*.ts'
  ],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    // Dùng path.join để tự tương thích cả Windows (\) lẫn Linux/Mac (/)
    'appium:app': path.join(process.cwd(), 'apps', 'SauceMobile.apk'),
    'appium:appWaitActivity': '*',
    'appium:newCommandTimeout': 240,
  }],
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  
  // Cấu hình kết nối tới Appium Server
  hostname: '127.0.0.1',
  port: 4723,
  path: '/',

  // Khai báo Framework sử dụng
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false, // Tự động đính kèm ảnh chụp màn hình khi fail
    }]
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }


  
};