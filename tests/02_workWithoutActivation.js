import test from 'tape-async'
import helper from 'tipsi-appium-helper'

import commands from '../commands'
import {
  ActivationScreen,
  SalesScreen,
  WelcomeScreen,
  TitleBarScreen,
  EmailScreen
} from '../screens'

const { driver } = helper

test.onFinish(async () => {
  await driver.closeApp()
})

test('Sale without Activation', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.rejectActivationRequest()
  await driver.waitForVisible(SalesScreen.incomingChangeDialog, 5 * 1000)
  t.pass('dialog is visible')
  await driver.element(SalesScreen.acceptIncomingChange).click()
  t.pass('sales screen opened')
  await commands.findAndClick(SalesScreen.productSearchList, 'Article 1')
  await commands.waitAndClick(SalesScreen.airPaySaleButton) //Заменить локаторы XPath на content description
  await driver.waitForVisible(SalesScreen.activationRequestDialog, 5 * 1000)
  t.pass('Activation dialog is visible')
})

test('Z-report without activation', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.rejectActivationRequest()
  await driver.waitForVisible(SalesScreen.incomingChangeDialog, 5 * 1000)
  t.pass('dialog is visible')
  await commands.waitAndClick(SalesScreen.acceptIncomingChange)
  t.pass('sales screen opened')
  await commands.waitAndClick(TitleBarScreen.reportButton)
  //добавить команды поиска кнопки, и условие нажатия на helpButton если кнопка не найдена
  await commands.findAndClick(TitleBarScreen.zReport)
  await driver.waitForVisible(EmailScreen.emailSettingAcceptDialog, 5 * 1000)
  t.pass('Accept dialog visible')
  await EmailScreen.rejectEmailSetting()
  await driver.waitForVisible(SalesScreen.mainViewPage, 5 * 1000)
  t.pass('test Z-report complete')
})

test('X-report without activation', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.rejectActivationRequest()
  await driver.waitForVisible(SalesScreen.incomingChangeDialog, 5 * 1000)
  t.pass('Dialog is visible')
  await commands.waitAndClick(SalesScreen.acceptIncomingChange)
  t.pass('Sales screen opened')
  await commands.waitAndClick(TitleBarScreen.reportButton)
  await commands.findAndClick(TitleBarScreen.xReport)
  await driver.waitForVisible(EmailScreen.emailSettingAcceptDialog, 5 * 1000)
  t.pass('Accept dialog visible')
  await EmailScreen.rejectEmailSetting()
  await driver.waitForVisible(SalesScreen.mainViewPage, 5 * 1000)
  t.pass('Test X-report complete')
})

test('Day report without activation', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.rejectActivationRequest()
  await driver.waitForVisible(SalesScreen.incomingChangeDialog, 5 * 1000)
  t.pass('Dialog is visible')
  await commands.waitAndClick(SalesScreen.acceptIncomingChange)
  t.pass('Sales screen opened')
  await commands.waitAndClick(TitleBarScreen.reportButton)
  await commands.findAndClick(TitleBarScreen.dayReport)
  await driver.waitForVisible(EmailScreen.emailSettingAcceptDialog, 5 * 1000)
  t.pass('Accept dialog visible')
  await EmailScreen.rejectEmailSetting()
  await driver.waitForVisible(SalesScreen.mainViewPage, 5 * 1000)
  t.pass('Test dayreport complete')
})

test('Previous Day report without activation', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.rejectActivationRequest()
  await driver.waitForVisible(SalesScreen.incomingChangeDialog, 5 * 1000)
  t.pass('dialog is visible')
  await commands.waitAndClick(SalesScreen.acceptIncomingChange)
  t.pass('sales screen opened')
  await commands.waitAndClick(TitleBarScreen.reportButton)
  await commands.findAndClick(TitleBarScreen.previousDay)
  await driver.waitForVisible(EmailScreen.emailSettingAcceptDialog, 5 * 1000)
  t.pass('Accept dialog visible')
  await EmailScreen.rejectEmailSetting()
  await driver.waitForVisible(SalesScreen.mainViewPage, 5 * 1000)
  t.pass('test previousdayreport complete')
})
test('Export to SIE without activation', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.rejectActivationRequest()
  await driver.waitForVisible(SalesScreen.incomingChangeDialog, 5 * 1000)
  t.pass('dialog is visible')
  await commands.waitAndClick(SalesScreen.acceptIncomingChange)
  t.pass('sales screen opened')
  await commands.waitAndClick(TitleBarScreen.reportButton)
  await commands.findAndClick(TitleBarScreen.exportSIE)
  await driver.waitForVisible(SalesScreen.mainViewPage, 5 * 1000)
  t.pass('test SIE complete')
})
