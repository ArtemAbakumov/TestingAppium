import helper from 'tipsi-appium-helper'

const {
  idFromResourceId,
  idFromText,
  idFromXPath,
  driver,
  idFromAccessId
} = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const SalesScreen = {
  activationRequestDialog: idFromText('Request activation'),

  acceptActivationRequest() {
    return driver.click(idFromText('Yes'))
  },

  rejectActivationRequest() {
    return driver.click(idFromText('No'))
  },

  incomingChangeDialog: idFromText('New day'),
  acceptIncomingChange: idFromText('OK'),

  mainViewPage: idFromResourceId(appId + 'Main_ViewPager'),
  homeButton: idFromResourceId(appId + 'activity_title'),
  receiptButton: idFromResourceId(appId + 'actionMode_Receipts'),
  productSearchLineInput: idFromResourceId(appId + 'productSearch'),
  productSearchList: idFromResourceId(appId + 'ProductsSearch_list'),
  refundReceiptButton: idFromXPath(
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.support.v4.view.ViewPager/android.view.ViewGroup/android.widget.RelativeLayout[2]'
  ),
  discountReceiptButton: idFromXPath(
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.support.v4.view.ViewPager/android.view.ViewGroup/android.widget.RelativeLayout[3]'
  ),
  cashSaleButton: idFromXPath(
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.support.v4.view.ViewPager/android.view.ViewGroup/android.widget.RelativeLayout[4]'
  ),
  airPaySaleButton: idFromXPath(
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.support.v4.view.ViewPager/android.view.ViewGroup/android.widget.RelativeLayout[5]'
  ),
  helpMenuButton: idFromAccessId('More options'),

  exportSIEtoast: idFromText('You have no sales yet')
}
