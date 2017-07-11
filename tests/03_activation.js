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
  await ActivationScreen.acceptActivationRequest()
  await driver.waitForVisible(SalesScreen.mainViewPage)
  t.pass('works correctly')
})

test('Activation screen', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.acceptActivationRequest()
  await ActivationScreen.requestActivation(activation)
  await driver.waitForVisible(
    ActivationScreen.activationSentDialogTitleSuccess,
    10 * 1000
  )
  await ActivationScreen.acceptActivationRequest()
  await driver.waitForVisible(SalesScreen.mainViewPage)
  t.pass('Sales screen visible')
  await driver.waitForVisible(SalesScreen.mainViewPage, 5 * 1000)
  await driver.element(SalesScreen.homeButton).click()
  await driver.waitForVisible(ActivationScreen.activationSetting, 5 * 1000)
  t.pass('Activation page visible')
  await driver.element(ActivationScreen.requestActivationButton).click()
  await commands.findAndClick(ActivationScreen.requestActivation)
  await driver.waitForVisible(
    ActivationScreen.activationSentDialogTitleSuccess,
    10 * 1000
  )
})
