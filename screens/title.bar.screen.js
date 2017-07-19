import helper from 'tipsi-appium-helper'

const { idFromResourceId, idFromText, idFromXPath, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const TitleBarScreen = {
  reportButton: idFromResourceId(appId + 'actionMode_Reports'),
  zReport: idFromText('Close day (Z-dayreport)'),
  xReport: idFromText('So far today (X-dayreport)'),
  dayReport: idFromText('Report by date'),
  previousDay: idFromText('Previous Days'),
  exportSIE: idFromText('Export to SIE')
}
