import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const ArticleScreen = {
  articleSettings: idFromText('Articles'),
  newArticle: idFromText('New article'),

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

  setArticleName: nameArticle => {
    return commands.setInputValue(ArticleScreen.articleName, nameArticle)
  },
  setNettoArtcle: nettoSum => {
    return commands.setInputValue(ArticleScreen.nettoArticle, nettoSum)
  },
  setBarArtcle: barArticle => {
    return commands.setInputValue(ArticleScreen.barcodeArticle, barArticle)
  },

  async createArticle() {
    await driver.click(ArticleScreen.articleSettings)
    await commands.waitAndClick(ArticleScreen.articleGroup1)
    return commands.waitAndClick(ArticleScreen.newArticle)
  },
  setArticle: async addArticle => {
    if (articleContent.nameArticle) {
      await driver.clearElement(ArticleScreen.articleName)
      await ArticleScreen.setArticleName(articleContent.nameArticle)
    }
    if (articleContent.nettoPrice) {
      await driver.clearElement(ArticleScreen.nettoArticle)
      await ArticleScreen.setNettoArtcle(articleContent.nameArticle)
    }
    if (articleContent.barcode) {
      await driver.clearElement(ArticleScreen.barcodeArticle)
      await ArticleScreen.setBarArtcle(articleContent.barcodeArticle)
    }
  }
}
