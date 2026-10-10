const fs = require('fs');
const path = require('path');

const resultsDir = path.join(process.cwd(), 'allure-results');

// Make sure allure-results directory exists
if (!fs.existsSync(resultsDir)) {
  fs.mkdirSync(resultsDir, { recursive: true });
}

// 1. Create environment.properties file
const envContent = `
Platform=Android
Automation.Name=UiAutomator2
App.Name=SauceMobile.apk
OS=${process.platform}
Node.Version=${process.version}
Environment=${process.env.CI ? 'GitHub Actions CI' : 'Local Workstation'}
`;

fs.writeFileSync(path.join(resultsDir, 'environment.properties'), envContent.trim());

// 2. Create executor.json file
const executorContent = {
  name: process.env.CI ? 'GitHub Actions' : 'Local Developer',
  type: process.env.CI ? 'github' : 'custom',
  url: process.env.GITHUB_SERVER_URL 
    ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`
    : 'http://localhost',
  buildOrder: process.env.GITHUB_RUN_NUMBER || 1,
  buildName: process.env.CI ? `Build #${process.env.GITHUB_RUN_NUMBER}` : 'Local Run',
  buildUrl: process.env.GITHUB_SERVER_URL 
    ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`
    : 'http://localhost'
};

fs.writeFileSync(
  path.join(resultsDir, 'executor.json'),
  JSON.stringify(executorContent, null, 2)
);

// 3. Create categories.json file
const categoriesContent = [
  {
    name: "Element Not Found / Timeout Errors",
    matchedStatuses: ["broken", "failed"],
    messageRegex: ".*(element.*could not be located|timeout|Can't call).* "
  },
  {
    name: "Assertion Failures (Bug App)",
    matchedStatuses: ["failed"],
    messageRegex: ".*(expect|AssertionError).* "
  },
  {
    name: "Appium / Driver Setup Issues",
    matchedStatuses: ["broken"],
    messageRegex: ".*(WebDriverError|UiAutomator2|session).* "
  }
];

fs.writeFileSync(
  path.join(resultsDir, 'categories.json'),
  JSON.stringify(categoriesContent, null, 2)
);

console.log('✅ Generated Allure Categories metadata successfully!');

console.log('✅ Generated Allure Environment & Executor metadata successfully!');