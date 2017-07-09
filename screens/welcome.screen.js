import helper from 'tipsi-appium-helper'
import commands from '../commands'
import { SalesScreen } from './sales.screen'

const { idFromAccessId, idFromText, idFromResourceId, driver } = helper

export const WelcomeScreen = {
  setupWizardTitle: idFromText('Setup wizard'),
  continueButton: idFromText('Continue'),
  setOrientationTitle: idFromText('Set up orientation'),
  portraitOrientationButton: idFromText('Portrait'),
  landscapeOrientationButton: idFromText('Landscape'),
  splash: idFromResourceId('se.mobilkassan:id/splash'),

  async goThrough(orientation = 'portrait') {
    await driver.launch()
    await driver.waitForVisible(WelcomeScreen.setupWizardTitle)
    await driver.element(WelcomeScreen.continueButton).click()
    await driver.waitForVisible(WelcomeScreen.setOrientationTitle)

    const orientationChoise =
      orientation === 'portrait'
        ? 'portraitOrientationButton'
        : 'landscapeOrientationButton'
    await driver.element(WelcomeScreen[orientationChoise]).click()
    await commands.waitAndClick(WelcomeScreen.splash)

    return driver.waitForVisible(SalesScreen.activationRequestDialog)
  }
}
