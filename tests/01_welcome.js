import test from 'tape-async'
import helper from 'tipsi-appium-helper'
import { WelcomeScreen } from '../screens'

const { driver } = helper

test.onFinish(async () => {
  await driver.closeApp()
})

test('Welcome screen', async t => {
  await WelcomeScreen.goThrough()
  t.pass('works correctly')
})
