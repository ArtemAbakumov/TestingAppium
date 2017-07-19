import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const AdministratoProtectionScreen = {
  adminProtectSetting: idFromText('Administrator Protection'),
  adminProtectSwitch: idFromResourceId(appId + 'settings_password_switch'),
  taxProtect: idFromResourceId(appId + 'password_checkbox_tax'),
  groupProtect: idFromResourceId(appId + 'password_checkbox_category'),
  articleProtect: idFromResourceId(appId + 'password_checkbox_product'),
  keyboardProtect: idFromResourceId(appId + 'password_checkbox_keyboard'),
  sellerProtect: idFromResourceId(appId + 'password_checkbox_treasurer'),
  receiptProtect: idFromResourceId(appId + 'password_checkbox_receipt'),
  emailProtect: idFromResourceId(appId + 'password_checkbox_smtp'),
  backupProtect: idFromResourceId(appId + 'password_checkbox_backup'),
  newPasswordInput: idFromResourceId(appId + 'settings_passsword_new'),
  repeatNewPasswordInput: idFromResourceId(
    appId + 'settings_passsword_repeat_new'
  ),
  oldPasswordInput: idFromResourceId(appId + 'settings_passsword_old'),
  savePassword: idFromResourceId(appId + 'settings_password_save_button'),
  passwordDialog: idFromText('Enter PIN:'),
  passwordDialogInput: idFromResourceId(appId + 'admin_pwd_edit_text'),
  acceptDialogadminPassword() {
    return driver.click(idFromResourceId(appId + 'admin_password_dialog_ok'))
  },
  rejectDialogAdminPassword() {
    return driver.click(
      idFromResourceId(appId + 'admin_password_dialog_cancel')
    )
  }
}
