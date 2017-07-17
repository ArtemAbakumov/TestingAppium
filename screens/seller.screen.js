import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromText, driver, idFromAccessId } = helper
import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const SellerScreen = {
  sellerSettings: idFromText('Seller'),
  newSeller: idFromText('New seller'),
  editSellerIconButton: idFromResourceId(appId + 'editTreasurerIcon'),
  nameSellerInput: idFromResourceId(appId + 'editTreasurerName'),
  ssnSellerInput: idFromResourceId(appId + 'editTreasurerSsn'),
  pinSellerInput: idFromResourceId(appId + 'editTreasurerPin'),
  saveButton: idFromResourceId(appId + 'CrudDialog_buttonSave'),
  cancellButton: idFromText('Cancel'),
  removeArticle: idFromText('Remove'),
  takePhotoIcon: idFromResourceId(appId + 'Icon_TakePhoto'),
  getPhoto: idFromResourceId('com.android.camera:id/shutter_button'),
  selectPictureIcon: idFromResourceId(appId + 'Icon_SelectPicture')
}
