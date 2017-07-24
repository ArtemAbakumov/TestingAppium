import helper from 'tipsi-appium-helper'
import { findInList } from '../commands'

const { idFromResourceId, idFromAccessId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const KeyboardsScreen = {
  screensSettings: idFromText('Screens'),

  newScreen: idFromText('New screen'),
  nameScreen: idFromResourceId(appId + 'EditKeyboard_name'),
  classicViewSwitch: idFromResourceId(appId + 'classicLayoutSwitch'),
  landscapeLayoutSwitch: idFromResourceId(appId + 'landscapeLayoutSwitch'),
  resizeScreen: idFromAccessId('Resizing'),
  actionScreen: idFromAccessId('Screen actions'),
  editKeyboardAction: idFromResourceId(appId + 'EditKeyboardActivity_Keyboard'), //не получается выбрать определенную ячейку для добавления кнопки
  articlesButtonsList: idFromText('Articles'),
  nummericButtonsList: idFromText('Numeric buttons'),
  addIntegerKeypad: idFromResourceId(appId + 'addNumPadIntegerKeyboard'),
  addDecimalKeypad: idFromResourceId(appId + 'addNumPadDecimalKeyboard'),
  addNumericIndicator: idFromResourceId(appId + 'addNumericIndicator'),
  addNumeric7: idFromResourceId(appId + '/addNumeric7'),
  addNumeric8: idFromResourceId(appId + '/addNumeric8'),
  addNumeric9: idFromResourceId(appId + '/addNumeric9'),
  addNumeric4: idFromResourceId(appId + '/addNumeric4'),
  addNumeric5: idFromResourceId(appId + '/addNumeric5'),
  addNumeric6: idFromResourceId(appId + '/addNumeric6'),
  addNumeric1: idFromResourceId(appId + '/addNumeric1'),
  addNumeric2: idFromResourceId(appId + '/addNumeric2'),
  addNumeric3: idFromResourceId(appId + '/addNumeric3'),
  addNumeric0: idFromResourceId(appId + '/addNumeric0'),
  addNumeric00: idFromResourceId(appId + '/addNumeric00'),
  addNumericDot: idFromResourceId(appId + 'addNumericDot'),
  addAmountButton: idFromResourceId(appId + 'addNumericDollar'),
  addQuantity: idFromResourceId(appId + 'addNumappIdericHash'),
  addClearingButton: idFromResourceId(appId + 'addNumericC'),
  addUndoingdigitButton: idFromResourceId(appId + 'addNumericBackspace'),
  paymentsButtonsList: idFromText('Payment buttons'),
  cashPayButton: idFromResourceId(appId + 'aaddInitSaleCash'),
  cardPayButton: idFromResourceId(appId + 'addInitSaleCard'),
  cashFastPayButton: idFromResourceId(appId + 'addPayCashAndPrint'),
  cardFastPayButton: idFromResourceId(appId + 'addPayCardAndPrint'),
  airPayPayButton: idFromResourceId(appId + 'addInitSaleAirpay'),
  airPayFastPayButton: idFromResourceId(appId + 'addPayTerminalAndPrint'),
  iZettlePayButton: idFromResourceId(appId + 'addInitSaleIZettlePayment'),
  swishPayButton: idFromResourceId(appId + 'addInitSaleSwishPayment'),
  discountButtonsList: idFromText('Discounts and returns'),
  refundButton: idFromResourceId(appId + 'addInitiateReturn'),
  discountButton: idFromResourceId(appId + 'addDiscountPercent'),
  articleControlList: idFromText('List of article controls'),
  searchArticleList: idFromResourceId(appId + 'addProductsSearchView'),
  verticalGroupsArticleList: idFromResourceId(
    appId + 'addGroupsProductsViewHorizontal'
  ),
  verticalTextViewArtcle: idFromResourceId(appId + 'addGroupsProductsViewText'),
  horizontalGroupsArticleList: idFromResourceId(
    appId + 'addGroupsProductsViewVertical'
  ),
  receiptControlList: idFromText('Receipt control'),
  saleList: idFromResourceId(appId + 'addSaleItemsView'),
  lastAddedArticleView: idFromResourceId(appId + 'addLastProductView'),
  totalPriceView: idFromResourceId(appId + 'subtotalLayout'),
  reseiptButtonsList: idFromText('Receipt buttons'),
  cancelReceiptButton: idFromResourceId(appId + 'addNewReceiptView'),
  newReceiptButton: idFromResourceId(appId + 'addNewReceiptView'),
  startedReceiptButton: idFromResourceId(appId + 'addStartedReceiptsView'),
  printCopyReceiptButton: idFromResourceId(appId + 'addPrintReceiptView'),
  othersbuttonsList: idFromText('Others'),
  addCameraButton: idFromResourceId(appId + 'addCameraView'),
  printProformaButton: idFromResourceId(appId + 'addPrintProforma'),
  networkStatusButton: idFromResourceId(appId + 'addNetworkIndicator')
}
