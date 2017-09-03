import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const ArticleScreen = {
  articleSettings: idFromText('Articles'),
  addArticle: idFromText('New article'),
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
  barcodeArticle: idFromResourceId(appId + 'productBarcode'),
  newArticle: idFromText('New Article'),

  openArticle: openArtcl => {
    return driver.findAndClick(ArticleScreen.newArticle)
  },
  setArticleName: nameArticle => {
    return commands.setInputValue(ArticleScreen.articleName, nameArticle)
  },
  setNettoArtcle: nettoPrice => {
    return commands.setInputValue(ArticleScreen.nettoArticle, nettoPrice)
  },
  setBarArtcle: barcode => {
    return commands.setInputValue(ArticleScreen.barcodeArticle, barcode)
  },

  async createArticle() {
    await driver.click(ArticleScreen.articleSettings)
    await commands.waitAndClick(ArticleScreen.articleGroup1)
    return commands.waitAndClick(ArticleScreen.addArticle)
  },
  setArticle: async articleContent => {
    if (articleContent.nameArticle) {
      await driver.clearElement(ArticleScreen.articleName)
      await ArticleScreen.setArticleName(articleContent.nameArticle)
    }
    if (articleContent.nettoPrice) {
      await driver.clearElement(ArticleScreen.nettoArticle)
      await ArticleScreen.setNettoArtcle(articleContent.nettoPrice)
    }
    if (articleContent.barcode) {
      await driver.clearElement(ArticleScreen.barcodeArticle)
      await ArticleScreen.setBarArtcle(articleContent.barcode)
    }
  }
}
