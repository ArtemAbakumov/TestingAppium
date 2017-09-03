import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'
import { Buttons } from '../screens'

const { idFromResourceId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const ArticleGroupScreen = {
  artileGroupSetting: idFromText('Article groups'),
  newArticleGroup: idFromText('New article group'),
  addArGrDialog: idFromResourceId(appId + 'scrollView'),
  articleGroup1: idFromText('Article group1'),
  changedArticleGroup: idFromText('ChangedArticleGroup'),
  editArticleGroupIconButton: idFromResourceId(
    appId + 'EditCategory_iconButton'
  ),
  nameArticleGroupInput: idFromResourceId(appId + 'categoryName'),

  openArticleGroup: openArGr => {
    return driver.findAndClick(ArticleGroupScreen.articleGroup1)
  },
  setArticleGroupName: nameArticleGroup => {
    return commands.setInputValue(
      ArticleGroupScreen.nameArticleGroupInput,
      nameArticleGroup
    )
  },

  async addArticleGrItem() {
    await commands.findAndClick(
      ArticleGroupScreen.artileGroupSetting
    ), await commands.findAndClick(
      ArticleGroupScreen.newArticleGroup
    ), await driver.waitForVisible(ArticleGroupScreen.addArGrDialog)
  },

  setArticleGroup: async articleGroupContent => {
    if (articleGroupContent.nameArticleGroup) {
      await driver.clearElement(ArticleGroupScreen.nameArticleGroupInput)
      await ArticleGroupScreen.setArticleGroupName(
        articleGroupContent.nameArticleGroup
      )
    }
    return Buttons.acceptSaveItems()
  }
}
