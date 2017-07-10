import test from 'tape-async'
import helper from 'tipsi-appium-helper'

import commands from '../commands'
import {
  ActivationScreen,
  SalesScreen,
  WelcomeScreen,
  TitleBarScreen
} from '../screens'

const { driver } = helper

/*test.onFinish(async () => {
  await driver.closeApp()
})*/

test('Sale without Activation', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.rejectActivationRequest()
  await driver.waitForVisible(SalesScreen.incomingChangeDialog, 5 * 1000)
  t.pass('dialog is visible')
  await driver.element(SalesScreen.acceptIncomingChange).click()
  t.pass('sales screen opened')
  await commands.findAndClick(SalesScreen.productSearchList, 'Article 1')
  await driver.element(SalesScreen.airPaySaleButton).click() //Заменить локаторы XPath на content description
  await driver.waitForVisible(SalesScreen.activationRequestDialog)
  t.pass('Activation dialog is visible')
})

test('Report without activation', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.rejectActivationRequest()
  await driver.waitForVisible(SalesScreen.incomingChangeDialog, 5 * 1000)
  t.pass('dialog is visible')
  await driver.element(SalesScreen.acceptIncomingChange).click()
  t.pass('sales screen opened')
  await driver.element(TitleBarScreen.reportButton).click()
  await driver.waitForVisible(TitleBarScreen.zReport, 5 * 1000)
  t.pass('Z-Report is visible')
})
