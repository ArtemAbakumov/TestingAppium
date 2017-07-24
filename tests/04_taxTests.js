import test from 'tape-async'
import helper from 'tipsi-appium-helper'
import { WelcomeScreen, SalesScreen, Buttons, TaxScreen } from '../screens'
import commands from '../commands'

const { driver } = helper

test.onFinish(async () => {
  await driver.closeApp()
})

const taxContent = {
  nameTax: 'VAT11',
  rateTax: '11'
}

test('createTax;', async t => {
  await WelcomeScreen.goThrough()
  await SalesScreen.rejectActivationRequest()
  await driver.waitForVisible(SalesScreen.incomingChangeDialog, 5 * 1000)
  await driver.element(SalesScreen.acceptIncomingChange).click()
  await commands.findAndClick(SalesScreen.homeButton)
  await TaxScreen.addTaxItem()
  t.pass('Add Tax Dialog opened')
  await TaxScreen.setTax(taxContent)
  t.pass('waitSaveButton')
  await driver.waitForVisible(TaxScreen.vat11Item, 5 * 1000)
  t.pass('Tax VAT11 Created')
})

// test("Remiove tax", async t => {
//   await WelcomeScreen.goThrough();
//   await SalesScreen.acceptActivationRequest();
//   await ActivationScreen.requestActivation(activation);
//   await driver.waitForVisible(
//     ActivationScreen.activationSentDialogTitleSuccess,
//     10 * 1000
//   );
//   await commands.findAndClick(SalesScreen.acceptIncomingChange);
//   await driver.waitForVisible(SalesScreen.mainViewPage);
//   t.pass("Activation screen success test complete");
// });
