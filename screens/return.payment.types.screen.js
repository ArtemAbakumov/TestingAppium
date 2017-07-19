import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromAccessId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const ReturnPaymentTypesScreen = {
  returnType: idFromResourceId(appId + 'Return payment types')
  //дописать после добавления COntent Desc
}
