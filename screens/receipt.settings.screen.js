import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromText } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const ReceiptSettings = {
  receiptSettings: idFromText('Receipt settings'),
  topTextReceiptInput: idFromResourceId(appId + 'EditReceiptSettings_textTop'),
  bottomTextReceiptInput: idFromResourceId(
    appId + 'EditReceiptSettings_textBottom'
  ),
  merchantReceiptCheckbox: idFromResourceId(
    appId + 'printRefundMerchantReceipt_cbox'
  ),
  showCompNameChbox: idFromResourceId(appId + 'showCompanyName_cbox'),
  showCompLogoChbox: idFromResourceId(appId + 'showLogo_cbox'),
  printReceiptChbox: idFromResourceId(appId + 'activate_print'),
  emailReceiptChbox: idFromResourceId(appId + 'activate_email'),
  silentEmailReceiptChbox: idFromResourceId(appid + 'activate_silent_email'),
  sizeLogo: idFromResourceId(appId + 'logoSize_sbar'),
  chooseLogo: idFromResourceId(appId + 'EditReceiptSettings_iconButton')
}
