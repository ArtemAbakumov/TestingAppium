import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromText, driver, idFromAccessId } = helper
import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const ArtcleGroupScreen = {
  artileGroupSetting: idFromText('Article groups'),
  newArticleGroup: idFromText('New article group'),
  articleGroup1: idFromText('Article group 1'),
  editArticleGroupIconButton: idFromResourceId(
    appId + 'EditCategory_iconButton'
  ),
  nameArticleGroupInput: idFromResourceId(appId + 'categoryName'),
  saveButton: idFromResourceId(appId + 'CrudDialog_buttonSave'),
  cancellButton: idFromText('Cancel'),
  okButton: idFromText('Ok'),
  takePhotoIcon: idFromResourceId(appId + 'Icon_TakePhoto'),
  getPhoto: idFromResourceId('com.android.camera:id/shutter_button'),
  selectPictureIcon: idFromResourceId(appId + 'Icon_SelectPicture'),
  selectColorIcon: idFromResourceId(app + 'Icon_SelectColor'),
  removeArticlegroup: idFromText('Remove')
}
