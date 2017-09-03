import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'
import { Buttons, SettingsScreen, SalesScreen, WelcomeScreen } from '../screens'

const { idFromResourceId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

const sellerContent = {
  nameSeller: 'New Seller',
  ssnSeller: '111',
  pinSeller: '123'
}

export const SellerScreen = {
  sellerSettings: idFromText('Seller'),
  addSeller: idFromText('New seller'),
  editSellerIconButton: idFromResourceId(appId + 'editTreasurerIcon'),
  nameSellerInput: idFromResourceId(appId + 'editTreasurerName'),
  ssnSellerInput: idFromResourceId(appId + 'editTreasurerSsn'),
  pinSellerInput: idFromResourceId(appId + 'editTreasurerPin'),
  newSeller: idFromText('New Seller'),
  addSellerDialog: idFromResourceId(appId + 'scrollView'),
  changedSeller: idFromText('Changed_Seller'),

  openSeller: sellerOpened => {
    return commands.findAndClick(SellerScreen.newSeller)
  },

  setSellerName: nameSeller => {
    return commands.setInputValue(SellerScreen.nameSellerInput, nameSeller)
  },
  setSsnSeller: ssnSeller => {
    return commands.setInputValue(SellerScreen.ssnSellerInput, ssnSeller)
  },
  setPinSeller: pinSeller => {
    return commands.setInputValue(SellerScreen.pinSellerInput, pinSeller)
  },

  async addSellerItem() {
    await commands.findAndClick(SellerScreen.sellerSettings)
    await commands.findAndClick(SellerScreen.addSeller)
    await driver.waitForVisible(SellerScreen.addSellerDialog)
  },
  setSellerItem: async sellerContent => {
    if (sellerContent.nameSeller) {
      await driver.clearElement(SellerScreen.nameSellerInput)
      await SellerScreen.setSellerName(sellerContent.nameSeller)
    }
    if (sellerContent.ssnSeller) {
      await driver.clearElement(SellerScreen.ssnSellerInput)
      await SellerScreen.setSsnSeller(sellerContent.ssnSeller)
    }
    if (sellerContent.pinSeller) {
      await driver.clearElement(SellerScreen.pinSellerInput)
      await SellerScreen.setPinSeller(sellerContent.pinSeller)
    }
    return Buttons.acceptSaveItems()
  },
  async createSeller() {
    await SettingsScreen.openSettings()
    await SellerScreen.addSellerItem()
    await SellerScreen.setSellerItem(sellerContent)
    await driver.waitForVisible(SellerScreen.newSeller, 5 * 1000)
  }
}
