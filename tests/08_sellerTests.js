import test from 'tape-async'
import helper from 'tipsi-appium-helper'
import {
  WelcomeScreen,
  SalesScreen,
  Buttons,
  SellerScreen,
  SettingsScreen,
  TitleBarScreen
} from '../screens'
import commands from '../commands'

const { driver } = helper

test.onFinish(async () => {
  await driver.closeApp()
})

const sellerContent = {
  nameSeller: 'New Seller',
  ssnSeller: '111',
  pinSeller: '123'
}
const changeSellerContent = {
  nameSeller: 'Changed_Seller',
  ssnSeller: '222',
  pinSeller: '321'
}

test('create & remove Seller', async t => {
  await SettingsScreen.openSettings()
  await SellerScreen.addSellerItem()
  t.pass('Add Seller Dialog opened')
  await SellerScreen.setSellerItem(sellerContent)
  await driver.waitForVisible(SellerScreen.newSeller, 5 * 1000)
  t.pass('New Seller Created')
  await driver.touchAction(SellerScreen.newSeller, 'longPress')
  await commands.waitAndClick(Buttons.removeItems)
  await commands.waitForNotExist(SellerScreen.newSeller)
  t.pass('Seller remoted')
})
test('Change Seller', async t => {
  await SellerScreen.createSeller()
  await SellerScreen.openSeller()
  await SellerScreen.setSellerItem(changeSellerContent)
  await driver.waitForVisible(SellerScreen.changedSeller)
  t.pass('Seller Changed')
})
test('check on working pin', async t => {
  await SellerScreen.createSeller()
  t.pass('Seller Created')
  await SettingsScreen.logout()
  t.pass('logout successful')
  await commands.waitAndClick(WelcomeScreen.newSeller)
  await driver.element(Buttons.enterPinInput).click().keys('123')
  t.pass('Pin entered')
  await Buttons.acceptSaveItems()
  await driver.waitForVisible(TitleBarScreen.reportButton)
  t.pass('login successful')
})
