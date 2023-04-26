
const { test, expect } = require('@playwright/test');
const data = require('../Data/data.json')
const {Check} = require('../POM/Browser/Check.js')
const {Click} = require('../POM/Browser/Click.js')
const {Fill} = require('../POM/Browser/Fill.js')
const {DownloadOperation} = require('../POM/Browser/Download.js')
const {LogData} = require('../Utils/Utils.js')
const {HomePageElement} = require('../POM/PageObjects/HomePageObject.js')
const {Span} = require('../POM/PageObjects/ElementsPageObject.js')
const {Input, Textarea, submit} = require('../POM/PageObjects/TextBoxPageObject.js')
const {YesButton} = require('../POM/PageObjects/RadioButtonPageObject.js')
const {Button} = require('../POM/PageObjects/ButtonPageObject.js')
const {Links} = require('../POM/PageObjects/LinksPageObject.js')
const {UploadFile, DownloadFile} = require('../POM/PageObjects/DownloadUploadPageObject.js')


async function Scenario1 (page) {

  // Go to https://www.google.com/
  await page.goto(data.Target.URL);
  await LogData('open the url')

  await expect(page).toHaveTitle("DEMOQA");
  LogData('verified the title')

  // Click on Element Link on Home page
  await Click(page, HomePageElement());
  LogData('Clicked on Element item in homepage')

  // Click on TextBox link on Element Page
  await Click(page, Span("Text Box"));
  LogData('Click on TextBox link on Element page')

  // Enter values on Text box page.
  // Enter Full name
  await Fill(page, Input("userName"), data.TextBox.FullName);
  LogData('Enter Full name')

  // Enter Email
  await Fill(page, Input("userEmail"), data.TextBox.Email);
  LogData('Enter Email')

  // Enter Curret Address
  await Fill(page, Textarea("currentAddress"), data.TextBox.CurrentAddress);
  LogData('Enter Curret Address')

  // Enter Permanent Address
  await Fill(page, Textarea("permanentAddress"), data.TextBox.PermanentAddress);

  // Click on submit button
  await Click(page, submit());

  // click on radio button
  await Click(page, Span("Radio Button"));

  // click on yes radio button on radio button page.
  await Check(page, YesButton());

    // click on button
  await Click(page, Span('Buttons'));

  // Click on Double Click Me button
  await Click(page, Button("Double Click Me"))
  
  // Click on Double Click Me button
  await Click(page, Button("Click Me"))

  // Click on Link
  await Click(page, Span("Links"))

  // click on Forbidden
  await Click(page, Links("Forbidden"))

  // Click on Bad Request
  await Click(page, Links("Bad Request"))

  //click on  download and upload page on element page
  await Click(page, Span("Upload and Download"))

  //Click on download button in upload-download page
  await DownloadOperation(page, DownloadFile())

}

module.exports = {
    Scenario1,
};
