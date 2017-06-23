import test from 'tape-async'
import helper from 'tipsi-appium-helper'

import { WelcomeScreen } from '../elements'

const { driver } = helper

test('Welcome screen', async (t) => {
  await driver.launch()
  await driver.waitForVisible(WelcomeScreen.setupWizard, 60000)
  const alertTitle = await driver.element(WelcomeScreen.setupWizard).getText()
  t.equal(alertTitle, 'Setup wizard', 'Alert title is correct')

  await driver.element(WelcomeScreen.continueBtn).click()
  await driver.waitForVisible(WelcomeScreen.setOrientationTitle, 60000)
  await driver.element(WelcomeScreen.continueBtn).click()
  await driver.closeApp()
})
