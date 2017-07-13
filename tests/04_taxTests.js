import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromText, driver } = helper
import commands from '../commands'
import {
  ActivationScreen,
  SalesScreen,
  WelcomeScreen,
  TaxScreen
} from '../screens'
const appId = 'se.mobilkassan:id/'

const setTaxDialog = {
  name: 'VAT11',
  rate: '11'
}

test.onFinish(async () => {
  await driver.closeApp()
})

test('Create tax', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.rejectActivationRequest()
  await driver.findAndClick(SalesScreen.homeButton)
  await TaxScreen.setTax()
  await driver.WaitForVisible(TaxScreen.VAT11Item)
  t.pass('Tax VAT11 Created')
})

test('Activation screen: success', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.acceptActivationRequest()
  await ActivationScreen.requestActivation(activation)
  await driver.waitForVisible(
    ActivationScreen.activationSentDialogTitleSuccess,
    10 * 1000
  )
  await commands.findAndClick(SalesScreen.acceptIncomingChange)
  await driver.waitForVisible(SalesScreen.mainViewPage)
  t.pass('Activation screen success test complete')
})
