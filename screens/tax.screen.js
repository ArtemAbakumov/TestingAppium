import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'
import { Buttons } from '../screens'

const { idFromResourceId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const TaxScreen = {
  taxClasses: idFromText('Tax classes'),
  newTax: idFromText('New tax'),
  addTaxDialog: idFromResourceId(appId + 'scrollView'),
  vatNameInput: idFromResourceId(appId + 'vatName'),
  vatRateInput: idFromResourceId(appId + 'vatRate'),
  vat11Item: idFromText('VAT11'),

  setTaxName: nameTax => {
    return commands.setInputValue(TaxScreen.vatNameInput, nameTax)
  },
  setTaxRate: rateTax => {
    return commands.setInputValue(TaxScreen.vatRateInput, rateTax)
  },

  async addTaxItem() {
    await commands.findAndClick(TaxScreen.taxClasses)
    await commands.findAndClick(TaxScreen.newTax)
    await driver.waitForVisible(TaxScreen.addTaxDialog)
  },
  setTax: async taxContent => {
    if (taxContent.nameTax) {
      await TaxScreen.setTaxName(taxContent.nameTax)
    }
    if (taxContent.rateTax) {
      await TaxScreen.setTaxRate(taxContent.rateTax)
    }
    return commands.findAndClick(Buttons.saveButton)
  }
}
