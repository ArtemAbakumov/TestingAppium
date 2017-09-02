import test from 'tape-async'
import helper from 'tipsi-appium-helper'
import {
  WelcomeScreen,
  SalesScreen,
  Buttons,
  SettingsScreen,
  ArticleScreen
} from '../screens'
import commands from '../commands'

const { driver } = helper

test.onFinish(async () => {
  await driver.closeApp()
})

const articleContent = {
  nameArticle: 'NewArticleGroup',
  nettoPrice: '100',
  grossPrice: '125',
  barcode: '123456'
}

const changeArticleContent = {
  nameArticle: 'NewArticleGroupChange',
  nettoPrice: '200',
  grossPrice: '250',
  barcode: '111111'
}
test('create & remove Article', async t => {
  await SettingsScreen.openSettings()
  await ArticleScreen.createArticle(articleGroupContent)
  t.pass('Add Article Group Dialog opened')
  await ArticleGroupScreen.setArticleGroup(articleGroupContent)
  await driver.waitForVisible(ArticleGroupScreen.articleGroup1, 5 * 1000)
  t.pass('Tax ArticleGroup 1 is Created')
  await driver.touchAction(ArticleGroupScreen.articleGroup1, 'longPress')
  await commands.waitAndClick(Buttons.removeItems)
  await commands.waitForNotExist(ArticleGroupScreen.articleGroup1)
  t.pass('Article group remoted')
})

test('Change Article', async t => {
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
