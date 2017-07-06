import helper from 'tipsi-appium-helper'

const { idFromText, driver } = helper

export const SalesScreen = {
  activationRequestDialog: idFromText('Request activation'),

  acceptActivationRequest() {
    return driver.click(idFromText('Yes'))
  },

  rejectActivationRequest() {
    return driver.click(idFromText('No'))
  }
}
