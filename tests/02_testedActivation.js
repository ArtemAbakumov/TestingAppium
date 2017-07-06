import test from 'tape-async'
import helper from 'tipsi-appium-helper'

import { WelcomeScreen } from '../Elements/splashElements'
import { ActivationScreen } from '../Elements/activationElements'
//import {loginAction} from '../tests/loginActivation'

const { driver } = helper

test('ActivationScreen', async (t) => {
await driver.waitForVisible(WelcomeScreen.setupWizard, 60000)
await driver.element(WelcomeScreen.continueBtn).click()
await driver.element(WelcomeScreen.portraitBtn).click()
await driver.pause(5000)
await driver.touchAction({action:'tap', x: 100, y: 300})
await driver.waitForVisible(ActivationScreen.openFormActivation, 60000)
//const alertTitle = await driver.element(ActivationScreen.openFormActivation).getText()
//t.equal(alertTitle, 'Request activation', 'Alert title is correct')
//const alertText = await driver.element(ActivationScreen.activationMessage).getText()
//t.equal(alertText, 'You need to complete activation to use the certified cash register. Do you want to open the activation page now?', 'alertText is correct')
await driver.pause(5000)
await driver.element(ActivationScreen.yesBtn).click()
await driver.waitForVisible(ActivationScreen.merchant,60000)
await driver.touchMove(100, 200)
/*await driver.touchAction ([
        'press',
        { action: 'moveTo', x: 200, y: 0 },
        'release'])*/
//await driver.execute("mobile: scroll", { direction: 'down', element: idFromResourceId(activationElements.sbmtBtn) })
//await driver.submitForm(ActivationScreen.sbmtBtn).click()
//await driver.element(ActivationScreen.corporaiteIdLine).click()
//await driver.deviceKeyEvent(1111184105)
//await driver.sendKeys()
})



    