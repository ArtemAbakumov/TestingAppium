var login
login={
    await driver.waitForVisible(WelcomeScreen.setupWizard, 60000)
await driver.element(WelcomeScreen.continueBtn).click()
await driver.element(WelcomeScreen.portraitBtn).click()
await driver.pause(5000)
await driver.touchAction({action:'tap', x: 100, y: 300})
}