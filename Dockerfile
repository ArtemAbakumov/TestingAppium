FROM appium/appium

RUN curl --silent --location https://deb.nodesource.com/setup_8.x | bash - && apt-get install --yes nodejs \
  && npm cache clean --force \
  && rm -rf ~/.npm \
  && npm install -g tipsi-appium-helper \
  && npm install -g webdriverio
