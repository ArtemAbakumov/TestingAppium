import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'
import {
  WelcomeScreen,
  Buttons,
  SalesScreen,
  ActivationScreen
} from '../screens'

const { idFromResourceId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const SettingsScreen = {
  async openSettings() {
    await WelcomeScreen.goThrough()
    await SalesScreen.rejectActivationRequest()
    await driver.waitForVisible(SalesScreen.incomingChangeDialog, 5 * 1000)
    await driver.element(SalesScreen.acceptIncomingChange).click()
    await commands.findAndClick(SalesScreen.homeButton)
  }
}
