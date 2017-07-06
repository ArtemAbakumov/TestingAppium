import helper from 'tipsi-appium-helper'

const { driver } = helper

const defaultScrollSelector = helper.idFromResourceId('android:id/content')
const defaultScrollOffset = 200
const defaultScrollCount = 10

export const keyCodes = {
  tab: 61,
  back: 4
}

export function scrollDown(
  scrollSelector = defaultScrollSelector,
  offset = defaultScrollOffset
) {
  return driver.swipeUp(scrollSelector, offset)
}

export function scrollUp(
  scrollSelector = defaultScrollSelector,
  offset = defaultScrollOffset
) {
  return driver.swipeDown(scrollSelector, offset)
}

export async function findInList(
  selector,
  scrollCount = defaultScrollCount,
  listSelector = defaultScrollSelector,
  scrollOffset = defaultScrollOffset
) {
  if (await driver.isVisible(selector)) {
    return driver.element(selector)
  }

  for (let i = 0; i < scrollCount; i += 1) {
    await scrollDown(listSelector, scrollOffset)
    if (await driver.isVisible(selector)) {
      return driver.element(selector)
    }
  }

  return driver.element(selector)
}

export function waitForNotExist(selector, timeout = 10000) {
  return driver.waitForExist(selector, timeout, true)
}

export async function waitAndClick(selector, timeout) {
  await driver.waitForVisible(selector, timeout)
  return driver.click(selector)
}

export function pressTabBtton() {
  return driver.pressKeycode(keyCodes.tab)
}

export function pressBackBtton() {
  return driver.pressKeycode(keyCodes.back)
}

export async function setInputValue(selector, value) {
  // const typeText = () => driver.element(selector).setValue(value)
  const typeText = () => driver.element(selector).click().keys('' + value)

  await findInList(selector)

  try {
    await typeText()
    return Promise.resolve()
  } catch (err) {
    // HACK: Sometimes appium loses element
    await scrollDown(defaultScrollSelector, 100)
    return typeText()
  }
}

export async function findAndClick(
  selector,
  listSelector = defaultScrollSelector
) {
  await findInList(selector, defaultScrollCount, listSelector)
  return driver.element(selector).click()
}

export default {
  findAndClick,
  findInList,
  pressBackBtton,
  pressTabBtton,
  scrollDown,
  scrollUp,
  setInputValue,
  waitForNotExist,
  waitAndClick
}
