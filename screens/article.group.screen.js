import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const ArtcleGroupScreen = {
  artileGroupSetting: idFromText('Article groups'),
  newArticleGroup: idFromText('New article group'),
  articleGroup1: idFromText('Article group 1'),
  editArticleGroupIconButton: idFromResourceId(
    appId + 'EditCategory_iconButton'
  ),
  nameArticleGroupInput: idFromResourceId(appId + 'categoryName')
}

//setArticleName: nameArticleGroup => {
//  return commands.setInputValue(ArtcleGroupScreen.nameArticleGroupInput, nameArticleGroup)
// }
//async addArticleGroupIcon() {
// articleGroupIcon => {
//await driver.findAndClick(ArticleGroupScreen.editArticleGroupIconButton)
//
// },/*
//}
