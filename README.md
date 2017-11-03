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
    "platformVersion": "6.0" // версия android
  }
}
```

### Элементы экрана
Экран приложения описывается в файле elements.js

``` js
  // могут быть как селекторы
  corporateIDInput: idFromResourceId(appId + 'EditSeller_organizationNumber'),
  merchantNameInput: idFromResourceId(appId + 'EditSeller_name'),
  addressInput: idFromResourceId(appId + 'et_device_location_address'),

  // так и методы, которые реализуют некоторую функциональность
  setComment: comment => {
    return commands.setInputValue(ActivationScreen.commentInput, comment)
  }
```

### Команды
- ```findAndClick(selector)```- ищет элемент на экране, если не найден то скролит вниз (до 10 раз) и кликает по элементу если найдет
- ```findInList(selector)``` - ищет элемент на экране, если не найден то скролит вниз (до 10 раз)
- ```setInputValue(selector, value)``` - находит элемент и пишет текст в поле ввода
- ```waitForNotExist(selector)``` - ожидает что элемента нет на скрине
- ```waitAndClick(selector)``` - ждет появления элемента и кликает по нему
- ```pressBackBtton()``` - отправляет команду "назад"
- ```pressTabBtton()``` - отправляет команду "tab"
- ```scrollDown()``` - скролит вниз
- ```scrollUp()``` - скролит вверх
- ```touchAction(selector, 'longPress')``` - долгий тап на элементе
- ```clearElement()``` - очищает поле ввода

### Тест
```js
test.onFinish(async () => {
  await driver.closeApp()
})

test('Activation screen', async t => {
  await WelcomeScreen.goThrough() // запускает приложение и проходит страницу с визардом
  await SalesScreen.acceptActivationRequest() // нажимаем yes на диалоге запроса активации
  await ActivationScreen.requestActivation(activation) // заполняем активацию
  await driver.waitForVisible(
    ActivationScreen.activationSentDialogTitleFailed,
    10 * 1000
  ) // перед завержением теста, всегда добавлять какую-нибудь проверку
  t.pass('works correctly') // завершаем тест
})
```

### Запуст тестов
- Перед запустом тестов нужно запустить эмулятор android и сервер appium.
- Сервер appium можно запустить коммандой в папке с проектом ```npm run appium```
- После старта сервера в соседнем терминале можно запустить все тесты командой ```npm run test```
- Либо запустить конкретный тест ```node_modules/.bin/appium-helper --platform android --glob ./tests/02_activation.js```
- добавить переменные в playground '''.editor'''

### Docker
 - создание Image с appium и node ```docker-compose build```

### тесты на эмуляторе
 - запуск контейнера для тестирования genymotion устройства ```docker run --privileged -d -v /путь к/TestingAppium-master:/opt -e REMOTE_ADB=True -e ANDROID_DEVICES=ip адрес genymotion устройства:5555 --name container-appium testingappiummaster_appium```
 - вход в контейнер ```docker exec -it container-appium bash```
 - подключение устройства ```adb connect ip адрес genymotion:5555 && adb devices```
 - запуск тестов ```cd /opt && npm run test```

### тесты на реальном устройстве
 - запуск контейнера для тестирования genymotion устройства ```docker run --privileged -d -v /путь к/TestingAppium-master:/opt -v /dev/bus/usb:/dev/bus/usb --name container-appium testingappiummaster_appium```
 - вход в контейнер ```docker exec -it container-appium bash```
 - подключение устройства ```adb devices```
 - запуск тестов ```cd /opt && npm run test```
