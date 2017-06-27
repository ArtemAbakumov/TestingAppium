import helper from 'tipsi-appium-helper'

const {
  idFromAccessId,
  idFromText,
  idFromResourceId
  // idFromXPath
} = helper

export const ActivationScreen = {
    openFormActivation: idFromText ('Request activation'),
    activationMessage: idFromResourceId ('se.mobilkassan:id/message'),
    yesBtn: idFromText ('Yes'),
    noBtn: idFromResourceId ('android:id/button2'),
    merchant:idFromText('Merchant'),
    countryLst: idFromResourceId ('se.mobilkassan:id/country_spinner'),
    corporaiteIdLine: idFromResourceId ('se.mobilkassan:id/EditSeller_organizationNumber'),
    merchantNameLine: idFromResourceId ('se.mobilkassan:id/EditSeller_name'),
    addressLine: idFromResourceId ('se.mobilkassan:id/et_device_location_address'),
    zipCodeLine: idFromResourceId ('se.mobilkassan:id/et_device_location_postal_code'),
    cityLine: idFromResourceId ('se.mobilkassan:id/et_device_location_city'),
    invoice: idFromText ('Invoice'),
    contPersonLine: idFromResourceId ('se.mobilkassan:id/et_contact_person_name'),
    phoneNumbLine: idFromResourceId ('se.mobilkassan:id/et_contact_person_phone'),
    emailLine: idFromResourceId ('se.mobilkassan:id/et_contact_person_email'),
    cashregisterName: idFromText ('Cash register'),
    cashregName: idFromResourceId ('se.mobilkassan:id/et_cash_register_name'),
    activeFrom: idFromResourceId('se.mobilkassan:id/et_activation_active_from_button'),
    activeTo: idFromResourceId('se.mobilkassan:id/et_activation_active_to_button'),
    serverTypeLst: idFromResourceId('se.mobilkassan:id/activation_server_type_spinner'),
    synchChBox: idFromResourceId('se.mobilkassan:id/activation_feature_synchronization'),
    contrlUnitChBox: idFromResourceId('se.mobilkassan:id/activation_feature_control_unit'),
    comentLine: idFromResourceId('se.mobilkassan:id/activation_comment'),
    sbmtBtn: idFromResourceId('se.mobilkassan:id/btn_activation_settings_order_request'),
}