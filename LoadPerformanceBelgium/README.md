<div align="center">
<h1>
  VWFS Artillery L&P with Playwright
</h1>
<p>Playwright along with Artillery<code> has</code> been used for this L&P excerise.<br/>Along with playwright javascript has been used.</p>
</div>

<p align="center">
  <a href="https://playwright.dev/docs/intro">Playwright Installation</a> | <a href="https://playwright.dev/docs/writing-tests">Playwright Documentation</a> | <a href="hhttps://www.artillery.io/docs/guides/getting-started/installing-artillery">Installing Artillery</a>| <a href="https://www.artillery.io/docs/guides/getting-started/writing-your-first-test">Writing Your First Artillery Test</a>

**Following tools and packages will be used**

- **nodejs** : To begin with, user has to intall the latest version of nodejs based on user system configuration.To install nodejs, follow the below link.
<a href="https://nodejs.org/en/download">Download NodeJs</a><br/>Note: User need to have admin access to install the nodejs.Once Node is downloaded, follow the instruction to install. Once installed, set the nodejs path to environment variable. For some user, to set the environment variable, admin acccess may be required. Please contact your IT team in case you dont hav admin rights.

- **Playwright** : After installing nodejs, user has to install playwright to their machine.User can download the playwright from here  <a href="https://playwright.dev/docs/intro">Playwright Installation</a><br/>Or Use below command and screnshot to select the right option to install playwrigt.<br/>

```
npm init playwright@latest
```
Once user enters above command, below screens will appear. Select the options as per below screens
```
npm init playwright@latest
Need to install the following packages:
  create-playwright@1.17.127
Ok to proceed? (y) y
```


```
Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
? Do you want to use TypeScript or JavaScript? ...
  TypeScript
> JavaScript
```

```
Initializing project in '.'
√ Do you want to use TypeScript or JavaScript? · JavaScript
√ Where to put your end-to-end tests? · e2e
√ Add a GitHub Actions workflow? (y/N) · false
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
Installing Playwright Test (npm install --save-dev @playwright/test)…
```

- **Artillery** : Once user installed playwright, its time to install another package which is for Artillery a tool that will be used to perform the laod test.User can install the artillery from  <a href="https://www.artillery.io/docs/guides/getting-started/installing-artillery">Here</a><br/>Or user can use the below command to install the artillery.<br/>

```
npm install -g artillery@latest
```
- **VSCode** : This will be the editor that will be used to write your E2E script. User can download the VSCode based on their system configuration from <a href="https://code.visualstudio.com/download">Here</a><br/>

<p>Once all these tools, software and packages are installed, its time for action. Open the L&p project in the VSCode. Ask your colleague how to get this L&P project. Usually this can be found in the confluence page. Once project is opened, follow the details of below folder structure that is used in the project</p>

**Below folder strucutre has been used for this test automation assignmnt**

- **Data.** Data folder is used to store all the data required to perform the test in the form of JSON.
- **Flows.** This folder contains the test script and test cases.
- **Helpers**. contains the code which can be used as a helper function.
  - e.g capture the screenshot of the failed test cases.
- **Logs**. Contains th log file to keep a track of what is happening with the execution of the test cases.
  - It can be very helpful when tests will be executed in pipeline.
- **POM**. Contains the file related to Page object model.
- **Scenario**. This folder contains the scenrio.yaml file. This is the file that will be used to run our artillery project as part of load testing. This file is very important as this file explain how user has to increase or sustain the load over the time.**Sample Scenario.yaml**. More about below code snippet detail can be read <a href="https://www.artillery.io/docs/guides/getting-started/writing-your-first-test">Here</a> in details with great explanation.


```
config:
  target: "https://demoqa.com/"
  example:
    mandatoryString: "a configuration setting for our engine"
  phases:
    - duration: 10
      arrivalCount: 1
      name: "Warm-Up"  
    - duration: 30
      arrivalCount: 15
      name: "Ramp-Up"
    - duration: 90
      arrivalCount: 30
      name: "Sustain Load"
  engines:
    playwright:
      launchOptions:
        headless: false
  processor: ../Flows/Scenario1.spec.js
scenarios:
  - name: "Dev account signup"
    engine: playwright
    flowFunction: "Scenario1"
    flow: []

```

- **Utils**. Cotains all the utility functions.
- **playwright.config.js**. This file contains all the setting required to perform our load test. Like what will be the beginning point of the application, various timeout, whether to execute in parallel mode and so on. Below is an example of how this file may look like.
User can configured these options based on there requirement.

```
// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './Flows',

  outputDir: 'screenshot',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    baseURL: 'https://demoqa.com',

    screenshot:"only-on-failure",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
   /* {
         name: 'Microsoft Edge',
         use: { channel: 'msedge' },
    },*/

   /* {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { channel: 'chrome' },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
});

```


**To execute the tests, please enter the below command**
- _artillery run Scenarios/Scenario.yaml_

**Note** : Apart from the result displayed by artilery by default, VWFS has its own KPI parameters. Please be in touch with the team members to know what all KPI parameters they are interested into as part of this load test.

