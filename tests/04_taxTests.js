import test from 'tape-async'
import helper from 'tipsi-appium-helper'
import {
  WelcomeScreen,
  SalesScreen,
  Buttons,
  TaxScreen,
  SettingsScreen
} from '../screens'
import commands from '../commands'

const { driver } = helper

test.onFinish(async () => {
  await driver.closeApp()
})

const taxContent = {
  nameTax: 'VAT11',
  rateTax: '11'
}
const changeTaxContent = {
  nameTax: 'VAT23',
  rateTax: '23'
}

test('create & remove Tax', async t => {
  await SettingsScreen.openSettings()
  await TaxScreen.addTaxItem()
  t.pass('Add Tax Dialog opened')
  await TaxScreen.setTax(taxContent)
  t.pass('Tax created')
  await driver.waitForVisible(TaxScreen.vat11Item, 5 * 1000)
  t.pass('Tax VAT11 Created')
  await driver.touchAction(TaxScreen.vat11Item, 'longPress')
  await commands.waitAndClick(Buttons.removeItems)
  await commands.waitForNotExist(TaxScreen.vat11Item)
  t.pass('Tax remoted')
})

test('change Tax', async t => {
  await SettingsScreen.openSettings()
  await TaxScreen.addTaxItem()
  t.pass('Add Tax Dialog opened')
  await TaxScreen.setTax(taxContent)
  t.pass('Tax created')
  await driver.waitForVisible(TaxScreen.vat11Item, 5 * 1000)
  t.pass('Tax VAT11 Created')
  await TaxScreen.openTax()
  await TaxScreen.setTax(changeTaxContent)
  await driver.waitForVisible(TaxScreen.vat23Item)
  t.pass('Tax changed')
})
