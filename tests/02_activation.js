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
  contactPersonName: 'Alex',
  contactPersonPhone: 88005553535,
  contactPersonEmail: 'alex@mail.ru',
  cashRegisterName: 'casher',
  featureSync: true,
  featureCU: false,
  comment: 'comment here'
}

test.onFinish(async () => {
  await driver.closeApp()
})

test('Activation screen', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.acceptActivationRequest()
  await ActivationScreen.requestActivation(activation)
  await driver.waitForVisible(
    ActivationScreen.activationSentDialogTitleFailed,
    10 * 1000
  )
  t.pass('works correctly')
})

test('Activation screen', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.acceptActivationRequest()
  await commands.findAndClick(ActivationScreen.submitButton)
  const alertTitle = await driver
    .element(ActivationScreen.merchantNameInput)
    .getText()
  t.equal(
    alertTitle,
    'Please enter a Company name, at least 3 characters ',
    'Alert title is correct'
  )
  await commands.waitForVisible(ActivationScreen.addressInput)
  t.pass('work correctly')
})
