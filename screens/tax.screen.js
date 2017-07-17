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
  CancelButton: idFromResourceId(appId + 'CrudDialog_buttonCancel'),
  SaveButton: idFromResourceId(appId + 'CrudDialog_buttonSave'),
  setTaxName: name => {
    return commands.setInputValue(TaxScreen.VatNameInput, name)
  },
  setTaxRate: rate => {
    return commands.setInputValue(TaxScreen.VatRateInput, rate)
  },
  setTax: async setTaxDialog => {
    if (setTaxDialog.name) {
      await TaxScreen.setTaxName(setTaxDialog.name)
    }
    if (setTaxDialog.rate) {
      await TaxScreen.setTaxRate(setTaxDialog.rate)
    }
    return driver.click(TaxScreen.SaveButton)
  },
  VAT11Item: idFromText('VAT11')
}
