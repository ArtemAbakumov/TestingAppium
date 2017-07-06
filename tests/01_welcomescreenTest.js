import test from 'tape-async'
import helper from 'tipsi-appium-helper'

import { WelcomeScreen } from '../Elements/splashElements'

const { driver } = helper

test('Welcome screen', async (t) => {
await driver.waitForVisible(WelcomeScreen.setupWizard, 60000)
const alertTitle = await driver.element(WelcomeScreen.setupWizard).getText()
  t.equal(alertTitle, 'Setup wizard', 'Alert title is correct')
const alertText = await driver.element(WelcomeScreen.welcomeMessage).getText()
  t.equal(alertText, 'Welcome! This guide will help you get started with the app.', 'Alert text is correct')
await driver.element(WelcomeScreen.continueBtn).click()
await driver.waitForVisible(WelcomeScreen.setupWizard,60000)
await driver.element(WelcomeScreen.portraitBtn).click()
await driver.waitForVisible(WelcomeScreen.importdata,60000)

await driver.closeApp()
})