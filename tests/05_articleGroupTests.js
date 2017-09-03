import test from 'tape-async'
import helper from 'tipsi-appium-helper'
import {
  WelcomeScreen,
  SalesScreen,
  Buttons,
  SettingsScreen,
  ArticleGroupScreen
} from '../screens'
import commands from '../commands'

const { driver } = helper

test.onFinish(async () => {
  await driver.closeApp()
})

const articleGroupContent = {
  nameArticleGroup: 'NewArticleGroup'
}
const changeArticleGroupContent = {
  nameArticleGroupChange: 'ChangedArticleGroup'
}
test('create & remove ArticleGroup', async t => {
  await SettingsScreen.openSettings()
  await ArticleGroupScreen.addArticleGrItem()
  t.pass('Add Article Group Dialog opened')
  await ArticleGroupScreen.setArticleGroup(articleGroupContent)
  await driver.waitForVisible(ArticleGroupScreen.articleGroup1, 5 * 1000)
  t.pass('Tax NewArticleGroup is Created')
  await driver.touchAction(ArticleGroupScreen.articleGroup1, 'longPress')
  await commands.waitAndClick(Buttons.removeItems)
  await commands.waitForNotExist(ArticleGroupScreen.articleGroup1)
  t.pass('Article group remoted')
})

test('Change Article Group', async t => {
  await SettingsScreen.openSettings()
  await ArticleGroupScreen.addArticleGrItem()
  t.pass('Add Article Group Dialog opened')
  await ArticleGroupScreen.setArticleGroup(articleGroupContent)
  await driver.waitForVisible(ArticleGroupScreen.articleGroup1, 5 * 1000)
  t.pass('Tax ArticleGroup 1 is Created')
  await ArticleGroupScreen.openArticleGroup()
  await ArticleGroupScreen.setArticleGroup(changeArticleGroupContent)
  await driver.waitForVisible(ArticleGroupScreen.changeArticleGroupContent)
  t.pass('Article Group changed')
})
