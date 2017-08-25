import test from 'tape-async'
import helper from 'tipsi-appium-helper'
import {
  WelcomeScreen,
  SalesScreen,
  Buttons,
  TaxScreen,
  SettingsScreen,
  ArtcleGroupScreen
} from '../screens'
import commands from '../commands'

const { driver } = helper

test.onFinish(async () => {
  await driver.closeApp()
})

const articleGroupContent = {
  nameArticleGroup: 'NewArticleGroup'
}

//async addArticleGroupItem (articleGroupItem){
// await SettingsScreen.openSettings()
// await setArticleGroup
