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
  nameArticle: 'NewArticle',
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
  await ArticleScreen.createArticle(articleContent)
  t.pass('Add Article Dialog opened')
  await ArticleScreen.setArticle(articleContent)
  const priceBrutto = await driver.getText(
    helper.idFromResourceId('se.mobilkassan:id/EditProduct_bruttoPrice')
  )
  t.equal(priceBrutto, 125)
  await driver.waitForVisible(ArticleScreen.newArticle, 5 * 1000)
  t.pass('Tax Article is Created')
  await driver.touchAction(ArticleScreen.newArticle, 'longPress')
  await commands.waitAndClick(Buttons.removeItems)
  await commands.waitForNotExist(ArticleScreen.newArticle)
  t.pass('Article group remoted')
})

test('Change Article', async t => {
  await SettingsScreen.openSettings()
  await ArticleScreen.addArticleGrItem()
  t.pass('Add Article Group Dialog opened')
  await ArticleScreen.setArticle(articleContent)
  await driver.waitForVisible(ArticleGroupScreen.article1, 5 * 1000)
  t.pass('Tax ArticleGroup 1 is Created')
  await ArticleScreen.openArticle()
  await ArticleScreen.setArticle(changeArticleContent)
  await driver.waitForVisible(ArticleGroupScreen.changeArticleContent)
  t.pass('Article Group changed')
})
