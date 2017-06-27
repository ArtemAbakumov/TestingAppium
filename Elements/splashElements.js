import helper from 'tipsi-appium-helper'

const {
  idFromAccessId,
  idFromText,
  idFromResourceId
  // idFromXPath
} = helper

export const WelcomeScreen = {
  setupWizard: idFromResourceId('android:id/title'),
  welcomeMessage: idFromResourceId('se.mobilkassan:id/message'),
  continueBtn: idFromText('Continue'),
  portraitBtn: idFromResourceId('android:id/button1'),
  landscapeBtn: idFromAccessId('android:id/button2'),
  splashScrn: idFromResourceId('se.mobilkassan:id/splash'),
  home: idFromResourceId('se.mobilkassan:id/home_buttom'),
 
   helpMenu: {
    about: idFromText('About'),
    help: idFromText('Help'),
    reportError: idFromText('Report Error'),
    exportEJournal: idFromText('Export E-journal')
  }
  }