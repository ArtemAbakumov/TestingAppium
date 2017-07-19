import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const ArtcleScreen = {
  articleSettings: idFromText('Articles'),
  newArticle: idFromText('New article'),
  async createArticle() {
    await driver.click(ArticleScreen.articleSettings)
    await commands.waitAndClick(ArticleScreen.articleGroup1)
    return commands.waitAndClick(ArticleScreen.newArticle)
  },
  articleGroup1: idFromText('Article group 1'),
  listViewSwitch: idFromResourceId(appId + 'Switch_To_Listview'),
  articleName: idFromResourceId(appId + 'productName'),
  editArticleIconButton: idFromResourceId(appId + 'EditProduct_iconButton'),
  taxArticle: idFromResourceId(appId + 'EditProduct_TaxSpinner'),
  nettoArticle: idFromResourceId(appId + 'EditProduct_nettoPrice'),
  grossArticle: idFromResourceId(appId + 'EditProduct_bruttoPrice'),
  unitsArticle: idFromResourceId(appId + 'EditProduct_unit'),
  pieceArticleRadioButton: idFromResourceId(appId + 'EditProduct_countByUnit'),
  priceArticleRadioButton: idFromResourceId(appId + 'EditProduct_countByPrice'),
  barcodeArticle: idFromResourceId(appId + 'productBarcode')
}
