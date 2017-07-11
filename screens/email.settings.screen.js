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
  emailSettingAcceptDialog: idFromResourceId('android:id/content'),
  cannotProcessOrderDialog: idFromText('Can not process the order'),

  acceptEmailSetting() {
    return driver.click(idFromText('Yes'))
  },

  rejectEmailSetting() {
    return driver.click(idFromText('No'))
  }
}
