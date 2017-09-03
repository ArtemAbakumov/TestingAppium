import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'
import {
  WelcomeScreen,
  Buttons,
  SalesScreen,
  ActivationScreen,
  TitleBarScreen,
  SellerScreen
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
    await commands.findAndClick(Buttons.homeButton)
  },
  async logout() {
    await commands.findAndClick(Buttons.homeButton)
    await driver.waitForVisible(SellerScreen.sellerSettings)
    await commands.findAndClick(Buttons.homeButton)
    await driver.waitForVisible(TitleBarScreen.reportButton)
    await driver.pressBackBtton()
    await driver.waitForVisible(WelcomeScreen.splash, 5 * 1000)
  }
}
