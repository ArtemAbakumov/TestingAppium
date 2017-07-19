import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const Buttons = {
  removeArticlegroup: idFromText('Remove'),
  submitButton: idFromText('Ok'),
  cancelButton: idFromText('Cancel'),
  nextButton: idFromText('Next'),
  previousButton: idFromText('Previous'),
  regectSaveItems() {
    return driver.click(idFromText('Cancel'))
  },
  acceptSaveItems() {
    return driver.click(idFromResourceId(appId + 'CrudDialog_buttonSave'))
  },
  selectColorIcon: idFromResourceId(appId + 'Icon_SelectColor'),
  takePhotoIcon: idFromResourceId(appId + 'Icon_TakePhoto'),
  getPhoto: idFromResourceId('com.android.camera:id/shutter_button'),
  selectPictureIcon: idFromResourceId(appId + 'Icon_SelectPicture')
}
