import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromText, driver, idFromAccessId } = helper
import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const ArtcleScreen = {
  articleSettings: idFromText('Articles'),
  newArticle: idFromText('New article'),
  listViewSwitch: idFromResourceId(appId + 'Switch_To_Listview'),
  articleName: idFromResourceId(appId + 'productName'),
  editArticleIconButton: idFromResourceId(appId + 'EditProduct_iconButton'),
  takePhotoIcon: idFromResourceId(appId + 'Icon_TakePhoto'),
  getPhoto: idFromResourceId('com.android.camera:id/shutter_button'),
  selectPictureIcon: idFromResourceId(appId + 'Icon_SelectPicture'),
  selectColorIcon: idFromResourceId(app + 'Icon_SelectColor'),
  taxArticle: idFromResourceId(appId + 'EditProduct_TaxSpinner'),
  nettoArticle: idFromResourceId(appId + 'EditProduct_nettoPrice'),
  grossArticle: idFromResourceId(appId + 'EditProduct_bruttoPrice'),
  unitsArticle: idFromResourceId(appId + 'EditProduct_unit'),
  pieceArticleRadioButton: idFromResourceId(appId + 'EditProduct_countByUnit'),
  priceArticleRadioButton: idFromResourceId(appId + 'EditProduct_countByPrice'),
  barcodeArticle: idFromResourceId(appId + 'productBarcode'),
  saveButton: idFromResourceId(appId + 'CrudDialog_buttonSave'),
  cancellButton: idFromText('Cancel'),
  removeArticle: idFromText('Remove')
}
