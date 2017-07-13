import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromText, driver } = helper
import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const ActivationScreen = {
  activationSetting: idFromText('Activation'),
  requestActivationButton: idFromResourceId(
    appId + 'btn_activation_settings_order_new_control_unit'
  ),
  updateActivationStatus: idFromResourceId(
    appId + 'btn_activation_settings_check_activation_status'
  ),
  prolongActivationButton: idFromResourceId(
    appId + 'btn_activation_settings_prolongation'
  ),
  warmingActivation: idFromText('Waiting for approve'),
  corporateIDInput: idFromResourceId(appId + 'EditSeller_organizationNumber'),
  merchantNameInput: idFromResourceId(appId + 'EditSeller_name'),
  addressInput: idFromResourceId(appId + 'et_device_location_address'),
  zipCodeInput: idFromResourceId(appId + 'et_device_location_postal_code'),
  cityInput: idFromResourceId(appId + 'et_device_location_city'),
  contactPersonNameInput: idFromResourceId(appId + 'et_contact_person_name'),
  contactPersonPhoneInput: idFromResourceId(appId + 'et_contact_person_phone'),
  contactPersonEmailInput: idFromResourceId(appId + 'et_contact_person_email'),
  cashRegisterNameInput: idFromResourceId(appId + 'et_cash_register_name'),
  activateFromButton: idFromResourceId(
    appId + 'et_activation_active_from_button'
  ),
  activateToButton: idFromResourceId(appId + 'et_activation_active_to_button'),
  serverTypeDropdown: idFromResourceId(
    appId + 'activation_server_type_spinner'
  ),
  synchronizationCheckbox: idFromResourceId(
    appId + 'activation_feature_synchronization'
  ),
  controlUnitCheckbox: idFromResourceId(
    appId + 'activation_feature_control_unit'
  ),
  commentInput: idFromResourceId(appId + 'activation_comment'),
  submitButton: idFromResourceId(
    appId + 'btn_activation_settings_order_request'
  ),
  activationSentDialogTitleSuccess: idFromText(
    'Activation request has been sent'
  ),
  activationSentDialogTitleFailed: idFromText('Request failed'),

  setCorporateID: id => {
    return commands.setInputValue(ActivationScreen.corporateIDInput, id)
  },

  setMerchantName: name => {
    return commands.setInputValue(ActivationScreen.merchantNameInput, name)
  },

  setAddress: address => {
    return commands.setInputValue(ActivationScreen.addressInput, address)
  },

  setZipCode: zipCode => {
    return commands.setInputValue(ActivationScreen.zipCodeInput, zipCode)
  },

  setCity: city => {
    return commands.setInputValue(ActivationScreen.cityInput, city)
  },

  setContactPersonName: name => {
    return commands.setInputValue(ActivationScreen.contactPersonNameInput, name)
  },

  setContactPersonPhone: phone => {
    return commands.setInputValue(
      ActivationScreen.contactPersonPhoneInput,
      phone
    )
  },

  setContactPersonEmail: email => {
    return commands.setInputValue(
      ActivationScreen.contactPersonEmailInput,
      email
    )
  },

  setCashRegisterName: name => {
    return commands.setInputValue(ActivationScreen.cashRegisterNameInput, name)
  },

  toggleFeatureSync: () => {
    return commands.findAndClick(ActivationScreen.synchronizationCheckbox)
  },

  toggleFeatureControlUnit: () => {
    return commands.findAndClick(ActivationScreen.controlUnitCheckbox)
  },

  setComment: comment => {
    return commands.setInputValue(ActivationScreen.commentInput, comment)
  },

  requestActivation: async activation => {
    if (activation.corporateId) {
      await ActivationScreen.setCorporateID(activation.corporateId)
    }
    if (activation.merchantName) {
      await ActivationScreen.setMerchantName(activation.merchantName)
    }
    if (activation.address) {
      await ActivationScreen.setAddress(activation.address)
    }
    if (activation.zipCode) {
      await ActivationScreen.setZipCode(activation.zipCode)
    }
    if (activation.city) {
      await ActivationScreen.setCity(activation.city)
    }
    if (activation.contactPersonName) {
      await ActivationScreen.setContactPersonName(activation.contactPersonName)
    }
    if (activation.contactPersonPhone) {
      await ActivationScreen.setContactPersonPhone(
        activation.contactPersonPhone
      )
    }
    if (activation.contactPersonEmail) {
      await ActivationScreen.setContactPersonEmail(
        activation.contactPersonEmail
      )
    }
    if (activation.cashRegisterName) {
      await ActivationScreen.setCashRegisterName(activation.cashRegisterName)
    }
    if (activation.featureSync) {
      await ActivationScreen.toggleFeatureSync(activation.featureSync)
    }
    if (activation.featureCU) {
      await ActivationScreen.toggleFeatureControlUnit(activation.featureCU)
    }
    if (activation.comment) {
      await ActivationScreen.setComment(activation.comment)
    }
    await findInList(ActivationScreen.submitButton)

    return driver.click(ActivationScreen.submitButton)
  }
}
