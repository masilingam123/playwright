const { LogData } = require("../Utils/Utils");

async function Scenario2 (page) {
await page.goto('https://www.google.com/');
 LogData("open google")
//await page.getByRole('combobox', { name: 'Search' }).click();
await page.getByRole('combobox', { name: 'Search' }).fill('selenium');
 LogData("eneter selenium on textbox")
await page.getByRole('combobox', { name: 'Search' }).press('Enter');
 LogData("press enter button")
await page.goto('https://www.selenium.dev/');
 LogData("select search result")
await page.getByRole('button', { name: 'About' }).click();
 LogData("click on about button")
await page.getByRole('link', { name: 'Events' }).click();
 LogData("selecte envet option")
await page.getByRole('link', { name: 'Downloads' }).click();
 LogData("click downloads button")
 await page.goto('https://www.browserstack.com/guide/playwright-vs-cypress');
  await page.getByRole('button', { name: 'Developers' }).click();
 LogData("click dev button")
 await page.getByRole('navigation', { name: 'Primary Menu', exact: true }).getByRole('link', { name: 'Support' }).click();
 LogData("click ")
 await page.getByRole('link', { name: 'Live Interactive cross browser testing' }).click();
 }
module.exports = {
    Scenario2,
}