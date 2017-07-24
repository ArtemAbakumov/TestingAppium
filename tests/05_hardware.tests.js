import test from 'tape-async'
import helper from 'tipsi-appium-helper'

import commands from '../commands'
import {
  ActivationScreen,
  SalesScreen,
  WelcomeScreen,
  HardwareScreen,
  KeyboardsScreen
} from '../screens'

const { driver } = helper

const contentHardware = {
  nameTerm: 'Terminal Name',
  addressTerm: '192.168.0.98',
  merchIdTerm: 'Merch',
  merchSecret: 'MerchSecr',
  nameNetPrint: 'Net Printer',
  addressNetPrint: '192.168.0.90',
  widthNetPrint: 0
}

test.onFinish(async () => {
  await driver.closeApp()
})

test('addNetWorkPrinter;', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.rejectActivationRequest()
  await driver.waitForVisible(SalesScreen.incomingChangeDialog, 5 * 1000)
  await driver.element(SalesScreen.acceptIncomingChange).click()
  await commands.findAndClick(SalesScreen.homeButton)
  await HardwareScreen.addNetPrinterAction()
  await driver.waitForVisible(HardwareScreen.addNetPrinterDialog)
  t.pass('Dialog add Net Printer opened')
  await HardwareScreen.addNetPrinter(contentHardware)
  await driver.waitForVisible(HardwareScreen.netPrinteradded)
  t.pass('Printer is added')
})
