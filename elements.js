import helper from 'tipsi-appium-helper'

const {
  idFromAccessId,
  idFromText,
  idFromResourceId
  // idFromXPath
} = helper

export const WelcomeScreen = {
  setupWizard: idFromResourceId('android:id/content'),
  title: idFromResourceId('se.mobilkassan:id/title_template'),
  continueBtn: idFromText('Continue'),
  orientationTitle: idFromResourceId('android:id/title'),
  orientationWndw: idFromResourceId('se.mobilkassan:id/parentPanel'),
  portraitBtn: idFromResourceId('android:id/button1'),
  landscapeBtn: idFromAccessId('android:id/button2'),
  splashScrn: idFromResourceId('se.mobilkassan:id/splash'),
  licenceBtn: idFromAccessId('License'),  
  homeBtn: idFromResourceId('android:id/home'),
  companiesSettingsBtn: idFromResourceId('se.mobilkassan:id/actionMode_Sellers'),
  helpBtn: idFromAccessId('More options'),
  devWarningMessage: idFromResourceId('se.mobilkassan:id/devWarningLabel'),
 
  activitititle: idFromResourceId('se.mobilkassan:id/activity_title'),
 
  helpMenu: {
    about: idFromText('About'),
    help: idFromText('Help'),
    reportError: idFromText('Report Error'),
    exportEJournal: idFromText('Export E-journal')
  }
  }