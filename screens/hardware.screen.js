import helper from 'tipsi-appium-helper'
import { Buttons } from '../screens'

const { idFromResourceId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const HardwareScreen = {
  hardwareSettings: idFromText('Hardware settings'),
  addHardware: idFromResourceId(appId + 'hardware_add_new'),
  addHardwareDialog: idFromText('Add hardware'),
  terminalRadioButton: idFromText('Payment terminal'),
  veryfoneTerminal: idFromText('Verifone VX680'),
  interpayTerminal: idFromText('Interpay'),
  netsTerminal: idFromText('Nets'),
  payExTerminal: idFromText('PayEx'),
  payworksTerminal: idFromText('Direct2Internet'),

  addTerminalDialog: idFromResourceId(appId + 'scrollView'),
  nameTerminalInput: idFromResourceId(appId + 'terminal_settings_name'),
  terminalAddress: idFromResourceId(appId + 'terminal_settings_address'),
  merchIdInput: idFromResourceId(appId + 'terminal_settings_merchant_id'),
  merchSecretInput: idFromResourceId(
    appId + 'terminal_settings_merchant_secret'
  ),
  pauseReceipt: idFromResourceId(appId + 'pause_between_prints'),
  useUsPrinterChbox: idFromResourceId(
    appId + 'terminal_settings_use_as_printer'
  ),
  useUsDefaultPrinterChbox: idFromResourceId(
    appId + 'terminal_settings_use_as_default_printer'
  ),
  addBtTerminalDialog: idFromText('Select a paired terminal'),
  printMerchReceiptChbox: idFromResourceId(
    appId + 'terminal_settings_print_merchant_receipt'
  ),

  printerRadioButton: idFromText('Printer'),
  netPrinter: idFromText('Network'),
  customPrinter: idFromText('Custom'),
  birchPrinter: idFromText('Birch'),
  addNetPrinterDialog: idFromResourceId(appId + 'CrudDialog_mainLayout'),
  nameNetPrinterInput: idFromResourceId(appId + 'printerName'),
  addressNetPrinterInput: idFromResourceId(appId + 'printerAddress'),
  widthNetPrinterInput: idFromResourceId(appId + 'printerWidth'),
  defaultPrinterChbox: idFromResourceId(appId + 'isDefault'),

  serialPrinter: idFromText('Serial'),
  epsonPrinter: idFromText('Epson'),
  //форма добавления сериал принтера не видима в automator

  btPrinter: idFromText('Serial'),
  addBtprinterDialog: idFromText('Add Bluetooth device'),
  //добавить локаторы через реальное устройство
  usbPrinter: idFromText('USB'),
  addUsbPrinterDialog: idFromText('Add USB device'),

  setTerminalName: nameTerm => {
    return commands.setInputValue(HardwareScreen.nameTerminalInput, nameTerm)
  },
  setTerminalAddress: addressTerm => {
    return commands.setInputValue(HardwareScreen.terminalAddress, addressTerm)
  },
  setMerchantId: merchIdTerm => {
    return commands.setInputValue(HardwareScreen.merchIdInput, merchId)
  },
  setMerchSecret: merchSecret => {
    return commands.setInputValue(HardwareScreen.merchSecretInput, merchSecret)
  },

  setNetPrinterName: nameNetPrint => {
    return commands.setInputValue(
      HardwareScreen.nameNetPrinterInput,
      nameNetPrint
    )
  },
  setAddressNetPrint: addressNetPrint => {
    return commands.setInputValue(
      HardwareScreen.addressNetPrinterInput,
      addressNetPrint
    )
  },
  setWidthNetPrint: widthNetPrint => {
    return commands.setInputValue(
      HardwareScreen.widthNetPrinterInput,
      widthNetPrint
    )
  },

  addTerminal: async terminalContent => {
    if (terminalContent.nameTerm) {
      await HardwareScreen.setTerminalName(terminalContent.nameTerm)
    }
    if (terminalContent.addressTerm) {
      await HardwareScreen.setTerminalName(terminalContent.addressTerm)
    }
    if (terminalContent.merchIdTerm) {
      await HardwareScreen.setTerminalName(terminalContent.merchIdTerm)
    }
    if (terminalContent.merchSecret) {
      await HardwareScreen.setTerminalName(terminalContent.merchSecret)
    }

    return driver.click(Buttons.submitButton)
  },
  addNetPrinter: async printerContent => {
    if (printerContent.nameNetPrint) {
      await HardwareScreen.setTerminalName(printerContent.nameNetPrint)
    }
    if (printerContent.addressNetPrint) {
      await HardwareScreen.setTerminalName(printerContent.addressNetPrint)
    }
    if (printerContent.addressNetPrint) {
      await HardwareScreen.setTerminalName(printerContent.addressNetPrint)
    }
    return driver.click(Buttons.submitButton)
  }
}
