import test from 'tape-async'
import helper from 'tipsi-appium-helper'

import { WelcomeScreen } from '../elements'

const { driver } = helper

test('Welcome screen', async (t) => {
  await driver.waitForVisible(WelcomeScreen.title, 60000)
 
  await driver.element(WelcomeScreen.continueBtn).click()
  await driver.waitForVisible(WelcomeScreen.title,60000)
  await driver.element(WelcomeScreen.portraitBtn).click()
  await driver.element(WelcomeScreen.splashScrn).click()
 
  //await driver.element(WelcomeScreen.continueBtn).click(),
  // await driver.waitForVisible(WelcomeScreen.devWarningMessage, 5000),
 // await driver.waitForVisible(WelcomeScreen.splashScrn, 10000),
  //await driver.element(WelcomeScreen.splashScrn) .click(),
  
 // await driver.element(WelcomeScreen.companiesSettingsBtn).click()
  
  //await driver.closeApp()
})
