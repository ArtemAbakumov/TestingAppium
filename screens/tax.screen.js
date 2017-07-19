import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const TaxScreen = {
  TaxClasses: idFromText('Tax classes'),
  NewItem: idFromText('New tax'),
  VatNameInput: idFromResourceId(appId + 'vatName'),
  VatRateInput: idFromResourceId(appId + 'vatRate'),

  setTaxName: nameTax => {
    return commands.setInputValue(TaxScreen.VatNameInput, nameTax)
  },
  setTaxRate: rateTax => {
    return commands.setInputValue(TaxScreen.VatRateInput, rateTax)
  },
  setTax: async setTaxDialog => {
    if (setTaxDialog.nameTax) {
      await TaxScreen.setTaxName(setTaxDialog.nameTax)
    }
    if (setTaxDialog.rateTax) {
      await TaxScreen.setTaxRate(setTaxDialog.rateTax)
    }
    return driver.click(TaxScreen.SaveButton)
  },
  VAT11Item: idFromText('VAT11')
}
