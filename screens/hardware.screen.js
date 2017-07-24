import helper from 'tipsi-appium-helper'
import { Buttons } from '../screens'

const { idFromResourceId, idFromText, driver } = helper

import commands from '../commands'
const appId = 'se.mobilkassan:id/'

export const HardwareScreen = {
  hardwareSettings: idFromText('Payment terminals and printers'), //добавить content-Desc или изменить имя блока настроек
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
  netPrinteradded: idFromText('Net Printer'),
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
  controlUnitHardware: idFromText('Control unit'),
  controlUnitSwitcher: idFromResourceId(
    appId + 'se.mobilkassan:id/cu_type_switch'
  ),

  setTerminalName: nameTerminal => {
    return commands.setInputValue(
      HardwareScreen.nameTerminalInput,
      nameTerminal
    )
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

  async addNetPrinterAction(printer = 'Birch') {
    await commands.findAndClick(HardwareScreen.hardwareSettings)
    await commands.waitAndClick(HardwareScreen.addHardware, 5 * 1000)
    await commands.waitAndClick(HardwareScreen.printerRadioButton)
    await commands.findAndClick(Buttons.nextButton)
    await commands.waitAndClick(HardwareScreen.netPrinter)
    await commands.findAndClick(Buttons.nextButton)
    await commands.waitAndClick(HardwareScreen.birchPrinter)
    await commands.findAndClick(Buttons.nextButton)
  },

  // async addNetPrinterAction(printer = 'Custom') {
  //   await commands.findAndClick(HardwareScreen.hardwareSettings);
  //   await commands.waitAndClick(HardwareScreen.addHardware, 5 * 1000);
  //   await commands.waitAndClick(HardwareScreen.printerRadioButton);
  //   await commands.findAndClick(Buttons.nextButton);
  //   await commands.waitAndClick(HardwareScreen.netPrinter);
  //   await commands.findAndClick(Buttons.nextButton);
  //   await commands.waitAndClick(HardwareScreen.birchPrinter);
  //   await commands.findAndClick(Buttons.nextButton);
  // },
  addNetPrinter: async contentHardware => {
    if (contentHardware.nameNetPrint) {
      await HardwareScreen.setNetPrinterName(contentHardware.nameNetPrint)
    }

    if (contentHardware.addressNetPrint) {
      await HardwareScreen.setAddressNetPrint(contentHardware.addressNetPrint)
    }

    return driver.click(Buttons.saveButton)
  }
}
