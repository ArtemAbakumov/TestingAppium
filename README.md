## Требования
- требуемое окружение для [Appium](http://appium.io/slate/en/master/?javascript#setting-up-appium)
- проверить готовность окружения можно коммандой ```appium-doctor```
- установть зависимости, в папке с проектом выполнить ```npm install```


## Договоренности
- стартовая точка — главный экран 
- тестовый набор атомарен 
- он должен сам о себе позаботиться 
- не использовать метод .pause() 
- использовать повсеместно .waitForVisible() 

## Flow 
Для взаимодействия с приложением  использутеся [webdriver.io](http://webdriver.io/api.html), 
например его методы element, click, waitForVisible. 

Для тестирования используется фреймворк [tape](https://github.com/substack/tape#methods).

### Настройка
В файле .appiumhelperrc 

```json
{
  "android": {
    "appPath": "./app/mobilkassan-dev-debug.apk", // файл с приложением
    "deviceName": "emulator-5554", // название устройства
    "platformVersion": "7.1" // версия android
  }
}
```

### Элементы экрана
Экран приложения описывается в файле elements.js

``` js
export const WelcomeScreen = {
  title: idFromResourceId('android:id/action_bar_title'), // idFromAccessId - создает селектор по "resource id"
  licenceBtn: idFromAccessId('License'), // idFromAccessId - создает селектор по "content desc"
  continueBtn: idFromText('Continue'), // idFromText - создает селектор по "text"
  
  helpMenu: {  // можно создавать группы селекторов 
    about: idFromText('About'),
    help: idFromText('Help'),
    reportError: idFromText('Report Error'),
    exportEJournal: idFromText('Export E-journal')
  }
}
```

### Тест
```js
test('Welcome screen', async (t) => { // Название теста 'Welcome screen'
  await driver.waitForVisible(WelcomeScreen.setupWizard, 60000) // перед каждой коммандой driver добавлять await
  const alertTitle = await driver.element(WelcomeScreen.setupWizard).getText() // результат выполнения комманды можно сохранить в переменную
  t.equal(alertTitle, 'Setup wizard', 'Alert title is correct') // и протестировать
  const alertText = await driver.element(WelcomeScreen.welcomeMessage).getText()
  t.equal(alertText, 'Welcome! This guide will help you get started with the app.', 'Alert text is correct')//проверка текста в поле
  driver.scrollTo// скролл экрана
  await driver.element(WelcomeScreen.continueBtn).click()
  await driver.waitForVisible(WelcomeScreen.setOrientationTitle, 60000)
  await driver.element(WelcomeScreen.continueBtn).click()
  await driver.touchAction({action:'tap',x:103,y:200})// нажатие по конкретным координатам
})
```

### Запуст тестов
- Перед запустом тестов нужно запустить эмулятор android и сервер appium.
- Сервер appium можно запустить коммандой в папке с проектом ```npm run appium```
- После старта сервера в соседнем терминале можно запустить все тесты коммандой ```npm run test```
- Либо запустить конкретный тест ```npm run test -- --glob ./tests/01_welcome.js```

### Playground
Для проверки селекторов можно запустить Playground режим: 
```npm run playground```
например ```js
await driver.element(helper.idFromResourceId('android:id/button3'))
````# ArtemAbakumov
