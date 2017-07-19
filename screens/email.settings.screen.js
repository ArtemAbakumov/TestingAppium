import helper from 'tipsi-appium-helper'

const {
  idFromResourceId,
  idFromText,
  idFromXPath,
  driver,
  idFromAccessId
} = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const EmailScreen = {
  emailSettings: idFromText('Email settings'),
  emailSettingAcceptDialog: idFromResourceId('android:id/content'),
  cannotProcessOrderDialog: idFromText('Can not process the order'),

  acceptEmailSetting() {
    return driver.click(idFromText('Yes'))
  },

  rejectEmailSetting() {
    return driver.click(idFromText('No'))
  },
  useSmtp: idFromResourceId(appId + 'smtp_settings_type_switcher'),
  tlsTypeSmtp: idFromResourceId(appId + 'smtp_server_encryption_tls'),
  sslTypeSmtp: idFromResourceId(appId + 'smtp_server_encryption_ssl'),
  noneTypeSmtp: idFromResourceId(appId + 'smtp_server_encryption_none'),
  serverHost: idFromResourceId(appId + 'smtp_server_host'),
  serverPort: idFromResourceId(appId + 'smtp_server_port'),
  fromServer: idFromResourceId(appId + 'smtp_server_from'),
  usrNameServer: idFromResourceId(appId + 'smtp_server_username'),
  passServer: idFromResourceId(appId + 'smtp_server_password'),
  testEmailServer: idFromResourceId(appId + 'receipt_recipient'),
  editEmailSetting: idFromResourceId(
    appId + 'edit_email_settingsedit_email_settings'
  )
}
