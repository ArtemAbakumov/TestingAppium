import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const SellerScreen = {
  sellerSettings: idFromText('Seller'),
  newSeller: idFromText('New seller'),
  editSellerIconButton: idFromResourceId(appId + 'editTreasurerIcon'),
  nameSellerInput: idFromResourceId(appId + 'editTreasurerName'),
  ssnSellerInput: idFromResourceId(appId + 'editTreasurerSsn'),
  pinSellerInput: idFromResourceId(appId + 'editTreasurerPin')
}
