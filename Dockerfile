FROM appium/appium

RUN curl --silent --location https://deb.nodesource.com/setup_8.x | bash - && apt-get install --yes nodejs
ADD . /opt
WORKDIR /opt
RUN npm install
