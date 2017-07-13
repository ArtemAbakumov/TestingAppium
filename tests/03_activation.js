import test from 'tape-async'
import helper from 'tipsi-appium-helper'

import commands from '../commands'
import { ActivationScreen, SalesScreen, WelcomeScreen } from '../screens'

const { driver } = helper

const activation = {
  corporateId: 1509198600,
  merchantName: 'Burger Imperator',
  address: 'Kirova st',
  zipCode: 12345,
  city: 'Izhevsk',
  contactPersonName: 'Artem',
  contactPersonPhone: 88005553535,
  contactPersonEmail: 'marksman89@mail.ru',
  cashRegisterName: 'casher2',
  featureSync: true,
  featureCU: false,
  comment: 'comment here'
}

test.onFinish(async () => {
  await driver.closeApp()
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

test('Activation screen: Request new activation', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.acceptActivationRequest()
  await ActivationScreen.requestActivation(activation)
  await driver.waitForVisible(
    ActivationScreen.activationSentDialogTitleSuccess,
    10 * 1000
  )
  await commands.findAndClick(SalesScreen.acceptIncomingChange)
  await driver.waitForVisible(SalesScreen.mainViewPage)
  t.pass('Sales screen visible')
  await driver.waitForVisible(SalesScreen.mainViewPage, 5 * 1000)
  await commands.waitAndClick(SalesScreen.homeButton)
  await driver.waitForVisible(ActivationScreen.activationSetting, 5 * 1000)
  t.pass('Activation page visible')
  await commands.waitAndClick(ActivationScreen.requestActivationButton)
  await commands.findAndClick(ActivationScreen.requestActivation)
  await driver.waitForVisible(
    ActivationScreen.activationSentDialogTitleSuccess,
    10 * 1000
  )
  t.pass('Request new activation test complete')
})

test('Activation screen: Update activation status', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.acceptActivationRequest()
  await ActivationScreen.requestActivation(activation)
  await driver.waitForVisible(
    ActivationScreen.activationSentDialogTitleSuccess,
    10 * 1000
  )
  await driver.findAndClick(SalesScreen.acceptIncomingChange)
  await driver.waitForVisible(SalesScreen.mainViewPage, 5 * 1000)
  t.pass('Sales screen visible')
  await commands.waitAndClick(SalesScreen.homeButton)
  await driver.waitForVisible(ActivationScreen.activationSetting, 5 * 1000)
  t.pass('Activation page visible')
  await commands.waitAndClick(ActivationScreen.updateActivationStatus)
  await driver.waitForVisible(ActivationScreen.warmingActivation, 10 * 1000)
  await commands.waitAndClick(SalesScreen.acceptIncomingChange)
  await commands.waitForVisible(SalesScreen.mainViewPage)
  t.pass('Update activation status test complete')
})
/*Выполнить после установки связи с сервером
test('Activation screen: Prolong activation', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.acceptActivationRequest()
  await ActivationScreen.requestActivation(activation)
  await driver.waitForVisible(
    ActivationScreen.activationSentDialogTitleSuccess,
    10 * 1000
  )
  await driver.findAndClick(SalesScreen.acceptIncomingChange)
  await driver.waitForVisible(SalesScreen.mainViewPage, 5 * 1000)
  t.pass('Sales screen visible')
  await commands.waitAndClick(SalesScreen.homeButton)
  await driver.waitForVisible(ActivationScreen.activationSetting, 5 * 1000)
  t.pass('Activation page visible')
  await commands.waitAndClick(ActivationScreen.prolongActivationButton)
  await driver.waitForVisible(ActivationScreen.activationSentDialogTitleSuccess, 10 * 1000)
  await commands.waitAndClick(SalesScreen.acceptIncomingChange)
  await commands.waitForVisible(SalesScreen.mainViewPage)
  t.pass('Update activation status test complete')
})*/
