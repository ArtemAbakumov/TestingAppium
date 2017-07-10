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
    ActivationScreen.activationSentDialogTitleFailed,
    10 * 1000
  )
  t.pass('works correctly')
})

test('Activation screen: merchant naame validation', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.acceptActivationRequest()
  await ActivationScreen.setMerchantName('A long merchant name with 20 symbols')
  await driver.waitForVisible(
    ActivationScreen.activationSentDialogTitleFailed,
    10 * 1000
  )
  t.pass('works correctly')
})
